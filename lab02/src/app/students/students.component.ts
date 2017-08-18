import {Component} from '@angular/core';
import {STUDENTS} from '../mocks';
import {Student} from './student';
@Component({
 selector: 'students',
 templateUrl:     './students.component.html',
	styleUrls:['./students.component.css']
})
export class StudentsComponent {	
	students : Student[];
	averageGpa(){
		let sum = 0;
		for(let student of this.students){
			sum += student.gpa;
		}
		return sum/this.students.length;
	}
	ngOnInit(){
	this.students=STUDENTS;
	}
}