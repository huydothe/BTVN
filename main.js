"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
var Code_1 = require("./Code");
var choice = -1;
var studentMenu = new Code_1.StudentMenu();
var yourChoice;
(function (yourChoice) {
    yourChoice[yourChoice["ShowAllStudents"] = 1] = "ShowAllStudents";
    yourChoice[yourChoice["EditStudent"] = 2] = "EditStudent";
    yourChoice[yourChoice["DeleteStudent"] = 3] = "DeleteStudent";
    yourChoice[yourChoice["CreatStudent"] = 4] = "CreatStudent";
    yourChoice[yourChoice["Exit"] = 0] = "Exit";
})(yourChoice || (yourChoice = {}));
function menu() {
    console.log("---Quan ly sinh vien---");
    console.log("1. Hien thi danh sach sinh vien.");
    console.log("2. Sua thong tin sinh vien.");
    console.log("3. Xoa sinh vien.");
    console.log("4. Tao moi thong tin sinh vien.");
    console.log("0. Thoat chuong trinh.");
}
do {
    menu();
    choice = +rl.question("Nhap lua chon cua ban!!");
    switch (choice) {
        case yourChoice.ShowAllStudents:
            studentMenu.showAllStudent();
            break;
        case yourChoice.EditStudent:
            studentMenu.editStudent();
            break;
        case yourChoice.DeleteStudent:
            studentMenu.deleteStudent();
            break;
        case yourChoice.CreatStudent:
            studentMenu.creatStudent();
            break;
    }
} while (choice != yourChoice.Exit);
