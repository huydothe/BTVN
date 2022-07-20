"use strict";
exports.__esModule = true;
exports.StudentMenu = void 0;
var manager_1 = require("./manager");
var student_1 = require("./student");
var rl = require("readline-sync");
var StudentMenu = /** @class */ (function () {
    function StudentMenu() {
        this.management = new manager_1.Management();
    }
    StudentMenu.prototype.showAllStudent = function () {
        console.log("--- Hien thi danh sach sih vien ---");
        var child = this.management.showStudent();
        console.table(child);
    };
    StudentMenu.prototype.inputStudent = function () {
        var name = rl.question('Nhap ten sinh vien: ');
        var email = rl.question('Nhap email sinh vien: ');
        var grade = rl.question('Nhap lop sinh vien: ');
        var age = rl.question('Nhap tuoi sinh vien: ');
        return new student_1.Student(name, email, grade, age);
    };
    StudentMenu.prototype.editStudent = function () {
        console.log("--- Sua thong tin sinh vien---");
        var index = +rl.question('Nhap vi tri muon xoa: ');
        var oldStudent = this.inputStudent();
        this.management.updateStudent(index, oldStudent);
    };
    StudentMenu.prototype.creatStudent = function () {
        console.log('--- tao sinh vien moi ---');
        var newStudent = this.inputStudent();
        this.management.creatStudent(newStudent);
    };
    StudentMenu.prototype.deleteStudent = function () {
        console.log('--- Xoa thong tin sinh vien ---');
        var studentDelete = rl.question('Nhap ten sinh vien can xoa: ');
        this.management.deleteSudent(studentDelete);
    };
    return StudentMenu;
}());
exports.StudentMenu = StudentMenu;
