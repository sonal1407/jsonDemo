import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TodosService } from '../todos.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: [ './add.component.css' ]
})
export class AddComponent implements OnInit {
  data1;
	addTaskForm: FormGroup;
	constructor(private fb: FormBuilder, private todoService: TodosService, private router: Router) {
		
	}
	ngOnInit() {
		this.addTaskForm = this.fb.group({
      
			todo: [ '' ]
    });
    
	}
	addTask(data) {
		this.todoService.addTask(data).subscribe(() => {
			console.log('hgkbvf');

			this.router.navigate([ '/todos/view' ]);
		});
	}
}
