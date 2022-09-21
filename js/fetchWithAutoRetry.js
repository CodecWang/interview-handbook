// 使用 async/await
function fetchWithAutoRetry(fetcher, retryCount) {
  return new Promise(async (resolve, reject) => {
    while (retryCount--) {
      try {
        const ret = await fetcher();
        resolve(ret);
        break;
      } catch (error) {
        if (!retryCount) reject(error);
      }
    }
  });
}

// 使用链式调用
function fetchWithAutoRetry(fetcher, retryCount) {
  return new Promise((resolve, reject) => {
    function run() {
      fetcher()
        .then(resolve)
        .catch((err) => {
          if (retryCount--) run();
          else reject(err);
        });
    }
    run();
  });
}
