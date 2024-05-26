import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SHOW_ALERT, showAlert, showEmpty } from './App.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { exhaustMap, map, switchMap } from 'rxjs';
@Injectable()
export class AppEffect {
  constructor(private actions$: Actions, private _snackBar: MatSnackBar) {}

  // _ShowAlert = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(showAlert),
  //     exhaustMap((action) => {
  //       return this._ShowAlert(action.message)
  //         .afterDismissed()
  //         .pipe(
  //           map(() => {
  //             return showEmpty();
  //           })
  //         );
  //     })
  //   )
  // );

  _ShowAlert = createEffect(() =>
    this.actions$.pipe(
      ofType(showAlert),
      exhaustMap((action) => {
        const snackBarRef = this.showAlert(action.message);
        return snackBarRef.afterDismissed().pipe(
          map(() => showEmpty())
        );
      })
    )
  );

  showAlert(message: string) {
    return this._snackBar.open(message, 'OK', {
      verticalPosition: 'top',
      horizontalPosition: 'end',
      duration:3000
    });
  }
}

