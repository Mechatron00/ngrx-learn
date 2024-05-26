import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterBtnComponent } from './component/counter-btn/counter-btn.component';
import { CounterDisplayComponent } from './component/counter-display/counter-display.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/store/counter.reducer';
import { CustomCounterComponent } from './component/custom-counter/custom-counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { blogReducer } from './shared/store/Blog/blog.reducer';
import { AppState } from './shared/store/Global/App.state';
import { PrimeNgModule } from './primeng.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AddBlogComponent } from './component/add-blog/add-blog.component';
import { BlogComponent } from './component/blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import {  BlogEffects } from './shared/store/Blog/blog.effects';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppEffect } from './shared/store/Global/App.effects';
import { LoadingSpinnerComponent } from './component/loading-spinner/loading-spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { GlobalState } from './shared/store/Global/global.state';

@NgModule({
  declarations: [
    AppComponent,
    CounterBtnComponent,
    CounterDisplayComponent,
    CustomCounterComponent,
    AddBlogComponent,
    BlogComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    InputTextareaModule,
    HttpClientModule,
    PrimeNgModule,
    ToastModule,
    MessagesModule,
    MatProgressSpinnerModule,
    //StoreModule.forRoot({counter:counterReducer,blog:blogReducer}),
    StoreModule.forRoot(AppState),
    StoreDevtoolsModule.instrument({ maxAge: false, logOnly: !isDevMode() }),
    EffectsModule.forRoot([BlogEffects,AppEffect])
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
