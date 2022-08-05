import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component';
import { AsyncComponent } from './async/async.component';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/material.module';

const routes: Route[] = [
  {
    path: "",
    component: ObservableComponent
  },
  {
    path: "promise",
    component: PromiseComponent
  },
  {
    path: "async",
    component: AsyncComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    PromiseComponent,
    AsyncComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
