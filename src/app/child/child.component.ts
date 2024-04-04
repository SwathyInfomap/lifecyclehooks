import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  //encapsulation:ViewEncapsulation.None/**to apply styles globally */
})
export class ChildComponent {
  @Input() childMessage:any;
  
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage(){
    this.messageEvent.emit('Hello from child');
  }


  message = 'message from child';
}
