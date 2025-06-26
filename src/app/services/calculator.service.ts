import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  evaluateExpression(expr: string): number {
    const tokens = expr.match(/(\d+|\+|\-|\*|\/)/g);
    if (!tokens || tokens.length < 3) return NaN;

    let result = Number(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const nextNumber = Number(tokens[i + 1]);

      switch (operator) {
        case '+':
          result += nextNumber;
          break;
        case '-':
          result -= nextNumber;
          break;
        case '*':
          result *= nextNumber;
          break;
        case '/':
          result /= nextNumber;
          break;
      }
    }

    return result;
  }
}
