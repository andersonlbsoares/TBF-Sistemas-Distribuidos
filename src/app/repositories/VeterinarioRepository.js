import connection from "../../config/database/connection.js";
import Crypto from "../../crypto/crypto.js";

class VeterinarioRepository {
    queryVeterinario(sql, params = "") {
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

    create(veterinario) {
        const sql =
            "INSERT INTO veterinario (nome_veterinario, usuario_veterinario, senha_veterinario) VALUES ($1, $2, $3);";
        return this.queryVeterinario(sql, [
            veterinario.nomeVeterinario,
            veterinario.usuarioVeterinario,
            Crypto.applyHash(veterinario.senhaVeterinario),
        ]);
    }

    findAll() {
        const sql = "SELECT * FROM veterinario ORDER BY id_veterinario ASC;";
        return this.queryVeterinario(sql);
    }

    findById(idVeterinario) {
        const sql = "SELECT * FROM veterinario WHERE id_veterinario = $1;";
        return this.queryVeterinario(sql, [idVeterinario]);
    }


    findByNome(nomeVeterinario) {
        const sql = "SELECT * FROM veterinario WHERE nome_veterinario LIKE $1;";
        return this.queryVeterinario(sql, [nomeVeterinario]);
    }


    update(idVeterinario, veterinario) {
        const sql =
            "UPDATE veterinario SET nome_veterinario = $1, usuario_veterinario = $2, senha_veterinario = $3 WHERE id_veterinario = $4;";
        return this.queryVeterinario(sql, [
            veterinario.nomeVeterinario,
            veterinario.usuarioVeterinario,
            Crypto.applyHash(veterinario.senhaVeterinario),
            idVeterinario,
        ]);
    }
    delete(idVeterinario) {
        const sql = "DELETE FROM veterinario WHERE id_veterinario = $1;";
        return this.queryVeterinario(sql, [idVeterinario]);
    }

    login(usuarioVeterinario, senhaVeterinario) {
        const sql = "SELECT * FROM veterinario WHERE usuario_veterinario = $1 AND senha_veterinario = $2;";
        return this.queryVeterinario(sql, [usuarioVeterinario, Crypto.applyHash(senhaVeterinario)]);
    }
}

export default new VeterinarioRepository();