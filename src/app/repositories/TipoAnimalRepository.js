import connection from "../../config/database/connection.js";

class TipoAnimalRepository {
    queryAluno(sql, params = "") {
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

    create(tipoAnimal) {
        const sql =
            "INSERT INTO tipo_animal (nome_tipo_animal, atributo_tipo_animal) VALUES ($1, $2);";
        return this.queryAluno(sql, [
            tipoAnimal.nomeTipoAnimal,
            tipoAnimal.atributoTipoAnimal,
        ]);
    }

    findAll() {
        const sql = "SELECT * FROM tipo_animal ORDER BY id_tipo_animal ASC;";
        return this.queryAluno(sql);
    }

    findById(idTipoAnimal) {
        const sql = "SELECT * FROM tipo_animal WHERE id_tipo_animal = $1;";
        return this.queryAluno(sql, [idTipoAnimal]);
    }


    findByNome(nomeTipoAnimal) {
        const sql = "SELECT * FROM tipo_animal WHERE nome_tipo_animal LIKE $1;";
        return this.queryAluno(sql, [nomeTipoAnimal]);
    }


    update(idTipoAnimal, tipoAnimal) {
        const sql =
            "UPDATE tipo_animal SET nome_tipo_animal = $1, atributo_tipo_animal = $2 WHERE id_tipo_animal = $3;";
        return this.queryAluno(sql, [
            tipoAnimal.nomeTipoAnimal,
            tipoAnimal.atributoTipoAnimal,
            idTipoAnimal
        ]);
    }
    delete(idTipoAnimal) {
        const sql = "DELETE FROM tipo_animal WHERE id_tipo_animal = $1;";
        return this.queryAluno(sql, [idTipoAnimal]);
    }
}

export default new TipoAnimalRepository();