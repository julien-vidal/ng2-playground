var LocalstorageService = (function () {
    function LocalstorageService() {
        this.ls = localStorage;
    }
    LocalstorageService.prototype.getItem = function (key) {
        return JSON.parse(this.ls.getItem(key));
    };
    LocalstorageService.prototype.setItem = function (key, value) {
        this.ls.setItem(key, JSON.stringify(value));
    };
    LocalstorageService.prototype.removeItem = function (key) {
        this.ls.removeItem(key);
    };
    return LocalstorageService;
})();
exports.LocalstorageService = LocalstorageService;
