import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("rides")
class Ride {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  customer_id: string;

  @Column()
  origin: string;

  @Column()
  destination: string;

  @Column()
  distance: number;

  @Column()
  duration: string;

  @Column("json")
  driver: {
    id: number;
    name: string;
  };

  @Column({ type: "numeric", precision: 10, scale: 2 })
  value: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Ride;
