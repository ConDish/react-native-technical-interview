export interface GenericApiResponse<T> {
  ok: boolean;
  data?: T;
  message?: string;
}

export interface GenericError {
  ok: boolean;
  message?: string;
}
