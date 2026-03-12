import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app/app.component';
import { appConfig } from '../app.config';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
