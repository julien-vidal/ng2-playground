import {Injectable} from 'angular2/angular2';
import {LocalstorageService} from 'localstorageService';
//import {Http, httpInjectables} from 'angular2/http';

@Injectable()
export class PokemonDataService{
  lsService:any;
  $http:any;

  //constructor($http: Http, lsService: LocalstorageService){
  //constructor(@Inject(LocalstorageService) lsService){
  constructor(lsService: LocalstorageService){
    //this.$http = $http;
    console.log("PokemonDataService : Constructor");
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