module.exports = async function (_promise) {
    // this promise will always resolve, so that there's no try catch needed
    return new Promise((resolve) => {
      _promise
        .then((value) => {
          resolve([null, value]);
        })
        .catch((err) => {
          resolve([err, null]);
        });
    });
  };