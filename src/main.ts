import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import 'tw-elements';//pour apliquer le style des element drop down de side bar

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
