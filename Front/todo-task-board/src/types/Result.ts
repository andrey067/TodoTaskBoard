export interface Result<T> {
  isSuccess: boolean;
  errors: Error[];
  data: T | null;
}
