import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  imports: [],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {
  setTheme(theme: 'light' | 'dark') {
    const body = document.body;

    if (theme === 'light') {
      body.classList.add('light-theme');
    } else {
      body.classList.remove('light-theme');
    }

    // Opcional: Guardar la preferencia en el navegador del usuario
    localStorage.setItem('theme', theme);
  }
}
