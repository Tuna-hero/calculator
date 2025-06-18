import { Component } from '@angular/core';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  current = '';
  result = '';

  constructor(private historyService: HistoryService) {}

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
      const res = this.evaluateExpression(this.current);
      this.result = res.toString();
      this.historyService.addOperation(`${this.current} = ${this.result}`);
    } catch {
      this.result = 'Hata';
    }
  }

  evaluateExpression(expr: string): number {
    const tokens = expr.match(/(\d+|\+|\-|\*|\/)/g);
    if (!tokens) throw new Error('Invalid expression');

    let result = Number(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const nextNumber = Number(tokens[i + 1]);

      switch (operator) {
        case '+': result += nextNumber; break;
        case '-': result -= nextNumber; break;
        case '*': result *= nextNumber; break;
        case '/': result /= nextNumber; break;
        default: throw new Error('Unknown operator');
      }
    }

    return result;
  }

  get history() {
    return this.historyService.getHistory();
  }
}
