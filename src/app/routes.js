import { Router } from "express";

import Animal from "./controllers/AnimalController.js";
import TipoAnimal from "./controllers/TipoAnimalController.js";

const router = Router();

router.get("/animal", Animal.findAll);
router.get("/animal/:idAnimal", Animal.findById);
router.delete("/animal/:idAnimal", Animal.deleteById);
router.put("/animal/:idAnimal", Animal.updateById);
router.post("/animal", Animal.store);


router.get("/tipoanimal", TipoAnimal.findAll);
router.get("/tipoanimal/:idTipoAnimal", TipoAnimal.findById);
router.delete("/tipoanimal/:idTipoAnimal", TipoAnimal.deleteById);
router.put("/tipoanimal/:idTipoAnimal", TipoAnimal.updateById);
router.post("/tipoanimal", TipoAnimal.store);

export default router;
