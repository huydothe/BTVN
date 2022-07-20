"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, email, grade, age) {
        this.name = name;
        this.email = email;
        this.grade = grade;
        this.age = age;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.setName = function (value) {
        this.name = value;
    };
    Student.prototype.getEmail = function () {
        return this.email;
    };
    Student.prototype.setEmail = function (value) {
        this.email = value;
    };
    Student.prototype.getGrade = function () {
        return this.grade;
    };
    Student.prototype.setGrade = function (value) {
        this.grade = value;
    };
    Student.prototype.getAge = function () {
        return this.age;
    };
    Student.prototype.setAge = function (value) {
        this.age = value;
    };
    return Student;
}());
exports.Student = Student;
