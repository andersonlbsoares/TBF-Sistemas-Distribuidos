class Consulta {
    _idConsulta;
    _idAnimalConsulta;
    _statusConsulta;
    _dataConsulta;

    constructor(idAnimalConsulta, statusConsulta, dataConsulta) {
        this._idAnimalConsulta = idAnimalConsulta;
        this._statusConsulta = statusConsulta;
        this._dataConsulta = dataConsulta;
    }

    get idConsulta() {
        return this._idConsulta;
    }

    get idAnimalConsulta() {
        return this._idAnimalConsulta;
    }

    get statusConsulta() {
        return this._statusConsulta;
    }

    get dataConsulta() {
        return this._dataConsulta;
    }

    set idAnimalConsulta(idAnimalConsulta) {
        this._idAnimalConsulta = idAnimalConsulta;
    }

    set statusConsulta(statusConsulta) {
        this._statusConsulta = statusConsulta;
    }

    set dataConsulta(dataConsulta) {
        this._dataConsulta = dataConsulta;
    }

}

export default Consulta;