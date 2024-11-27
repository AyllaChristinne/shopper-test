import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class InsertDrivers1732727013012 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable("drivers");
    if (!tableExists) {
      await queryRunner.createTable(
        new Table({
          name: "drivers",
          columns: [
            {
              name: "id",
              type: "int",
              isPrimary: true,
            },
            {
              name: "name",
              type: "varchar",
            },
            {
              name: "description",
              type: "varchar",
            },
            {
              name: "vehicle",
              type: "varchar",
            },
            {
              name: "review",
              type: "json",
            },
            {
              name: "value",
              type: "numeric",
              precision: 10,
              scale: 2,
            },
            {
              name: "mindistance",
              type: "int",
            },
          ],
        })
      );
    }

    await queryRunner.query(`
      INSERT INTO drivers (id, name, description, vehicle, review, value, mindistance) VALUES
      (1, 
       'Homer Simpson', 
       'Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios).', 
       'Plymouth Valiant 1973 rosa e enferrujado', 
       '{"rating": 2, "comment": "Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts."}', 
       2.5, 
       1000
      ),
      (2, 
       'Dominic Toretto', 
       'Ei, aqui é o Dom. Pode entrar, vou te levar com segurança e rapidez ao seu destino. Só não mexa no rádio, a playlist é sagrada.', 
       'Dodge Charger R/T 1970 modificado', 
       '{"rating": 4, "comment": "Que viagem incrível! O carro é um show à parte e o motorista, apesar de ter uma cara de poucos amigos, foi super gente boa. Recomendo!"}', 
       5, 
       5000
      ),
      (3, 
       'James Bond', 
       'Boa noite, sou James Bond. À seu dispor para um passeio suave e discreto. Aperte o cinto e aproveite a viagem.', 
       'Aston Martin DB5 clássico', 
       '{"rating": 5, "comment": "Serviço impecável! O motorista é a própria definição de classe e o carro é simplesmente magnífico. Uma experiência digna de um agente secreto"}', 
       10, 
       10000
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM drivers WHERE id IN (1, 2, 3);
    `);
  }
}
