import { delay } from '../utils/generalUtils';

const CONST_WELCOME = 'Welcome';

class ServerService {
  constructor(url) {
    console.log('> ServerService -> constructor', url);
    this.url = url;
  }

  async requestTodos() {
    console.log('> ServerService -> requestTodos');
    const data = await fetch(`${this.url}/todos`, {
      method: 'GET',
    }).catch((e) => {
      console.log(`> ServerService -> requestTodos: error = ${e}`);
    });
    await delay(3000);
  }
}

export default ServerService;
