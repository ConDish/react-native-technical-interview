import { GenericApiResponse } from '../common';
import request from '../request';
const endpoints = {
  login: '/sign_in',
};

type ResponseRequest = {
  data?: {
    name: string;
    last_name: string;
    email: string;
    age: string;
    termsAndCond: boolean;
    id: number;
  };
  ok: any;
};

async function login(
  name: string,
  last_name: string,
  email: string,
  age: string,
  termsAndCond: boolean,
): Promise<GenericApiResponse> {
  try {
    const endpoint = {
      url: endpoints.login,
      param: { name, last_name, email, age, termsAndCond },
    };

    let response: ResponseRequest = await request.post(
      endpoint.url,
      endpoint.param,
    );

    console.log(response);

    if (response.ok && response.data) {
      return {
        ok: true,
        data: response.data,
      };
    }

    return {
      ok: false,
      message: 'Error',
    };
  } catch (error) {
    return {
      ok: false,
      message: error.message,
    };
  }
}

const customerApi = {
  login,
};

export { customerApi };
