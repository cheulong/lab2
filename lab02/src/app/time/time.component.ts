import {Component} from '@angular/core';
@Component({
 selector: 'time',
 templateUrl:     './time.component.html',
	styleUrls:['./time.component.css']
})
export class TimeComponent {	
	today:number = Date.now();
}