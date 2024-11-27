import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("drivers")
class Driver {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  vehicle: string;

  @Column()
  mindistance: number;

  @Column("json")
  review: {
    rating: number;
    comment: string;
  };

  @Column({ type: "numeric", precision: 10, scale: 2 })
  value: number;
}

export default Driver;
