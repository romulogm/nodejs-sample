import { getRepository } from 'typeorm';

// Entities
import { Collection } from '../../entities/collection/collection.entity';

// Utilities
import Encryption from '../../utilities/encryption.utility';
import ApiUtility from '../../utilities/api.utility';
import DateTimeUtility from '../../utilities/date-time.utility';

// Interfaces
import {
  ICreateCollection
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
  item.lastName = params.lastName;
  const collectionData = await getRepository(Collection).save(item);
  return collectionData;
};

// const login = async (params: ILoginUser) => {
//   const user = await getRepository(User)
//     .createQueryBuilder('user')
//     .where('user.email = :email', { email: params.email })
//     .select([
//       'user.createdAt',
//       'user.updatedAt',
//       'user.id',
//       'user.email',
//       'user.password',
//       'user.firstName',
//       'user.lastName',
//       'user.isDeleted',
//     ])
//     .getOne();

//   if (!user) {
//     throw new StringError('Your email has not been registered');
//   }

//   if (await Encryption.verifyHash(params.password, user.password)) {
//     return ApiUtility.sanitizeUser(user);
//   }

//   throw new StringError('Your password is not correct');
// };

// const getById = async (params: IDetailById) => {
//   try {
//     const data = await getRepository(User).findOne({ id: params.id });
//     return ApiUtility.sanitizeUser(data);
//   } catch (e) {
//     return null;
//   }
// };

// const detail = async (params: IDetailById) => {
//   const query = {
//     where: { ...where, id: params.id },
//   }

//   const user = await getRepository(User).findOne(query);
//   if (!user) {
//     throw new StringError('User is not existed');
//   }

//   return ApiUtility.sanitizeUser(user);
// }

// const update = async (params: IUpdateUser) => {
//   const query = { ...where, id: params.id };

//   const user = await getRepository(User).findOne(query);
//   if (!user) {
//     throw new StringError('User is not existed');
//   }

//   return await getRepository(User).update(query, {
//     firstName: params.firstName,
//     lastName: params.lastName,
//     updatedAt: DateTimeUtility.getCurrentTimeStamp(),
//   });
// }

// const list = async (params: IUserQueryParams) => {
//   let userRepo = getRepository(User).createQueryBuilder('user');
//   userRepo = userRepo.where('user.isDeleted = :isDeleted', { isDeleted: false });

//   if (params.keyword) {
//     userRepo = userRepo.andWhere(
//       '(LOWER(user.firstName) LIKE LOWER(:keyword) OR LOWER(user.lastName) LIKE LOWER(:keyword))',
//       { keyword: `%${params.keyword}%` },
//     );
//   }

//   // Pagination
//   const paginationRepo = userRepo;
//   const total = await paginationRepo.getMany();
//   const pagRes = ApiUtility.getPagination(total.length, params.limit, params.page);

//   userRepo = userRepo.limit(params.limit).offset(ApiUtility.getOffset(params.limit, params.page));
//   const users = await userRepo.getMany();

//   const response = [];
//   if (users && users.length) {
//     for (const item of users) {
//       response.push(ApiUtility.sanitizeUser(item));
//     }
//   }
//   return { response, pagination: pagRes.pagination };
// };

// const remove = async (params: IDeleteById) => {
//   const query = { ...where, id: params.id };

//   const user = await getRepository(User).findOne(query);
//   if (!user) {
//     throw new StringError('User is not existed');
//   }

//   return await getRepository(User).update(query, {
//     isDeleted: true,
//     updatedAt: DateTimeUtility.getCurrentTimeStamp(),
//   });
// }

export default {
  create
  // login,
  // getById,
  // detail,
  // update,
  // list,
  // remove,
}
