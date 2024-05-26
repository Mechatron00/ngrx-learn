import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addBlog,
  addBlogSuccess,
  deleteBlogs,
  deleteBlogsSuccess,
  LOAD_BLOG,
  loadBlog,
  loadBlogFail,
  loadBlogSuccess,
  
  updateBlog,
  updateBlogSuccess,
} from './blog.actions';
import { catchError, EMPTY, exhaustMap, map, of, switchMap } from 'rxjs';
import { MasterService } from '../../../master.service';
import { BlogModel } from './blog.model';
import { loadSpinner, showAlert } from '../Global/App.actions';

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
            of(
              loadBlogFail({ errorMessage: _error.message }),
              loadSpinner({ isLoaded: false })
            )
          )
        );
      })
    )
  );
  _AddBlog = createEffect(() =>
    this.actions$.pipe(
      ofType(addBlog),
      switchMap((action) =>
        this.service.createBlog(action.blogInput).pipe(
          switchMap((data) =>
            of(
              addBlogSuccess({ blogInput: data as BlogModel }),

              showAlert({ message: 'Blog created successfully' })
            )
          ),
          catchError((_error) =>
            of(
              loadBlogFail({ errorMessage: _error.message }),
              loadSpinner({ isLoaded: false })
            )
          )
        )
      )
    )
  );
  _UpdateBlog = createEffect(() =>
    this.actions$.pipe(
      ofType(updateBlog),
      switchMap((action) =>
        this.service.updateBlog(action.blogInput).pipe(
          switchMap(() =>
            of(
              updateBlogSuccess({ blogInput: action.blogInput }),
              showAlert({ message: 'Blog updated successfully.' })
            )
          ),
          catchError((_error) =>
            of(
              loadBlogFail({ errorMessage: _error.message }),
              showAlert({ message: 'Error occured.' }),
              loadSpinner({ isLoaded: false })
            )
          )
        )
      )
    )
  );
  _DeleteBlog = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteBlogs),
      switchMap((action) =>
        this.service.deleteBlog(action.id).pipe(
          switchMap(() =>
            of(
              deleteBlogsSuccess({ id: action.id }),
              showAlert({ message: 'Deleted successfully' })
            )
          ),
          catchError((_error) =>
            of(
              loadBlogFail({ errorMessage: _error.message }),
              loadSpinner({ isLoaded: false })
            )
          )
        )
      )
    )
  );
}
