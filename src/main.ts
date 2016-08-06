import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { listReducer } from './app/list.reducer';

if (process.env.ENV === 'production') {
  enableProdMode();
}

function main(hmrState?: any) {
  return bootstrap(AppComponent, [
    provideStore({list: listReducer}, hmrState)
  ]);
}

if (process.env.ENV !== 'production') {
  let ngrxHmr = require('ngrx-store-hmr/lib/index').hotModuleReplacement;
  ngrxHmr(main, module);
} else {
  document.addEventListener('DOMContentLoaded', () => main());
}