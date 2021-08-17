import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { GoalsDisplayComponent } from './goals-display/goals-display.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalFormComponent,
    GoalsDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
