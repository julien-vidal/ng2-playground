import {Injectable, bind} from 'angular2/di';

@Injectable()
export class LocalstorageService {
  ls:any;

  constructor() {
    this.ls = localStorage;
  }

  getItem(key:string) {
    return this.ls.getItem(key);
  }

  setItem(key:string, value: string) {
    this.ls.setItem(key, value);
  }

  removeItem(key:string){
    this.ls.removeItem(key);
  }
}