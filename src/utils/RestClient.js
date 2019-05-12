/**
 * This is the class used to Make Rest call to the services.
 * @author Rituj
 * @class RestClient
 */
class RestClient {
  constructor(url) {
    this.url = url;
  }

  /**
   * This method is used to check the response.This will check if the response is
   * greater then or equal to 200 and less then 300
   * @param response Its a response used to check for correct response or not.
   * @returns true or false based on the status.
   */
  checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
      return true;
    } else {
      var error = new Error(response.status);
      error.response = response;
      throw error.message;
    }
  };

  /**
   * This method is used to parse the json response.
   * @param response Its a response used to check for correct response or not.
   * @returns a json response.
   */
  parseJSON = response => {
    return response.json();
  };

  /**
   * This method is used to make get call to the services. It takes 2 parameters, successCB, errorCB
   * and based on the response it will call success or error callbacks.
   * @param successCB
   * @param errorCB
   * @returns json response for the desired request
   */
  get = (successCB, errorCB) => {
    this._handleRequest(false, successCB, errorCB, null);
  };

  /**
   * This method is used to make post call to the services. It takes 2 parameters, successCB, errorCB
   * and based on the response it will call success or error callbacks.
   * @param successCB
   * @param errorCB
   * @param requestBody
   * @returns json response for the desired request
   */
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
