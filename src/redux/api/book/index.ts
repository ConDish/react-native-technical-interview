import { GenericApiResponse } from '../common';
import request from '../request';
import { GetBooksResponse } from './dto';
const endpoints = {
  getBooks: '/books',
};

async function getBooks(): Promise<GenericApiResponse<GetBooksResponse[]>> {
  try {
    const endpoint = {
      url: endpoints.getBooks,
    };

    let response: GenericApiResponse<GetBooksResponse[]> = await request.get(
      endpoint.url,
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

const bookApi = {
  getBooks,
};

export { bookApi };
