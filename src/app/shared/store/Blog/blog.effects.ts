import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addBlog,
  addBlogSuccess,
  LOAD_BLOG,
  loadBlog,
  loadBlogFail,
  loadBlogSuccess,
} from './blog.actions';
import { catchError, EMPTY, exhaustMap, map, of } from 'rxjs';
import { MasterService } from '../../../master.service';
import { BlogModel } from './blog.model';

@Injectable()
export class BlogEffects {
  constructor(private actions$: Actions, private service: MasterService) {}

  _blog = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_BLOG),
      exhaustMap((action) => {
        return this.service.getBlogs().pipe(
          map((data) => {
            return loadBlogSuccess({ blogList: data });
          }),
          catchError((_error) =>
            of(loadBlogFail({ errorMessage: _error.message }))
          )
        );
      })
    )
  );
  _AddBlog = createEffect(() =>
    this.actions$.pipe(
      ofType(addBlog),
      exhaustMap((action) => {
        return this.service.createBlog(action.blogInput).pipe(
          map((data) => {
            return addBlogSuccess({ blogInput: data as BlogModel });
          }),
          catchError((_error) =>
            of(loadBlogFail({ errorMessage: _error.message }))
          )
        );
      })
    )
  );
}
