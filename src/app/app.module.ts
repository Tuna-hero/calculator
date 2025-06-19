import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { DoubleDigitPipe } from './pipes/double-digit.pipe';
import { CalculatorButtonsComponent } from './components/calculator-buttons/calculator-buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
        CalculatorButtonsComponent,
    DoubleDigitPipe
  ],
  imports: [ BrowserModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
