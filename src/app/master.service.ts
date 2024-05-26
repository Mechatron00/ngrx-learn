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
  return this.http.get<BlogModel[]>('http://localhost:8080/all')
}

createBlog(blogInput:BlogModel)
{
  return this.http.post('http://localhost:8080',blogInput)
 
}
updateBlog(blogInput:BlogModel)
{
//   console.log(blogInput);
  
//  const id = `${blogInput.id}`
  return this.http.put('http://localhost:8080',blogInput)
}
deleteBlog(blogId:number)
{
  return this.http.delete(`http://localhost:8080/${blogId}`)
}
}
