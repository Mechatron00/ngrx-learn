import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterModel } from '../../shared/store/counter.state';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../../shared/store/counter.selector';
import { AppStateModel } from '../../shared/store/Global/AppState.model';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrl: './counter-display.component.css'
})
export class CounterDisplayComponent implements OnInit, OnDestroy{
constructor(private store:Store<AppStateModel>)
{

}
 
counterDisplay:number=0;
countersub!:Subscription;
counter$!:Observable<counterModel>
  ngOnInit(): void {
    this.countersub=this.store.select(getCounter).subscribe(data=>{
      this.counterDisplay = data;
      console.log('counter-display');
    })
    
    //this.counter$ =  this.store.select('counter');
  }

  ngOnDestroy(): void {
    if (this.countersub) {
      this.countersub.unsubscribe()
    }
  }
}
