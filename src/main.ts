import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
  if(window){
    /**
     * https://www.codementor.io/@brijmcq/angular-clear-all-of-your-console-logs-in-production-build-with-just-a-few-lines-of-code-cxcw30yqs
     * retain all of your console log statements, when in development mode,
     * and clear all of it when in production mode
     */
    window.console.log = () => {};
  }
}

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  const ngRef = 'ngRef';
  if (window[ngRef]) {
    window[ngRef].destroy();
  }
  window[ngRef] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));
