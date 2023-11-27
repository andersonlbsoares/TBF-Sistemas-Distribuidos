class Animal {
    _idAnimal;
    _nomeAnimal;
    _idadeAnimal;
    _donoAnimal;
    _idTipoAnimalAnimal;
    _atributoAnimal;

    constructor(nomeAnimal, idadeAnimal, donoAnimal, idTipoAnimalAnimal, atributoAnimal) {
        this._nomeAnimal = nomeAnimal;
        this._idadeAnimal = idadeAnimal;
        this._donoAnimal = donoAnimal;
        this._idTipoAnimalAnimal = idTipoAnimalAnimal;
        this._atributoAnimal = atributoAnimal;
    }


    get idAnimal() {
        return this._idAnimal;
    }

    get nomeAnimal() {
        return this._nomeAnimal;
    }

    get idadeAnimal() {
        return this._idadeAnimal;
    }

    get donoAnimal() {
        return this._donoAnimal;
    }

    get idTipoAnimalAnimal() {
        return this._idTipoAnimalAnimal;
    }

    get atributoAnimal() {
        return this._atributoAnimal;
    }

    set nomeAnimal(nomeAnimal) {
        this._nomeAnimal = nomeAnimal;
    }

    set idadeAnimal(idadeAnimal) {
        this._idadeAnimal = idadeAnimal;
    }

    set donoAnimal(donoAnimal) {
        this._donoAnimal = donoAnimal;
    }

    set idTipoAnimalAnimal(idTipoAnimalAnimal) {
        this._idTipoAnimalAnimal = idTipoAnimalAnimal;
    }

    set atributoAnimal(atributoAnimal) {
        this._atributoAnimal = atributoAnimal;
    }

}

export default Animal;