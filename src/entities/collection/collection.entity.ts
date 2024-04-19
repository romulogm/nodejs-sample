
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
//Entities
//import { User } from '../user/user.entity';
import { Book } from '../book/book.entity';


@Entity()
export class Collection{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()  
  userId: number;

  @OneToMany(() => Book, book => book.collection)
  books: Book[];
}
