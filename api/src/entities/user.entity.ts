import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './role.entity';
import { Exclude, Expose } from 'class-transformer';

@Entity('users')
export class User {
  @Expose()
  @PrimaryGeneratedColumn()
  id: number;

  @Expose()
  @Index()
  @Column({ type: 'varchar' })
  username: string;

  @Expose()
  @Index()
  @Column({ type: 'varchar', /*unique: true*/ })
  email: string;

  @Exclude()
  @Index()
  @Column({ type: 'varchar', select: false })
  passwordDigest: string;

  @Expose()
  @ManyToMany(() => Role, { eager: true })
  @JoinTable({
    name: 'user_roles',
  })
  public roles: Role[];
}
