import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  url: string = 'https://yesno.wtf/api';
	data;

	constructor(private http: HttpClient) {
		let channel = this.http.get(this.url);
		channel.subscribe((data) => (this.data = data));
	}
}
