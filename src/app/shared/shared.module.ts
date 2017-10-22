import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
    declarations: [DropdownDirective],
    imports: [ReactiveFormsModule, FormsModule],
    exports: [CommonModule, DropdownDirective, ReactiveFormsModule, FormsModule],
})
export class SharedModule {}
