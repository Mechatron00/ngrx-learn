import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BlogModel, Blogs } from './blog.model';

const getBlogState = createFeatureSelector<Blogs>('blog');

export const getBlog = createSelector(getBlogState, (state) => {
  return state.blogList;
});
export const getBlogById = (id: number) =>
  createSelector(getBlogState, (state) => {
    const blog = state.blogList.find(
      (blog: BlogModel) => blog.id === id
    ) as BlogModel;
    return blog;
  });
  export const getBlogInfo = createSelector(getBlogState, (state) => {
    return {...state}
  });
  export const getSpinnerState = createSelector(getBlogState, (state) => {
    return state.isLoaded
  });