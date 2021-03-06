import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

const platform = platformBrowserDynamic();
if (environment.production) {
    enableProdMode();
  }
platform.bootstrapModule(AppModule);