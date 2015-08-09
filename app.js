/// <reference path="typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var pokemonDataService_1 = require('pokemonDataService');
var localstorageService_1 = require('localstorageService');
// Annotation section
var MyAppComponent = (function () {
    function MyAppComponent(pokemonDataService) {
        var _this = this;
        console.log("App : Constructor");
        var self = this;
        this.pokemonDataService = pokemonDataService;
        this.pokemonDataService.getPokedex().subscribe(function (pokedex) {
            _this.pokedex = pokedex.pokemon;
        });
    }
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            appInjector: [localstorageService_1.LocalstorageService, pokemonDataService_1.PokemonDataService]
        }),
        angular2_1.View({
            template: "\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <h2 class=\"header\">Listing</h2>\n        <div class=\"collection\">\n          <!-- Make this list scrollable -->\n          <!-- Add a way to filter it -->\n          <a class=\"collection-item\" *ng-for=\"#pokemon of pokedex\" href=\"{{pokemon.resource_uri}}\">\n            <!-- Cache this images into localstorage and base64 them All !-->\n            <img src=\"http://www.pokemontrash.com/pokedex/images/x-y5g/{{pokemon.number}}.png\" alt=\"\"/><span class=\"badge\">{{pokemon.number}}</span> {{pokemon.name}}\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  ",
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [pokemonDataService_1.PokemonDataService])
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent, [angular2_1.httpInjectables]);
