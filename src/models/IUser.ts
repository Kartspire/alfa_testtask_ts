export interface IUser {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  liked: boolean;
}
export interface IUsersData {
  results: IUser[];
}
