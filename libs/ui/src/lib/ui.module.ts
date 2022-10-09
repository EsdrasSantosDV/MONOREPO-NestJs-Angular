import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductsComponent],
  exports: [ProductsComponent],
})
export class UiModule {}
