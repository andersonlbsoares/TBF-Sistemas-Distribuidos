import Animal from "../model/Animal.js";
import AnimalRepository from "../repositories/AnimalRepository.js";

class AnimalController {
  async findAll(request, response) {
    try {
      const result = await AnimalRepository.findAll();
      response.json(result);
    } catch (error) {
      response.json(error);
    }
  }

  async findById(request, response) {
    const id = request.params.idAnimal;
    try {
      const result = await AnimalRepository.findById(id);
      if (Object.keys(result).length == 0) {
        response.json({ message: "ID not found" });
      } else {
        response.json(result);
      }
    } catch (error) {
      response.json(error);
    }
  }

  async updateById(request, response) {
    const id = request.params.idAnimal;
    try {
      const exists = await AnimalRepository.findById(id);
      if (Object.keys(exists).length == 0) {
        response.json({ message: "ID not found" });
      } else {
        try {
          const animal = new Animal(
            request.body.nomeAnimal,
            request.body.idadeAnimal,
            request.body.donoAnimal,
            request.body.idTipoAnimalAnimal,
            request.body.atributoAnimal
          );
          await AnimalRepository.update(id, animal);
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
    const id = request.params.idAnimal;
    try {
      const exists = await AnimalRepository.findById(id);
      if (Object.keys(exists).length == 0) {
        response.json({ message: "ID not found" });
      } else {
        await AnimalRepository.delete(id);
        response.json({ message: "Success" });
      }
    } catch (error) {
      response.json(error);
    }
  }

  async store(request, response) {
    try {
      const animal = new Animal(
        request.body.nomeAnimal,
        request.body.idadeAnimal,
        request.body.donoAnimal,
        request.body.idTipoAnimalAnimal,
        request.body.atributoAnimal
      );
      await AnimalRepository.create(animal);
      response.json({ message: "Success" });
    } catch (error) {
      response.json(error);
    }
  }
}

export default new AnimalController();