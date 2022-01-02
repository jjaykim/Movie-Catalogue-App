import { Model, Table, Column, AllowNull } from 'sequelize-typescript';

@Table({ tableName: 'user' })
export class User extends Model {
  @AllowNull(false)
  @Column
  firstName!: string;

  @AllowNull(false)
  @Column
  lastName!: string;

  @AllowNull(false)
  @Column
  email!: string;

  @AllowNull(false)
  @Column
  password!: string;
}
