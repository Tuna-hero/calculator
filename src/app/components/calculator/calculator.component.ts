import { Component, OnInit } from '@angular/core';
import { CalculatorApiService } from '../../services/calculator-api.service';
  import { HistoryEntity } from '../../models/history-entity';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']


})
export class CalculatorComponent implements OnInit {
  current = '';
  result = '';
  history: any[] = [];
hovering = false;
  constructor(private calculatorApi: CalculatorApiService) {}

  ngOnInit(): void {
    this.getHistory();
  }

 pressKey(key: string): void {
  if (key === 'C') {
    this.current = '';
    this.result = '';
  } 
  else if (key === '←') {
    this.current = this.current.slice(0, -1);
  } else if (key === '=') {
    try {
      let operator = '';
      let a = 0;
      let b = 0;

  
      if (this.current.includes('+')) {
        operator = '+';
      } else if (this.current.includes('-')) {
        operator = '-';
      } else if (this.current.includes('*')) {
        operator = '*';
      } else if (this.current.includes('/')) {
        operator = '/';
      } else if (this.current.includes('^')) {
        operator = '^';
      } else if (this.current.includes('√')) {
        operator = '√';
      }

    const parts = this.current.split(operator);


      a = Number(parts[0].trim());
      b = parts[1] ? Number(parts[1].trim()) : 0;

      switch (operator) {
        case '+':
          this.calculatorApi.add(a, b).subscribe(res => {
            this.result = res.result.toString();
            this.getHistory();
          });
          break;
        case '-':
          this.calculatorApi.subtract(a, b).subscribe(res => {
            this.result = res.result.toString();
            this.getHistory();
          });
          break;
        case '*':
          this.calculatorApi.multiply(a, b).subscribe(res => {
            this.result = res.result.toString();
            this.getHistory();
          });
          break;
        case '/':
          this.calculatorApi.divide(a, b).subscribe(res => {
            this.result = res.result.toString();
            this.getHistory();
          });
          break;
        case '^':
          this.calculatorApi.power(a, b).subscribe(res => {
            this.result = res.result.toString();
            this.getHistory();
          });
          break;
        case '√':
          a = Number(this.current.replace('√', '').trim());
          this.calculatorApi.squareRoot(a).subscribe(res => {
            this.result = res.result.toString();
            this.getHistory();
          });
          break;
        default:
          this.result = 'Geçersiz işlem';
      }
    } catch (e) {
      this.result = 'Hata oluştu.';
    }
  } else {
    this.current += key;
  }
}


getHistory(): void {
  this.calculatorApi.getHistory().subscribe({
    next: (data) => {
      console.log('Geçmiş:', data);
      this.history = data; 
    },
    error: (err) => {
      console.error('Geçmiş alınamadı:', err);
    },
  });
}

  clearHistory(): void {
    this.calculatorApi.clearHistory().subscribe({
      next: () => {
        this.getHistory();
      },
      error: (err) => {
        console.error('Geçmiş silinemedi:', err);
      },
    });
  }
}
