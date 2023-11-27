import { Router } from "express";

import Animal from "./controllers/AnimalController.js";
import TipoAnimal from "./controllers/TipoAnimalController.js";
import Veterinario from "./controllers/VeterinarioController.js";
import Consulta from "./controllers/ConsultaController.js";
import { validateToken } from "./validateToken.js";

const router = Router();

router.get("/animal", validateToken, Animal.findAll);
router.get("/animal/:idAnimal", validateToken, Animal.findById);
router.delete("/animal/:idAnimal", validateToken, Animal.deleteById);
router.put("/animal/:idAnimal", validateToken, Animal.updateById);
router.post("/animal", validateToken, Animal.store);


router.get("/tipoanimal", validateToken, TipoAnimal.findAll);
router.get("/tipoanimal/:idTipoAnimal", validateToken, TipoAnimal.findById);
router.delete("/tipoanimal/:idTipoAnimal", validateToken, TipoAnimal.deleteById);
router.put("/tipoanimal/:idTipoAnimal", validateToken, TipoAnimal.updateById);
router.post("/tipoanimal", validateToken, TipoAnimal.store);

router.get("/veterinario", validateToken, Veterinario.findAll);
router.get("/veterinario/:idVeterinario", validateToken, Veterinario.findById);
router.delete("/veterinario/:idVeterinario", validateToken, Veterinario.deleteById);
router.put("/veterinario/:idVeterinario", validateToken, Veterinario.updateById);
router.post("/veterinario", Veterinario.store);

router.get("/consulta", validateToken, Consulta.findAll);
router.get("/consulta/:idConsulta", validateToken, Consulta.findById);
router.delete("/consulta/:idConsulta", validateToken, Consulta.deleteById);
router.put("/consulta/:idConsulta", validateToken, Consulta.updateById);
router.post("/consulta", validateToken, Consulta.store);

router.post("/login", Veterinario.login);



export default router;
