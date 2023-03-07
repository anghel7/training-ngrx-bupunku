export interface Page<T> {
  count: number;
  next: string;
  previus: string;
  results: T[];
}
