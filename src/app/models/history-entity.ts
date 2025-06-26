export interface HistoryEntity {
  operation: "ADDITION" | "SUBTRACTION" | "MULTIPLICATION" | "DIVISION" | "SQUARE_ROOT" | "POWER";
  parameter1: number;
  parameter2: number;
  result: number;
  date: string;
}
