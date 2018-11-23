import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Todos } from './todos.model';

@Injectable()
export class TodosService {
	constructor(private http: HttpClient) {}
	private url = 'http://localhost:3000/Todos';

	getTask(): Observable<Todos[]> {
		return this.http.get<Todos[]>(this.url);
	}
	getById(id: number): Observable<Todos> {
		const url = this.url + '/' + id;
		return this.http.get<Todos>(url);
	}
	addTask(task: Todos): Observable<Todos> {
		return this.http.post<Todos>(this.url, task);
	}
	UpadeTask(task: Todos): Observable<Todos> {
		return this.http.put<Todos>(this.url + '/' + task.id, task);
	}
	deleteTask(id: number): Observable<Todos> {
		const url = this.url + '/' + id;
		return this.http.delete<Todos>(url);
	}
}
