export interface GenericApiResponse {
  ok: boolean;
  data?: {
        name: string,
        last_name: string,
        email: string,
        age: string,
        termsAndCond: boolean,
        id: number,
    };
  message?: string;
}

export interface GenericError {
  ok: boolean;
  message?: string;
}

