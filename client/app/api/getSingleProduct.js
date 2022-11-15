import axios from "axios";

export const getSingleProduct = async (url) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });

  return promise;
};
