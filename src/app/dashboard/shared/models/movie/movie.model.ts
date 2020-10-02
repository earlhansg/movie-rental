export interface Movie {
  id: number;
  name: string;
  imageUrl: string;
  ratings: number;
  genre: string;
  status?: string;
  directed: string;
  available: boolean;
  about: string;
}
