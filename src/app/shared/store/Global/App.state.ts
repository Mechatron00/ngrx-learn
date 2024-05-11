import { blogReducer } from "../Blog/blog.reducer";
import { counterReducer } from "../counter.reducer";

export const AppState={
   counter:counterReducer,
   blog:blogReducer 
}