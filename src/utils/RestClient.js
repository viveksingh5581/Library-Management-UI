class RestClient {
  constructor(url) {
    this.url = url;
  }
  checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.status);
      error.response = response;
      throw error;
    }
  };

  parseJSON = response => {
    return response.json();
  };

  get(successCB, errorCB) {
    this._handleResponse(false, null, successCB, errorCB);
  }

  post(successCB, errorCB, requestBody) {
    this._handleResponse(true, requestBody, successCB, errorCB);
  }

  _handleResponse = (isPost, requestBody, successCB, errorCB) => {
    let requestHeaders = {
      "Content-Type": "application/json"
    };
    if (isPost && Object.keys(requestBody).length === 0) {
      requestHeaders = {};
    }
    let response = isPost
      ? fetch(this.url, {
          method: "POST",
          headers: requestHeaders,
          body: JSON.stringify(requestBody)
        })
      : fetch(this.url);
    response
      .then(this.checkStatus)
      .then(this.parseJSON)
      .then(response => {
        successCB(response);
      })
      .catch(error => {
        errorCB(error.message);
      });
  };
}
export default RestClient;
