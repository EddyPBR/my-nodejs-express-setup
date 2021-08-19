import { Entity, PrimaryColumn, Column } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class UserEntity {
  
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

};

export { UserEntity };
