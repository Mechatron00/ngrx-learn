import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStateModel } from '../../shared/store/Global/AppState.model';
import { addBlog, updateBlog } from '../../shared/store/Blog/blog.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { getBlogById } from '../../shared/store/Blog/blog.selector';
import { BlogModel } from '../../shared/store/Blog/blog.model';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppStateModel>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  blogForm!: FormGroup;

  editId!: number;
  isEdit = false;
  ngOnInit() {
    this.blogForm = new FormGroup({
      title: this.formBuilder.control('', Validators.required),
      description: this.formBuilder.control('', Validators.required),
    });

    this.route.params.subscribe((params) => {
      const id = parseInt(params['id']);
      this.editId = id;
    });
    
    
    if (this.editId) {
      console.log(this.editId);
      this.store.select(getBlogById(this.editId)).subscribe((data) => {
        console.log(data);
        this.isEdit = true;
        this.blogForm = new FormGroup({
          id:this.formBuilder.control(data?.id,),
          title: this.formBuilder.control(data?.title, Validators.required),
          description: this.formBuilder.control(
            data?.description,
            Validators.required
          ),
        });
      });
    }
  }

  saveBlog() {
    if (this.blogForm.valid) {
      const blog = this.blogForm.getRawValue();

      if (this.isEdit) {
        this.store.dispatch(updateBlog({ blogInput: blog }));
        console.log('edit blog invoked');
      } else {
        console.log('add blog invoked');

        this.store.dispatch(addBlog({ blogInput: blog }));
      }
      this.router.navigate(['blog']);
    }
  }
}
