import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({

imports: [
    ButtonModule,
    RippleModule,
    InputTextModule,
    InputTextareaModule,
    ToastModule,
    MessagesModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
]

})
export class PrimeNgModule { }