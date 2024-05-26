import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogModel, Blogs } from '../../shared/store/Blog/blog.model';
import { getBlog, getBlogInfo } from '../../shared/store/Blog/blog.selector';
import { AppStateModel } from '../../shared/store/Global/AppState.model';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import {
  deleteBlogs,
  loadBlog,
  loadBlogSuccess,
  
} from '../../shared/store/Blog/blog.actions';
import { loadSpinner } from '../../shared/store/Global/App.actions';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [MessageService]
})
export class BlogComponent implements OnInit {
  constructor(private store: Store<AppStateModel>, private router: Router,private messageService: MessageService) {}
  blog!: BlogModel[];
  // messages!: Message[];
  blogInfo!: Blogs;
  ngOnInit() {
    this.store.dispatch(loadSpinner({isLoaded:true}))
    setTimeout(() => {
      this.store.dispatch(loadBlog());
      this.store.dispatch(loadSpinner({isLoaded:false}))
     
    }, 2000);
    this.store.select(getBlogInfo).subscribe((data:any) => {
      console.log(data);
      this.blogInfo = data;
    });
  
  }

  addBlog() {
    this.router.navigate(['addblog']);
  }
  updateBlog(id: number) {
    this.router.navigate([`updateblog/${id}`]);
  }
  deleteBlog(id: number) {
    if (confirm("Are you sure want to delete?")) {
      this.store.dispatch(loadSpinner({isLoaded:true}))
      setTimeout(() => {
        this.store.dispatch(deleteBlogs({ id: id }));
        this.store.dispatch(loadSpinner({isLoaded:false}))
      }, 1000);
     
      // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Blog deleted.',life:2 });
      // this.messages = [
       
      //   { severity: 'success', detail: 'Blog deleted',life:2000,sticky:true, },
      // ]
    }
   
  }
}
