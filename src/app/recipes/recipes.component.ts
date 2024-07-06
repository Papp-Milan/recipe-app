import { ChangeDetectionStrategy, Component, inject, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { SharedModule } from '../shared.module';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
  standalone: true,
  imports: [
    SharedModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesComponent {
  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(RecipeDetailsComponent);
  }
}
