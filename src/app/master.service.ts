import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogModel, Blogs } from './shared/store/Blog/blog.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

constructor(private http:HttpClient) { }

getBlogs():Observable<BlogModel[]>
{
  return this.http.get<BlogModel[]>('http://localhost:3000/Blogs')
}

createBlog(blogInput:BlogModel)
{
  return this.http.post('http://localhost:3000/Blogs',blogInput).pipe(
    tap(()=>{
      this.http.get<BlogModel>("http://localhost:3000/Blogs?_limit=1&_sort=id&_order=desc")
    })
  )
}
updateBlog(blogInput:BlogModel)
{
  console.log(blogInput);
  
 const id = `${blogInput.id}`
  return this.http.put('http://localhost:3000/Blogs/'+id,blogInput)
}
deleteBlog(blogId:number)
{
  return this.http.delete('http://localhost:3000/Blogs/'+blogId)
}
}
