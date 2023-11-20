class TipoAnimal {
    _idTipoAnimal;
    _nomeTipoAnimal;
    _atributoTipoAnimal;

    constructor(nomeTipoAnimal, atributoTipoAnimal) {
        this._nomeTipoAnimal = nomeTipoAnimal;
        this._atributoTipoAnimal = atributoTipoAnimal;
    }

    get idTipoAnimal() {
        return this._idTipoAnimal;
    }

    get nomeTipoAnimal() {
        return this._nomeTipoAnimal;
    }

    get atributoTipoAnimal() {
        return this._atributoTipoAnimal;
    }

    set nomeTipoAnimal(nomeTipoAnimal) {
        this._nomeTipoAnimal = nomeTipoAnimal;
    }

    set atributoTipoAnimal(atributoTipoAnimal) {
        this._atributoTipoAnimal = atributoTipoAnimal;
    }

}

export default TipoAnimal;