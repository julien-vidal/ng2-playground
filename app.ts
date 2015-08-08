/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {PokemonDataService} from 'pokemonDataService';
import {LocalstorageService} from 'localstorageService';

// Annotation section
@Component({
  selector: 'my-app' ,
  appInjector: [PokemonDataService]
})
@View({
  template: '<h1>Hello {{ name }}</h1>'
})
// Component controller
class MyAppComponent {
  pokemonDataService:any;

  //constructor(pokemonDataService: PokemonDataService) {
  constructor() {
    //this.pokemonDataService = pokemonDataService;
    //this.pokemonDataService.getPokedex().subscribe(pokedex => console.log(pokedex));
  }
}

bootstrap(MyAppComponent);
