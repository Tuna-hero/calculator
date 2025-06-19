import { Component } from '@angular/core';
import { HistoryService } from '../../services/history.service';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  current = '';
  result = '';
  hovering = false; 

  constructor(
    private historyService: HistoryService,
    private calculatorService: CalculatorService
  ) {}

  pressKey(key: string): void {
    if (key === 'C') {
      this.current = '';
      this.result = '';
    } else if (key === '←') {
      this.current = this.current.slice(0, -1);
    } else if (key === '=') {
      this.calculate();
    } else {
      this.current += key;
    }
  }

  calculate(): void {
    try {
      const res = this.calculatorService.evaluateExpression(this.current);
      this.result = res.toString();
      this.historyService.addOperation(`${this.current} = ${this.result}`);
    } catch {
      this.result = 'Hata';
    }
  }

  get history(): string[] {
    return this.historyService.getHistory();
  }
}