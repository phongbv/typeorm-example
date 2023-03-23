import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column({ length: 50 })
  Username: string;

  @Column({ length: 50 })
  DisplayName: string;

  @Column({ length: 120 })
  Password: string;

  @Column({ length: 200, nullable: true })
  DeviceTokenId: string;
}
