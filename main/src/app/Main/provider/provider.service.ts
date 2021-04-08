import { Injectable } from '@angular/core';
import { Provider } from './provider';
import { providers } from './provider-data';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  public providers: Provider[] = providers;


  public getProvider() {
      return this.providers;
  }
}
