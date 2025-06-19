import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-buttons',
  templateUrl: './calculator-buttons.component.html',
  styleUrls: ['./calculator-buttons.component.css']
})
export class CalculatorButtonsComponent {



  @Output() buttonPressed = new EventEmitter<string>();




  keys: string[] = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', 'C', '←', '+',
    '='
  ];

 
  press(key: string): void {
    this.buttonPressed.emit(key);
  }
}
