import {list} from './mock/vehicle';

let instance = null;

export default class Api {
  static getInstance() {
    if (!instance) {
      instance = new Api();
    }

    return instance;
  }

  async loadVehicles() {
    await emulateLatency(300);
    return list;
    // return this.fetchApi('rocket');
  }

  async fetchApi(path) {
    return fetch(`/api/${path}`);
  }
}

const emulateLatency = duration => new Promise((resolve, reject) => {
  setTimeout(() => resolve(), duration);
});
