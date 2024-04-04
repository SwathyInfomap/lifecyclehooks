import { Component, OnDestroy, OnInit, makeStateKey } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GreetingsPipePipe } from "./greetings-pipe.pipe";
import { DatePipe } from '@angular/common';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    styles: ['h2{color:red}'],
    imports: [RouterOutlet, ParentComponent, ChildComponent, GreetingsPipePipe,DatePipe]
})
export class AppComponent {
  title = 'lifecycleHooks';
  todaysDate = new Date();

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
