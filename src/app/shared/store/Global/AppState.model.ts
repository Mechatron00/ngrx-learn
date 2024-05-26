import { BlogModel } from "../Blog/blog.model";
import { counterModel } from "../counter.state";

export interface AppStateModel{
    // counter:counterModel,
    // blog:BlogModel[]
    isLoaded:boolean
}