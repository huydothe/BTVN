import {Student} from "./student";

export class Management {
    storage: Student[] = [];

    showStudent() {
        return this.storage
    }

    updateStudent(index: number, newStudent: Student) {
        this.storage[index] = newStudent;
    }

    creatStudent(student: Student) {
        this.storage.push(student);
    }

    deleteSudent(student) {
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].getName() === student) {
                this.storage.splice(i, 1);
            }
        }
    }
}