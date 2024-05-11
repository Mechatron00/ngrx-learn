import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogModel, Blogs } from '../../shared/store/Blog/blog.model';
import { getBlog, getBlogInfo } from '../../shared/store/Blog/blog.selector';
import { AppStateModel } from '../../shared/store/Global/AppState.model';
import { Router } from '@angular/router';
import {
  deleteBlogs,
  loadBlog,
  loadBlogSuccess,
} from '../../shared/store/Blog/blog.actions';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  constructor(private store: Store<AppStateModel>, private router: Router) {}
  blog!: BlogModel[];

  blogInfo!: Blogs;
  ngOnInit() {
    this.store.dispatch(loadBlog());
    this.store.select(getBlogInfo).subscribe((data) => {
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
    console.log(id);
    this.store.dispatch(deleteBlogs({ id: id }));
  }
}
