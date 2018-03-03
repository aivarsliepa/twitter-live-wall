export default interface Tweet {
  createdAt: string;
  retweetCount: number;
  favoriteCount: number;
  text: string;
  imageUrl: string;
  displayName: string;
  name: string;
  verified: boolean;
}
