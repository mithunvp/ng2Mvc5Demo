import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './boot';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);