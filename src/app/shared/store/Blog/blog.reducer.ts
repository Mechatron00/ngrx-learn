import { createReducer, on } from '@ngrx/store';
import { blogState } from './blog.state';
import {
  addBlog,
  deleteBlogs,
  loadBlog,
  loadBlogFail,
  loadBlogSuccess,
  updateBlog,
} from './blog.actions';
import { BlogModel } from './blog.model';

export function blogReducer(state: any, action: any) {
  return _blogReducer(state, action);
}

const _blogReducer = createReducer(
  blogState,
  on(loadBlog, (state) => {
    return state;
  }),
  on(loadBlogSuccess, (state, action) => {
    return {
      ...state,
      blogList: [...action.blogList],
      errorMessage: '',
    };
  }),
  on(loadBlogFail, (state, action) => {
    return {
      ...state,
      blogList: [],
      errorMessage: action.errorMessage,
    };
  }),
  on(addBlog, (state, action) => {
    const blog: BlogModel = {
      id: state.blogList.length + 1,
      title: action.blogInput.title,
      description: action.blogInput.description,
    };

    return {
      ...state,
      blogList: [...state.blogList, blog],
    };
  }),
  on(updateBlog, (state, action) => {
    const updatedBlog: BlogModel = {
      id: action.blogInput.id,
      title: action.blogInput.title,
      description: action.blogInput.description,
    };
    // let blog = state.blogList.map((blog) => {
    //   return blog.id === blogInput.id ? blogInput : blog;
    // });

    const updatedBlogList = state.blogList.map((blog) => {
      if (blog.id === updatedBlog.id) {
        return updatedBlog;
      } else return blog;
    });

    return {
      ...state,
      blogList: updatedBlogList,
    };
  }),
  on(deleteBlogs, (state, action) => {
    const blogindex = state.blogList.findIndex(
      (blog: BlogModel) => blog.id === action.id
    );
    const updatedBlogList = [...state.blogList];
    updatedBlogList.splice(blogindex, 1);
    return {
      ...state,
      blogList: updatedBlogList,
    };
  })
);