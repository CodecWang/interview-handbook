function promisify(fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      const callback = (error, data) => {
        if (error) reject(error);
        resolve(data);
      };

      fn.apply(null, [...args, callback]);
    });
  };
}

var fs = require("fs");
fs.readFile("input.txt", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("异步读取：" + data.toString());
});

promisify(fs.readFile)("input.txt")
  .then((data) => {
    console.log("异步读取：" + data.toString());
  })
  .catch((err) => {
    console.error(err);
  });
