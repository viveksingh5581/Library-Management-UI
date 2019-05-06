class RestClient {
  constructor(url) {
    this.url = url;
  }

  checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
      return true;
    } else {
      var error = new Error(response.status);
      error.response = response;
      throw error.message;
    }
  };

  parseJSON = response => {
    return response.json();
  };

  get = (successCB, errorCB) => {
    this._handleResponse(false, successCB, errorCB, null);
  };
  post = (successCB, errorCB, requestBody) => {
    this._handleRequest(true, successCB, errorCB, requestBody);
  };

  _handleRequest = async (isPost, successCB, errorCB, requestBody) => {
    let requestHeaders = {
      "Content-Type": "application/json"
    };
    if (isPost && Object.keys(requestBody).length === 0) {
      requestHeaders = {};
    }
    const response = isPost
      ? await fetch(this.url, {
          method: "POST",
          headers: requestHeaders,
          body: JSON.stringify(requestBody)
        })
      : fetch(this.url);
    const status = await this.checkStatus(response);
    const json = await this.parseJSON;
    if (status) {
      await successCB(json);
    } else {
      await errorCB(status);
    }
  };
}
export default RestClient;
