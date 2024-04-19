import { getRepository } from 'typeorm';

// Entities
import { Book } from '../../entities/book/book.entity';

// Utilities
// import Encryption from '../../utilities/encryption.utility';
// import ApiUtility from '../../utilities/api.utility';
// import DateTimeUtility from '../../utilities/date-time.utility';

// Interfaces
import {
  ICreateBook
  // IUpdateBook,
  // IDeleteBook,
  // IListBook
} from '../../interfaces/book.interface';
//import { IDeleteById, IDetailById } from '../../interfaces/common.interface';

// Errors
//import { StringError } from '../../errors/string.error';

const create = async (params: ICreateBook) => {
  const item = new Book();
  item.title = params.title;
  item.authors = params.authors;
  item.publishedYear = params.publishedYear;
  item.description = params.description;
  item.edition = params.edition;
  item.isbn = params.isbn;
  item.pageCount = params.pageCount;
  item.categories = params.categories;
  item.read = params.read;
  item.collection = params.collection;
  
  const bookData = await getRepository(Book).save(item);
  return bookData;
};


// const update = async (params: IUpdateCollection) => {
//   const existingCollection = await getRepository(Collection).findOne(params.id);

//   if (!existingCollection) {
//     throw new Error('Coleção não encontrada.');
//   }

//   existingCollection.title = params.title;
//   existingCollection.description = params.description;

//   const updatedCollection = await getRepository(Collection).save(existingCollection);

//   return updatedCollection;
// };


// const list = async (params: IListCollection) => {
//   const collectionRepo = getRepository(Collection).createQueryBuilder('collection');

//   collectionRepo.where('collection.userId = :userId', { userId: params.userId });

//   const collections = await collectionRepo.getMany();

//   return collections;
// };


// const remove = async (params: IDeleteCollection) => {
//   const existingCollection = await getRepository(Collection).findOne(params.id);

//   if (!existingCollection) {
//     throw new Error('Coleção não encontrada.');
//   }

//   const deletionResult = await getRepository(Collection).delete(params.id);

//   return deletionResult;
// }

export default {
  create
  // update,
  // list,
  // remove
}
