import {Injectable, Http} from 'angular2/angular2';
import {Observable} from 'rx';
import {LocalstorageService} from 'localstorageService';

@Injectable()
export class PokemonDataService{
  lsService:any;
  $http:any;
  serviceCache:any;

  constructor($http: Http, lsService: LocalstorageService){
    this.$http = $http;
    this.lsService = lsService;
    this.serviceCache = {};
  }

  getPokedex(){
    var pokedex = this.lsService.getItem('pokedex');
    var self    = this;
    if(pokedex === null){
      return this
        .$http
        .get('http://pokeapi.co/api/v1/pokedex/1/')
        .map(pokedex => {
          pokedex = pokedex.json();
          self._sortPokedex(pokedex);
          self._addPokemonNumber(pokedex);
          self.lsService.setItem('pokedex', pokedex);
          return self.lsService.getItem('pokedex');
        });
    }
    else{
      return Observable.create(observer => {
        observer.onNext(pokedex);
        observer.onCompleted();
      });
    }
  }

  _sortPokedex(pokedex){
    pokedex.pokemon.sort(function(a, b) {
      var aUriArray = a.resource_uri.split('/');
      var bUriArray = b.resource_uri.split('/');
      aUriArray.pop();
      bUriArray.pop();
      var aNumber = parseInt(aUriArray.pop(), 10);
      var bNumber = parseInt(bUriArray.pop(), 10);
      return aNumber - bNumber;
    });
  }

  _addPokemonNumber(pokedex){
    pokedex.pokemon.forEach(pokemon => {
      var pokemonUri = pokemon.resource_uri.split('/');
      pokemonUri.pop();
      pokemon.number = parseInt(pokemonUri.pop(), 10);
    });
  }
}