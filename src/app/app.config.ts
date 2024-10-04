import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers:  [ provideHttpClient() , // previously befor angular 17 we need to import httpclient in app.module.ts // to make api call we need to import this statement
     provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
