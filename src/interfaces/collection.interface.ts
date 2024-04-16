// Interfaces
import { IBaseQueryParams } from './common.interface';


export interface ICreateCollection {
  title: string;
  description: string;
  userId: number; 
  //books: Book[];
}

// export interface ILoginUser {
//   email: string;
//   password: string;
// }

// export interface IUpdateUser {
//   id: number;
//   firstName: string;
//   lastName: string;
// }

// export interface IUserQueryParams extends IBaseQueryParams {
//   keyword?: string;
// }
