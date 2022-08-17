const http = require("http");

class Application {
  constructor() {
    this.middlewares = [];
  }

  use(middleware) {
    this.middlewares.push(middleware);
  }

  listen(...args) {
    const server = http.createServer((req, res) => {
      const ctx = { req, res };
      const composed = compose(this.middlewares);
      composed(ctx);
    });

    server.listen(...args);
  }
}

function compose(middlewares) {
  return function (ctx) {
    const dispatch = (index) => {
      if (index === middlewares.length) return;
      const middleware = middlewares[index];
      return middleware(ctx, () => dispatch(index + 1));
    };

    return dispatch(0);
  };
}
