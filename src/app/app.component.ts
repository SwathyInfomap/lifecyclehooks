import { Component, OnDestroy, OnInit, makeStateKey } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ParentComponent,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  styles:['h2{color:red}']
})
export class AppComponent {
  title = 'lifecycleHooks';


  getMin(a: number,b: number){
    if (a<b){
      return a;
    }
    return b;
  }

  // intervalSub:any;

  // ngOnInit(){
  //   this.intervalSub = setInterval(()=>
  //   {
  //     console.log('Hello from ngOnInit');
  //   }, 10);
  // }

  // ngOnDestroy(){
  //   if(this.intervalSub){
  //     clearInterval(this.intervalSub);
  //   }
  // }

}
