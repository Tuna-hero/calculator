import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculator-buttons',
  templateUrl: './calculator-buttons.component.html',
  styleUrls: ['./calculator-buttons.component.css']
})
export class CalculatorButtonsComponent {
  @Output() buttonPressed = new EventEmitter<string>();

  keys = ['7','8','9','/', '4','5','6','*', '1','2','3','-', '0','C','←','+', '='];

  press(key: string) {
    this.buttonPressed.emit(key);
  }
}
