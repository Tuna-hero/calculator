import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HistoryService {
  private operations: string[] = [];

  addOperation(op: string): void {
    this.operations.unshift(op);
    if (this.operations.length > 5) {
      this.operations.pop();
    }
  }

  getHistory(): string[] {
    return [...this.operations];
  }
}
