import { createAction, props } from "@ngrx/store";
import { BlogModel, Blogs } from "./blog.model";


export const LOAD_BLOG_SUCCESS='[blog page] load blog success'
export const LOAD_BLOG_FAIL='[blog page] load blog failed'
export const LOAD_BLOG='[blog page] load blog'

export const loadBlog = createAction(LOAD_BLOG)
export const loadBlogSuccess = createAction(LOAD_BLOG_SUCCESS,props<{blogList:BlogModel[]}>())
export const loadBlogFail = createAction(LOAD_BLOG_FAIL,props<{errorMessage:string}>())
export const addBlog = createAction('addblog',props<{blogInput:BlogModel}>())
export const updateBlog = createAction('updateblog',props<{blogInput:BlogModel}>())
export const deleteBlogs = createAction('deleteblog',props<{id:number}>())