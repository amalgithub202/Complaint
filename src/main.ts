import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import 'tw-elements'


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
