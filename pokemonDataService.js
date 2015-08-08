var PokemonDataService = (function () {
    //$http:any;
    //constructor($http: Http, lsService: LocalstorageService){
    //constructor(lsService: LocalstorageService){
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
    return PokemonDataService;
})();
exports.PokemonDataService = PokemonDataService;
