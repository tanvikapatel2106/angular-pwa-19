// install-prompt.service.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class InstallPromptService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // Function to check if the PWA install prompt is available
  checkInstallPrompt() {
    if (isPlatformBrowser(this.platformId)) {
      // Cast the event to 'any' if 'BeforeInstallPromptEvent' is not available
      window.addEventListener('beforeinstallprompt', (event: any) => {
        event.preventDefault();

        // Show your custom install prompt here
        const installButton = document.getElementById('install-button');
        if (installButton) {
          installButton.style.display = 'block';
        }

        // Store the event for later use (when the user clicks on the button)
        installButton?.addEventListener('click', () => {
          event.prompt();  // Shows the native install prompt
          event.userChoice.then((choiceResult: any) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
            } else {
              console.log('User dismissed the A2HS prompt');
            }
          });
        });
      });
    }
  }
}
