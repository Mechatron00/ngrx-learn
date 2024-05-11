import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './component/blog/blog.component';
import { AddBlogComponent } from './component/add-blog/add-blog.component';
import { CounterDisplayComponent } from './component/counter-display/counter-display.component';

const routes: Routes = [
  {path:'blog',component:BlogComponent},
  {path:'addblog',component:AddBlogComponent},
  {path:'updateblog/:id',component:AddBlogComponent},
  {path:'counterapp',component:CounterDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
