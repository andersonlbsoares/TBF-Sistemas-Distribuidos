import connection from "../../config/database/connection.js";

class AnimalRepository {
    queryAnimal(sql, params = "") {
        return new Promise((resolve, reject) => {
            connection.query(sql, params, (error, result) => {
                if (error) {
                    const erro = {
                        erro: "SQL - reject",
                        message: error.message,
                    };
                    return reject(erro);
                } else {
                    const row = JSON.parse(JSON.stringify(result.rows));
                    return resolve(row);
                }
            });
        });
    }

    create(animal) {
        const sql =
            "INSERT INTO animal (nome_animal,idade_animal,dono_animal,id_tipo_animal_animal,atributo_animal) VALUES ($1, $2, $3, $4, $5);";
        return this.queryAnimal(sql, [
            animal.nomeAnimal,
            animal.idadeAnimal,
            animal.donoAnimal,
            animal.idTipoAnimalAnimal,
            animal.atributoAnimal,
        ]);
    }

    findAll() {
        const sql = "SELECT * FROM animal ORDER BY id_animal ASC;";
        return this.queryAnimal(sql);
    }

    findById(idAnimal) {
        const sql = "SELECT * FROM animal WHERE id_animal = $1;";
        return this.queryAnimal(sql, [idAnimal]);
    }


    update(idAnimal, animal) {
        const sql =
            "UPDATE animal SET nome_animal = $1, idade_animal = $2, dono_animal = $3, id_tipo_animal_animal = $4, atributo_animal = $5 WHERE id_animal = $6;";
        return this.queryAnimal(sql, [
            animal.nomeAnimal,
            animal.idadeAnimal,
            animal.donoAnimal,
            animal.idTipoAnimalAnimal,
            animal.atributoAnimal,
            idAnimal,
        ]);
    }
    delete(idAnimal) {
        const sql = "DELETE FROM animal WHERE id_animal = $1;";
        return this.queryAnimal(sql, [idAnimal]);
    }

}

export default new AnimalRepository();