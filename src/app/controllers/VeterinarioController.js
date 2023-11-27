import Veterinario from "../model/Veterinario.js";
import VeterinarioRepository from "../repositories/VeterinarioRepository.js";
import TokenService from "../services/TokenService.js";

class VeterinarioController {
  async findAll(request, response) {
    try {
      const result = await VeterinarioRepository.findAll();
      response.json(result);
    } catch (error) {
      response.json(error);
    }
  }

  async findById(request, response) {
    const id = request.params.idVeterinario;
    try {
      const result = await VeterinarioRepository.findById(id);
      if (Object.keys(result).length == 0) {
        response.json({ message: "ID not found" });
      } else {
        response.json(result);
      }
    } catch (error) {
      response.json(error);
    }
  }

  async findByNome(request, response) {
    const nome = request.params.nomeVeterinario;
    try {
      const result = await VeterinarioRepository.findByNome(nome);
      if (Object.keys(result).length == 0) {
        response.json({ message: "Nome not found" });
      } else {
        response.json(result);
      }
    } catch (error) {
      response.json(error);
    }
  }


  async updateById(request, response) {
    const id = request.params.idVeterinario;
    try {
      const exists = await VeterinarioRepository.findById(id);
      if (Object.keys(exists).length == 0) {
        response.json({ message: "ID not found" });
      } else {
        try {
          const veterinario = new Veterinario(
            request.body.nomeVeterinario,
            request.body.usuarioVeterinario,
            request.body.senhaVeterinario

          );
          await VeterinarioRepository.update(id, veterinario);
          response.json({ message: "Success" });
        } catch (error) {
          response.json(error);
        }
      }
    } catch (error) {
      response.json(error);
    }
  }

  async deleteById(request, response) {
    const id = request.params.idVeterinario;
    try {
      const exists = await VeterinarioRepository.findById(id);
      if (Object.keys(exists).length == 0) {
        response.json({ message: "ID not found" });
      } else {
        await VeterinarioRepository.delete(id);
        response.json({ message: "Success" });
      }
    } catch (error) {
      response.json(error);
    }
  }

  async store(request, response) {
    try {
      const exists = await VeterinarioRepository.findByNome(request.body.nomeVeterinario);
      if (Object.keys(exists).length > 0) {
        response.json({ message: "User already registered." });
      } else {
        try {
          const veterinario = new Veterinario(
            request.body.nomeVeterinario,
            request.body.usuarioVeterinario,
            request.body.senhaVeterinario
          );
          await VeterinarioRepository.create(veterinario);
          response.json({ message: "Success" });
        } catch (error) {
          response.json(error);
        }
      }
    } catch (error) {
      response.json(error);
    }
  }

  async login(request, response) {
    const usuario = request.body.usuarioVeterinario;
    const senha = request.body.senhaVeterinario;
    try {
      const result = await VeterinarioRepository.login(usuario, senha);
      if (Object.keys(result).length == 0) {
        response.json({ message: "Invalid credentials" });
      } else {
        let payload = {
          id: result[0].id_veterinario,
          nome: result[0].nome_veterinario,
        };
        const token = await Promise.resolve(TokenService.generateToken(payload));

        payload = {
          ...payload,
          token: token,
        };

        response.json(payload);
      }
    } catch (error) {
      response.json(error);
    }
  }
}

export default new VeterinarioController();
