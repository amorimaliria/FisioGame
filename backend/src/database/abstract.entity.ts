import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class AbstractEntity<T> {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  constructor(entity?: Partial<T>) {
    if (entity) {
      Object.assign(this, entity);
    }
  }
}
