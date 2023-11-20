import TipoAnimal from "../model/TipoAnimal.js";
import TipoAnimalRepository from "../repositories/TipoAnimalRepository.js";

class TipoAnimalController {
  async findAll(request, response) {
    try {
      const result = await TipoAnimalRepository.findAll();
      response.json(result);
    } catch (error) {
      response.json(error);
    }
  }

  async findById(request, response) {
    const id = request.params.idTipoAnimal;
    try {
      const result = await TipoAnimalRepository.findById(id);
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
    const nome = request.params.nomeTipoAnimal;
    try {
      const result = await TipoAnimalRepository.findByNome(nome);
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
    const id = request.params.idTipoAnimal;
    try {
      const exists = await TipoAnimalRepository.findById(id);
      if (Object.keys(exists).length == 0) {
        response.json({ message: "ID not found" });
      } else {
        try {
          const tipoAnimal = new TipoAnimal(
            request.body.nomeTipoAnimal,
            request.body.atributoTipoAnimal
          );
          await TipoAnimalRepository.update(id, tipoAnimal);
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
    const id = request.params.idTipoAnimal;
    try {
      const exists = await TipoAnimalRepository.findById(id);
      if (Object.keys(exists).length == 0) {
        response.json({ message: "ID not found" });
      } else {
        await TipoAnimalRepository.delete(id);
        response.json({ message: "Success" });
      }
    } catch (error) {
      response.json(error);
    }
  }

  async store(request, response) {
    try {
      const exists = await TipoAnimalRepository.findByNome(request.body.nomeTipoAnimal);
      if (Object.keys(exists).length > 0) {
        response.json({ message: "Tipo Animal já cadastrado." });
      } else {
        try {
          const tipoAnimal = new TipoAnimal(
            request.body.nomeTipoAnimal,
            request.body.atributoTipoAnimal
          );
          await TipoAnimalRepository.create(tipoAnimal);
          response.json({ message: "Success" });
        } catch (error) {
          response.json(error);
        }
      }
    } catch (error) {
      response.json(error);
    }
  }
}

export default new TipoAnimalController();
