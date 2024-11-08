import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { LoadingComponent } from './app/components/loading/loading.component';

bootstrapApplication(AppComponent, appConfig,

).catch((err) =>
  console.error(err)
);
