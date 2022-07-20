import {Student} from "./student";
import {Management} from "./manager";
import * as rl from 'readline-sync';
import {StudentMenu} from "./Code";

let choice = -1;
let studentMenu = new StudentMenu();


enum yourChoice {
    ShowAllStudents = 1,
    EditStudent = 2,
    DeleteStudent = 3,
    CreatStudent = 4,
    Exit = 0
}

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

