type Comments = {
  name: string;
  comment: string;
};
export type BookData = {
  id?: number;
  author?: string;
  title?: string;
  year?: string;
  image_url?: string;
  comments?: Comments[];
};

export type BookState = {
  books: BookData[];
};

const bookInitialState: BookState = {
  books: [],
};

export { bookInitialState };
