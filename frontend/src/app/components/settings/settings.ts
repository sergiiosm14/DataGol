import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  imports: [],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {
  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }

  setTheme(theme: 'light' | 'dark'): void {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
    localStorage.setItem('theme', theme);
  }
}
