export class LocalstorageService {
  ls:any;

  constructor() {
    this.ls = localStorage;
  }

  getItem(key:string) {
    return JSON.parse(this.ls.getItem(key));
  }

  setItem(key:string, value: string) {
    this.ls.setItem(key, JSON.stringify(value));
  }

  removeItem(key:string){
    this.ls.removeItem(key);
  }
}