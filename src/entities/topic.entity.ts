/* eslint-disable */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Comment } from './comment.entity';
@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title:string;

  @Column()
  description:string;

  @OneToMany((type) => Comment, (comment) => comment.topic)
  comments: Comment[];
}