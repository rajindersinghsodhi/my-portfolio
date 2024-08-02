import { CommonModule } from '@angular/common';
import { Component, OnInit, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  darkMode: boolean = false;

  toggleMode = (event: Event) => {
    if(this.darkMode === true){
      this.darkMode = false;
    }else{
      this.darkMode = true;
    }
  }
}
