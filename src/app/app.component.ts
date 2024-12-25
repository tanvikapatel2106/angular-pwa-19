import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InstallPromptService } from '../install-promt.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-19';
  constructor(private installPromptService: InstallPromptService) {}

  ngOnInit(): void {
    // Call the method to listen for the install prompt event
    this.installPromptService.checkInstallPrompt(); // Correct function name
  }
}
