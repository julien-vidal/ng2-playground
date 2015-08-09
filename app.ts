/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, Injectable, httpInjectables, NgFor} from 'angular2/angular2';
import {PokemonDataService} from 'pokemonDataService';
import {LocalstorageService} from 'localstorageService';

// Annotation section
@Component({
  selector: 'my-app',
  appInjector: [LocalstorageService, PokemonDataService]
})
@View({
  template: `
  <div class="container">
    <div class="row">
      <div class="col s12">
        <h2 class="header">Listing</h2>
        <div class="collection">
          <!-- Make this list scrollable -->
          <!-- Add a way to filter it -->
          <a class="collection-item" *ng-for="#pokemon of pokedex" href="{{pokemon.resource_uri}}">
            <!-- Cache this images into localstorage and base64 them All !-->
            <img src="http://www.pokemontrash.com/pokedex/images/x-y5g/{{pokemon.number}}.png" alt=""/><span class="badge">{{pokemon.number}}</span> {{pokemon.name}}
          </a>
        </div>
      </div>
    </div>
  </div>
  `,
  directives : [NgFor]
})
// Component controller
class MyAppComponent {
  pokemonDataService:any;
  pokedex:any;

  constructor(pokemonDataService: PokemonDataService) {
    console.log("App : Constructor");
    var self = this;
    this.pokemonDataService = pokemonDataService;

    this.pokemonDataService.getPokedex().subscribe(pokedex => {
      this.pokedex = pokedex.pokemon;
    });
  }
}

bootstrap(MyAppComponent, [httpInjectables]);