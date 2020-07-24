var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
})(Validation || (Validation = {}));
var Validation;
(function (Validation) {
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
var strings1 = ["Hello", "98052", "101"];
var validators1 = {};
validators1["ZIP code"] = new Validation.ZipCodeValidator();
validators1["Letters only"] = new Validation.LettersOnlyValidator();
for (var _i = 0, strings1_1 = strings1; _i < strings1_1.length; _i++) {
    var s = strings1_1[_i];
    for (var name_1 in validators1) {
        console.log("\"" + s + "\" - " + (validators1[name_1].isAcceptable(s) ? "matches" :
            "does not match") + " " + name_1);
    }
}
