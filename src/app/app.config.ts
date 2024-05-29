import { ApplicationConfig } from '@angular/core';

import { provideHttpClient } from '@angular/common/http';
import { TitleStrategy } from '@angular/router';
import { AppRoutingProvider } from './app.routes';
import { TitleService } from './services/title.service';

export const appConfig: ApplicationConfig = {
  providers: [AppRoutingProvider, provideHttpClient(), {provide: TitleStrategy, useClass: TitleService}]
};
