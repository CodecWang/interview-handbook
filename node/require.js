// 深入 Node.js 的模块加载机制，手写 require 函数
// https://segmentfault.com/a/1190000023828613

function MyModule(id = "") {
  this.id = id;
  this.path = path.dirname(id);
  this.exports = {};
  this.filename = null;
  this.loaded = false;
}

MyModule.prototype.require = function (id) {
  return MyModule._load(id);
};

MyModule.prototype.load = function (filename) {
  const extName = path.extname(filename);
  MyModule._extensions[extName](this, filename);
  this.loaded = true;
};

MyModule.prototype._compile = function (content, filename) {
  const wrapper = MyModule.wrap(content); // 获取包装后函数体

  // vm 是 nodejs 的虚拟机沙盒模块，runInThisContext 方法可以接受一个字符串并将它转化为一个函数
  // 返回值就是转化后的函数，所以 compiledWrapper 是一个函数
  const compiledWrapper = vm.runInThisContext(wrapper, {
    filename,
    lineOffset: 0,
    displayErrors: true,
  });

  // 准备 exports, require, module, __filename, __dirname 这几个参数
  // exports 可以直接用 module.exports，即 this.exports
  // require 官方源码中还包装了一层，其实最后调用的还是 this.require
  // module 不用说，就是 this 了
  // __filename 直接用传进来的 filename 参数了
  // __dirname 需要通过 filename 获取下
  const dirname = path.dirname(filename);

  compiledWrapper.call(this.exports, this.require, this, filename, dirname);
};

MyModule._cache = Object.create(null);
MyModule._load = function (request) {
  const filename = MyModule._resolveFilename(request);

  // check cache
  const cached = MyModule._cache[filename];
  if (cached) return cached.exports;

  // cache not exists
  const module = new MyModule(filename);
  MyModule._cache[filename] = module;
  module.loaded(filename);
  return module.exports;
};
MyModule._resolveFilename = function (request) {
  const filename = path.resolve(request);
  const extname = path.extname(request);

  // 如果没有文件后缀名，尝试添加.js 和.json
  if (!extname) {
    const exts = Object.keys(MyModule._extensions);
    for (let i = 0; i < exts.length; i++) {
      const currentPath = `${filename}${exts[i]}`;

      // 如果拼接后的文件存在，返回拼接的路径
      if (fs.existsSync(currentPath)) return currentPath;
    }
  }

  return filename;
};

MyModule._extensions[".js"] = function (module, filename) {
  const content = fs.readFileSync(filename, "utf8");
  module._compile(content, filename);
};

MyModule.wrapper = [
  "(function (exports, require, module, __filename, __dirname) { ",
  "\n});",
];
MyModule.wrap = function (script) {
  return MyModule.wrapper[0] + script + MyModule.wrapper[1];
};
