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
var rx_1 = require('rx');
var localstorageService_1 = require('localstorageService');
var PokemonDataService = (function () {
    function PokemonDataService($http, lsService) {
        this.$http = $http;
        this.lsService = lsService;
        this.serviceCache = {};
    }
    PokemonDataService.prototype.getPokedex = function () {
        var pokedex = this.lsService.getItem('pokedex');
        var self = this;
        if (pokedex === null) {
            return this
                .$http
                .get('http://pokeapi.co/api/v1/pokedex/1/')
                .map(function (pokedex) {
                pokedex = pokedex.json();
                self._sortPokedex(pokedex);
                self.lsService.setItem('pokedex', pokedex);
                return self.lsService.getItem('pokedex');
            });
        }
        else {
            return rx_1.Observable.create(function (observer) {
                observer.onNext(pokedex);
                observer.onCompleted();
            });
        }
    };
    PokemonDataService.prototype._sortPokedex = function (pokedex) {
        pokedex.pokemon.sort(function (a, b) {
            var aUriArray = a.resource_uri.split('/');
            var bUriArray = b.resource_uri.split('/');
            aUriArray.pop();
            bUriArray.pop();
            var a = parseInt(aUriArray.pop(), 10);
            var b = parseInt(bUriArray.pop(), 10);
            return a - b;
        });
    };
    PokemonDataService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_1.Http, localstorageService_1.LocalstorageService])
    ], PokemonDataService);
    return PokemonDataService;
})();
exports.PokemonDataService = PokemonDataService;
