import { Injectable } from '@angular/core';
// import {Student} from '../models/student.model'
import { Student } from './../models/student.model'
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[]=[
    {
      id: 1,
      name: "student one",
      email: "studentone@gmail.com",
      phone: 1111

    },
    {
      id: 2,
      name: "student two",
      email: "studenttwo@gmail.com",
      phone: 2222

    }
  ];
  constructor() { }

  onGetStudent(id: Number){
    return this.students.find(x=>x.id === id)
  }

  onGet(){
    return this.students;
  }

  onAdd(student: Student){
    this.students.unshift(student);
  }

  onDelete(id: Number){
    let student = this.students.find(x=>x.id === id);
    let index = this.students.indexOf(student,0);
    this.students.splice(index,1);
  }

  onUpdate(student: Student){
    let oldStudent = this.students.find(x=>x.id === student.id);
    oldStudent.name = student.name;
    oldStudent.email = student.email;
    oldStudent.phone = student.phone;
  }
}
