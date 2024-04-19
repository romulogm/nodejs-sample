import { getRepository } from 'typeorm';

// Entities
import { Collection } from '../../entities/collection/collection.entity';

// Utilities
import Encryption from '../../utilities/encryption.utility';
import ApiUtility from '../../utilities/api.utility';
import DateTimeUtility from '../../utilities/date-time.utility';

// Interfaces
import {
  ICreateCollection,
  IUpdateCollection,
  IDeleteCollection,
  IListCollection

} from '../../interfaces/collection.interface';
//import { IDeleteById, IDetailById } from '../../interfaces/common.interface';

// Errors
//import { StringError } from '../../errors/string.error';

const where = { isDeleted: false };

const create = async (params: ICreateCollection) => {
  const item = new Collection();
  item.title = params.title;
  item.description = params.description;
  item.userId = params.userId; 
  const collectionData = await getRepository(Collection).save(item);
  return collectionData;
};


const update = async (params: IUpdateCollection) => {
  const existingCollection = await getRepository(Collection).findOne(params.id);

  if (!existingCollection) {
    throw new Error('Coleção não encontrada.');
  }

  existingCollection.title = params.title;
  existingCollection.description = params.description;

  const updatedCollection = await getRepository(Collection).save(existingCollection);

  return updatedCollection;
};


const list = async (params: IListCollection) => {
  const collectionRepo = getRepository(Collection).createQueryBuilder('collection');

  collectionRepo.where('collection.userId = :userId', { userId: params.userId });

  const collections = await collectionRepo.getMany();

  return collections;
};


// const list: IController = async (req, res) => {
//   try {
//     const limit = ApiUtility.getQueryParam(req, 'limit');
//     const page = ApiUtility.getQueryParam(req, 'page');
//     const keyword = ApiUtility.getQueryParam(req, 'keyword');
//     const params: IUserQueryParams = { limit, page, keyword };
//     const data = await userService.list(params);
//     return ApiResponse.result(res, data.response, httpStatusCodes.OK, null, data.pagination);
//   } catch (e) {
//     ApiResponse.exception(res, e);
//   }
// };


export default {
  create,
  // login,
  // getById,
  // detail,
  update,
  list
  // remove,
}
