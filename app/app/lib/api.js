import Base64 from 'base-64';

const API_REQUEST_TIMEOUT = 45000;

export default callAPI = (url, data, method, user, password) => {
  return _timeout(API_REQUEST_TIMEOUT, _callAPI(url, data, method, user, password));
}

_callAPI = async (url, data, method, user, password) => {
  const response = await fetch(url, {
    method: method,
    headers: {
      'Authorization': `Basic ${Base64.encode(`${user}:${password}`)}`,
      'Content-Type': 'application/json'
    },
    body: data ? JSON.stringify(data) : null
  });

  const json = await response.json();
  return json;
}

function _timeout(ms, promise) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject(new Error("timeout"));
    }, ms);
    promise.then(resolve, reject);
  })
}
