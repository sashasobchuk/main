import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './role.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({ type: 'varchar' })
  username: string;

  @Index()
  @Column({ type: 'varchar', unique: true })
  email: string;

  @Index()
  @Column({ type: 'varchar', select: false })
  passwordDigest: string;

  @ManyToMany(() => Role, { eager: true })
  @JoinTable({
    name: 'user_roles',
  })
  public roles: Role[];
}
