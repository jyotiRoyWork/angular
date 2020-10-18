import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student.model'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[];

  constructor(private studentService:StudentService) { }



  ngOnInit(): void {
    this.students = this.studentService.onGet();
  }

  onDelete(id: Number){
    this.studentService.onDelete(id);
  }

}
