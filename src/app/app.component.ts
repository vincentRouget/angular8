import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular8';

  onomatopoeiaList: string[] = [];

  onReceiveNewOnomatopia(event: string): void {
    // console.log(event);
    this.onomatopoeiaList.push(event);
  }
}
