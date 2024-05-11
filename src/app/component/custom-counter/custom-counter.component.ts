import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customDecrement, customInrement } from '../../shared/store/counter.actions';
import { counterModel } from '../../shared/store/counter.state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent implements OnInit {

  value!:number;
  constructor(private store:Store<{counter:counterModel}>) { }

  ngOnInit() {
  }

  OnIncrement()
  {
     if (this.value) {
      this.store.dispatch(customInrement({value:+this.value}))
     }
   
  }

  OnDecrement(){
    if (this.value) {
      this.store.dispatch(customDecrement({value:this.value}))
    }
    
  }
}
