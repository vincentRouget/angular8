import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrl: './create-onomatopia.component.scss'
})
export class CreateOnomatopiaComponent {

  newOnomatopia: string = '';

  @Output() newOnomatope: EventEmitter<string> = new EventEmitter();
  model: any;

  sendOnomatopiaToParent(): void {
    this.newOnomatope.emit(this.newOnomatopia);
    this.newOnomatopia = '';
  }
}
