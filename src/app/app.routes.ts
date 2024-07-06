import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RecipesComponent } from './recipes/recipes.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'recipes',
                component: RecipesComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/'
    }
];
