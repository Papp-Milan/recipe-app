import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes/recipes.component';

const imports = [
  CommonModule,
  RecipesComponent
]

@NgModule({
  imports: [imports],
  exports: [imports]
})
export class SharedModule { }
