import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PermissionValueType } from '../utils/permissions';
import { Permission } from './permission.entity';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column('varchar', { unique: true })
  public name: string;

  @ManyToMany(() => Permission, { eager: true })
  @JoinTable({
    name: 'role_permissions',
  })
  public permissions: PermissionValueType[];
}
