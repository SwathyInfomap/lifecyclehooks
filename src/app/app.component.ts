import { Component, OnDestroy, OnInit, makeStateKey } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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
