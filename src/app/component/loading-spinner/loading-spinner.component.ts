import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { getSpinnerState } from '../../shared/store/Global/app.selector';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {

  isLoaded:boolean=false;
  constructor(private store:Store) { }

  ngOnInit() {
    this.store.select(getSpinnerState).subscribe(res=>{
      this.isLoaded = res
    })
  }

}
