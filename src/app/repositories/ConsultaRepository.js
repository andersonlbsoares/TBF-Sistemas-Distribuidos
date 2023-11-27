import connection from "../../config/database/connection.js";

class ConsultaRepository {
    queryConsulta(sql, params = "") {
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

    create(consulta) {
        const sql =
            "INSERT INTO consulta (id_animal_consulta,status_consulta,data_consulta) VALUES ($1, $2, $3);";
        return this.queryConsulta(sql, [
            consulta.idAnimalConsulta,
            consulta.statusConsulta,
            consulta.dataConsulta,
        ]);
    }

    findAll() {
        const sql = "SELECT * FROM consulta INNER JOIN animal on consulta.id_animal_consulta = animal.id_animal INNER JOIN tipo_animal on tipo_animal.id_tipo_animal = animal.id_tipo_animal_animal";
        return this.queryConsulta(sql);
    }

    findById(idConsulta) {
        const sql = "SELECT * FROM consulta INNER JOIN animal on consulta.id_animal_consulta = animal.id_animal INNER JOIN tipo_animal on tipo_animal.id_tipo_animal = animal.id_tipo_animal_animal WHERE id_consulta = $1;";
        return this.queryConsulta(sql, [idConsulta]);
    }



    update(idConsulta, consulta) {
        const sql =
            "UPDATE consulta SET id_animal_consulta = $1, status_consulta = $2, data_consulta = $3 WHERE id_consulta = $4;";
        return this.queryConsulta(sql, [
            consulta.idAnimalConsulta,
            consulta.statusConsulta,
            consulta.dataConsulta,
            idConsulta,
        ]);
    }
    delete(idConsulta) {
        const sql = "DELETE FROM consulta WHERE id_consulta = $1;";
        return this.queryConsulta(sql, [idConsulta]);
    }

}

export default new ConsultaRepository();