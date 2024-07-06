import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-bottom-toolbar',
  standalone: true,
  templateUrl: './bottom-toolbar.component.html',
  styleUrl: './bottom-toolbar.component.scss',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class BottomToolbarComponent {

}
