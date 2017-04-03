import { observable } from 'mobx';

class MainStore {
  @observable test:string = "Hello World";

  constructor() {
    this.test = "Hello World again";
  }
}

export default new MainStore();
