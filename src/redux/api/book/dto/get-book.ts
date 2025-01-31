type Comments = {
  name: string;
  comment: string;
};
export interface GetBooksResponse {
  id: number;
  author: string;
  title: string;
  year: string;
  genre: string;
  publisher: string;
  image_url?: string;
  comments?: Comments[];
}
