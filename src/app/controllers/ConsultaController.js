import Consulta from "../model/Consulta.js";
import ConsultaRepository from "../repositories/ConsultaRepository.js";
import TokenService from "../services/TokenService.js";

class ConsultaController {
  async findAll(request, response) {
    try {
      const result = await ConsultaRepository.findAll();
      response.json(result);
    } catch (error) {
      response.json(error);
    }
  }

  async findById(request, response) {
    const id = request.params.idConsulta;
    try {
      const result = await ConsultaRepository.findById(id);
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
    const nome = request.params.nomeConsulta;
    try {
      const result = await ConsultaRepository.findByNome(nome);
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
    const id = request.params.idConsulta;
    try {
      const exists = await ConsultaRepository.findById(id);
      if (Object.keys(exists).length == 0) {
        response.json({ message: "ID not found" });
      } else {
        try {
          const consulta = new Consulta(
            request.body.idAnimalConsulta,
            request.body.statusConsulta,
            request.body.dataConsulta,
          );
          await ConsultaRepository.update(id, consulta);
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
    const id = request.params.idConsulta;
    try {
      const exists = await ConsultaRepository.findById(id);
      if (Object.keys(exists).length == 0) {
        response.json({ message: "ID not found" });
      } else {
        await ConsultaRepository.delete(id);
        response.json({ message: "Success" });
      }
    } catch (error) {
      response.json(error);
    }
  }

  async store(request, response) {
    try {
      const consulta = new Consulta(
        request.body.idAnimalConsulta,
        request.body.statusConsulta,
        request.body.dataConsulta,
      );
      await ConsultaRepository.create(consulta);
      response.json({ message: "Success" });
    } catch (error) {
      response.json(error);
    }
  }

}

export default new ConsultaController();