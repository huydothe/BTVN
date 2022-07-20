"use strict";
exports.__esModule = true;
exports.Management = void 0;
var Management = /** @class */ (function () {
    function Management() {
        this.storage = [];
    }
    Management.prototype.showStudent = function () {
        return this.storage;
    };
    Management.prototype.updateStudent = function (index, newStudent) {
        this.storage[index] = newStudent;
    };
    Management.prototype.creatStudent = function (student) {
        this.storage.push(student);
    };
    Management.prototype.deleteSudent = function (student) {
        for (var i = 0; i < this.storage.length; i++) {
            if (this.storage[i].getName() === student) {
                this.storage.splice(i, 1);
            }
        }
    };
    return Management;
}());
exports.Management = Management;
