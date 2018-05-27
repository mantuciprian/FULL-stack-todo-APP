import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import { TodoDataService } from './todo-data.service';

const routes: Routes = [
  {path: 'home', component: TodoHomeComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [TodoDataService]
})
export class AppRoutingModule { }

