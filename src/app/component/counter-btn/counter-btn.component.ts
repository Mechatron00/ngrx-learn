import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../shared/store/counter.actions';
import { counterModel } from '../../shared/store/counter.state';
import { Observable, Subscription } from 'rxjs';
import { getTitle } from '../../shared/store/counter.selector';

@Component({
  selector: 'app-counter-btn',
  templateUrl: './counter-btn.component.html',
  styleUrl: './counter-btn.component.css'
})
export class CounterBtnComponent implements OnInit,OnDestroy {

  constructor(private store:Store<{counter:counterModel}>)
  {

  }
 
  title:string='';
  counterSub!:Subscription;
  counter$!:Observable<counterModel>
  ngOnInit(): void {
    this.counterSub= this.store.select(getTitle).subscribe(data=>{
      
      this.title = data;
      console.log('counter-btn');
    })


    //this.counter$=this.store.select('counter');
  }

  OnIncrement()
  {
    this.store.dispatch(increment());
  }
  
  OnDecrement()
  {
    this.store.dispatch(decrement());
  }
  
  OnReset()
  {
    this.store.dispatch(reset());
  }
  ngOnDestroy(): void {
    if (this.counterSub) {
      this.counterSub.unsubscribe();
    }
    
  }
}
