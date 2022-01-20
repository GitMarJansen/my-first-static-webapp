import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `<div>Hello <b>{{message}}</b></div>`,
})
export class AppComponent {
  title = 'todo-app';
  message = '';

  constructor(private http: HttpClient) {
    this.http.get('/api/whoami')
      .subscribe((resp: any) => this.message = resp.text);
  }
}
