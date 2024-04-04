import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() childMessage:any;
  
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage(){
    this.messageEvent.emit('Hello from child');
  }

}
