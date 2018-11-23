import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { TodosService } from './todos.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddComponent, ViewComponent, EditComponent],
  providers:[TodosService]
})
export class TodosModule { }
