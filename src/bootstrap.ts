import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Dashboard } from './app/pages/dashboard/dashboard';

bootstrapApplication(Dashboard, appConfig).catch((err) => console.error(err));
