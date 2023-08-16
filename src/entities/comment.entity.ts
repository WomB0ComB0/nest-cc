/* eslint-disable */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Topic } from './topic.entity';
import { User } from './user.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text:string;

  @ManyToOne((type) => User, (user) => user.id)
  user: User;

  @ManyToOne((type) => Topic, (topic) => topic.comments)
  topic: Topic;

}