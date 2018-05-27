import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { RequestMethod } from '@angular/http/src/enums';
// import { HttpHeaders } from '@angular/common/http/src/headers';
@Injectable()
export class TodoDataService {

  constructor(private _http: HttpClient) { }
  getData(): Observable<any> {
    const url = 'http://localhost:3000/todos';
    return this._http.get(url)
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
 }
 private handleError(err: HttpErrorResponse) {
  console.log(err.message);
  return Observable.throw(err.message);
 }
  addAction(newAction) {
    console.log(newAction.action + 'from service');
     const headers = new HttpHeaders();
     const options = {headers: headers};
     headers.append('Content-Type', 'application/json');
     return this._http.post('http://localhost:3000/todos', newAction, {headers: headers})
     .map(response => response, this.handleError);
  }

  updateStatus(updatedStatus) {
    console.log(updatedStatus.action + 'from service');
     const headers = new HttpHeaders();
     const options = {headers: headers};
     headers.append('Content-Type', 'application/json');
     return this._http.put('http://localhost:3000/todos/status', updatedStatus, {headers: headers})
     .map(response => response, this.handleError);
  }

  deleteAction(deletedAction) {
    console.log(deletedAction.action + 'from service');
     const headers = new HttpHeaders();
     const options = {headers: headers, body: deletedAction};
     headers.append('Content-Type', 'application/json');
     return this._http.delete('http://localhost:3000/todos/delete', options)
     .map(response => response, this.handleError);
  }

  editAction(editedAction) {
    console.log(editedAction.action + 'from service');
     const headers = new HttpHeaders();
     const options = {headers: headers};
     headers.append('Content-Type', 'application/json');
     return this._http.put('http://localhost:3000/todos/updateAction', editedAction, {headers: headers})
     .map(response => response, this.handleError);
  }
}
