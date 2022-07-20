import {Management} from "./manager";
import {Student} from "./student";
import * as rl from 'readline-sync';

export class StudentMenu {
    management = new Management();

    showAllStudent() {
        console.log(`--- Hien thi danh sach sih vien ---`);
        let child = this.management.showStudent();
        console.table(child)
    }

    inputStudent() {
        let name = rl.question('Nhap ten sinh vien: ');
        let email = rl.question('Nhap email sinh vien: ');
        let grade = rl.question('Nhap lop sinh vien: ');
        let age = rl.question('Nhap tuoi sinh vien: ');
        return new Student(name, email, grade, age);
    }

    editStudent() {
        console.log("--- Sua thong tin sinh vien---");
        let index = +rl.question('Nhap vi tri muon xoa: ');
        let oldStudent = this.inputStudent();
        this.management.updateStudent(index, oldStudent);
    }

    creatStudent() {
        console.log('--- tao sinh vien moi ---');
        let newStudent = this.inputStudent();
        this.management.creatStudent(newStudent);
    }

    deleteStudent() {
        console.log('--- Xoa thong tin sinh vien ---');
        let studentDelete = rl.question('Nhap ten sinh vien can xoa: ');
        this.management.deleteSudent(studentDelete);
    }
}

