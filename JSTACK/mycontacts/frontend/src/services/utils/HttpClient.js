import delay from "../../utils/delay";
import APIError from '../../errors/APIerror';

class HttpClient{
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  async get(path){
    await delay(500);

    const response = await fetch(`${this.baseURL}${path}`);

    const contentType = response.headers.get('Content-type');

    let body = null;

    if(contentType.includes('application/json')){
      body = await response.json();
    }

    if(response.ok){
      return body;
    }

    throw new APIError(response, body);
  }
}

export default HttpClient;
