let React = {
  createElement: function (type, config, children) {
    const props = {};
    let key = null;
    let ref = null;

    // 1. 处理属性
    if (config) {
      // special props: key/ref

      if (hasValidKey(config)) key = config.key;
      if (hasValidRef(config)) ref = config.ref;

      for (const prop in config) {
        if (Object.prototype.hasOwnProperty.call(config, prop)) {
          props[prop] = config[prop];
        }
      }
    }

    // 2. 处理子元素
    const childrenLen = arguments.length - 2;
    if (childrenLen === 1) props.children = children;
    else if (childrenLen > 1) {
      const childArray = new Array(childrenLen);
      for (let i = 0; i < childrenLen; i++) {
        childArray[i] = arguments[i + 2];
      }
      props.children = childArray;
    }

    // 3. 处理默认属性
    if (type && type.defaultProps) {
      for (const prop in type.defaultProps) {
        if (Object.prototype.hasOwnProperty.call(type.defaultProps, prop)) {
          props[prop] = type.defaultProps[prop];
        }
      }
    }

    return this.ReactElement(type, key, ref, props);
  },

  hasSymbol: typeof Symbol === "function" && Symbol.for,
  REACT_ELEMENT_TYPE: this.hasSymbol() ? Symbol.for("react.element") : "0xeac7",

  ReactElement: (type, key, ref, props) => {
    const element = {
      $$typeof: this.REACT_ELEMENT_TYPE,
      type,
      key,
      ref,
      props,
    };

    return element;
  },
};

function isValidElement(object) {
  return (
    typeof object === "object" &&
    object !== null &&
    object.$$typeof === REACT_ELEMENT_TYPE
  );
}

const ReactDOM = {
  render: (element, container) => {
    // 1. 创建不同类型的 DOM 节点
    const dom =
      element.type == "TEXT_ELEMENT"
        ? document.createTextNode("")
        : document.createElement(element.type);

    // 2.为 DOM 节点添加属性 props (排查 children 属性)
    const isProperty = (key) => key !== "children";
    Object.keys(element.props)
      .filter(isProperty)
      .forEach((name) => {
        dom[name] = element.props[name];
      });

    // 3. 遍历 children，递归调用 render
    element.props.children.forEach((child) => render(child, dom));

    // 4. 将 DOM 节点添加至 root 根节点
    container.appendChild(dom);
  },
};

const a = (
  <div className="react-element">
    <h1>Hello, element</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia vero
      autem ipsam sapiente enim deleniti qui perferendis eaque reprehenderit
      repellendus! Possimus error fugit, aperiam at dolorem consectetur eveniet
      eos expedita!
    </p>
  </div>
);
