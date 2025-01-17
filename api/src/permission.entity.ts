import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PermissionValueType, Permissions } from './utils/permissions';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn('increment')
  public id: string;

  @Column('enum', {
    enum: Array.from(Object.values(Permissions)),
    unique: true,
  })
  public type: PermissionValueType;
}
