export class Student {
    private name: string;
    private email: string;
    private grade: string;
    private age: number;

    constructor(name: string, email: string, grade: string, age: number) {
        this.name = name;
        this.email = email;
        this.grade = grade;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(value: string) {
        this.email = value;
    }

    getGrade(): string {
        return this.grade;
    }

    setGrade(value: string) {
        this.grade = value;
    }

    getAge(): number {
        return this.age;
    }

    setAge(value: number) {
        this.age = value;
    }
}