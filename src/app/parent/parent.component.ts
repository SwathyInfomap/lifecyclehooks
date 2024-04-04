import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { OnInit, ViewChild, AfterViewInit} from '@angular/core'
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit{
  @ViewChild(ChildComponent) child:any;
  constructor(){}
  // receiveMessage(msg: any){
  //   alert(msg);
  // }

  ngOnInit(): void {}
  // ngAfterViewInit(){
  //   alert(this.child.message);
  // }


}
