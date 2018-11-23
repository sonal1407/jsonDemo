import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todos } from '../todos.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styleUrls: [ './view.component.css' ]
})
export class ViewComponent implements OnInit {
	getTasks: Todos[];
	constructor(private todoService: TodosService,private router:Router) {
		this.getTasks = [];
	}

	ngOnInit() {
		this.getTask();
	}
	getTask() {
		this.todoService.getTask().subscribe((data) => {
			this.getTasks = data;
			console.log(this.getTasks);
		});
	}
	// edit(){
	// 	this.router.navigate(['/todos/edit'])
	// }

	delete(id){
		this.todoService.deleteTask(id).subscribe();
		this.getTask();
	}
}
