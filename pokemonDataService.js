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
var di_1 = require('angular2/di');
var localstorageService_1 = require('localstorageService');
var PokemonDataService = (function () {
    //constructor($http: Http, lsService: LocalstorageService){
    function PokemonDataService(lsService) {
        //this.$http = $http;
        this.lsService = lsService;
    }
    PokemonDataService.prototype.getPokedex = function () {
        var pokedex = this.lsService.getItem('pokedex');
        //if(pokedex === null){
        //  return this
        //    .$http
        //    .get('http://pokeapi.co/api/v1/pokedex/1/')
        //    .toRx()
        //    .map(pokedex => pokedex.json());
        //}
    };
    PokemonDataService = __decorate([
        di_1.Injectable(), 
        __metadata('design:paramtypes', [localstorageService_1.LocalstorageService])
    ], PokemonDataService);
    return PokemonDataService;
})();
exports.PokemonDataService = PokemonDataService;
