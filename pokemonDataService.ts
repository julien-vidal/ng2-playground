import {Injectable, bind} from 'angular2/di';
import {Http, httpInjectables} from 'angular2/http';
import {LocalstorageService} from 'localstorageService';

@Injectable()
export class PokemonDataService{
  lsService:any;
  $http:any;

  //constructor($http: Http, lsService: LocalstorageService){
  constructor(lsService: LocalstorageService){
    //this.$http = $http;
    this.lsService = lsService;
  }

  getPokedex(){
    var pokedex = this.lsService.getItem('pokedex');
    //if(pokedex === null){
    //  return this
    //    .$http
    //    .get('http://pokeapi.co/api/v1/pokedex/1/')
    //    .toRx()
    //    .map(pokedex => pokedex.json());
    //}

  }

}