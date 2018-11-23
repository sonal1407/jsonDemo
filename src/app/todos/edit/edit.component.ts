import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodosService } from '../todos.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Todos } from '../todos.model';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: [ './edit.component.css' ]
})
export class EditComponent implements OnInit {
	form: FormGroup;
	temp;
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private todoService: TodosService,
		private fb: FormBuilder
	) {}

	ngOnInit() {
		this.getDetails();
		const id = +this.route.snapshot.paramMap.get('id');
		this.todoService.getById(id).subscribe((data) => {
			this.temp = data;
			console.log(this.temp);
			this.form.patchValue({
				id: this.temp.id,
				todo: this.temp.todo
			});
		});
	}
	public getDetails() {
		this.form = this.fb.group({
			id: [ '' ],
			todo: [ '' ]
		});
  }
  
	editTask(data) {
  console.log(data);
  
    this.todoService.UpadeTask(data).subscribe(() => {
      
      this.router.navigate([ '/todos/view' ])});
	}
}
