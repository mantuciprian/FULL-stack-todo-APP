import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.scss']
})
export class TodoHomeComponent implements OnInit {

  todos = [];
  private originalData = [];
  constructor(private todoService: TodoDataService) { }

  action = 'my action...';
  ngOnInit() {
    this.todoService.getData().subscribe((data) => {
      this.todos = data;
      data.map((v) => this.originalData.push(v));
      console.log(this.todos);
    });
  }

  addAction(event) {
    event.preventDefault();
    if (this.action.length === 0 ) {
      alert('Action field must not be emplty !');
      return ;
    }
    const newAction = {
      action: this.action,
      isDone: false
    };
    console.log(newAction);
    this.todoService.addAction(newAction).subscribe(action => {
      this.action = '';
    });
    // location.reload();
    if (this.todos.length === 0) {
      location.reload();
    }
    let myId = this.todos.sort((a, b) => a.ID - b.ID)[this.todos.length - 1].ID;
    myId += 1;
    console.log(myId);
    this.todos.push({ID: myId, action: newAction.action, done : newAction.isDone });
    this.action = '';
  }

  addToList(item) {
    this.todos.push(item);
  }

  updateStatus(event, myAction) {
    event.preventDefault();
    this.todoService.updateStatus(myAction).subscribe(action => {
      this.action = '';
    });
  }

  deleteAction(event, actionId) {
    event.preventDefault();
    this.todoService.deleteAction(actionId).subscribe(action => {
      this.action = '';
    });
    this.todos.map((v, i) => {
      if (v.ID === actionId.ID) {
        this.todos.splice(i, 1);
      }
    });
  }

  updateAction(event, updatedAction, actionName) {
    event.preventDefault();
    console.log(actionName.value);
    updatedAction.action = actionName.value;
    this.todoService.editAction(updatedAction).subscribe(action => {
      this.action = '';
    });
  }

  cancelChange(actionIndex, actionName) {
    return actionName.value = this.todos[actionIndex].action;
  }



}
