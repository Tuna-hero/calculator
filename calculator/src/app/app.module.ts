import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { DoubleDigitPipe } from './pipes/double-digit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DoubleDigitPipe
  ],
  imports: [ BrowserModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
