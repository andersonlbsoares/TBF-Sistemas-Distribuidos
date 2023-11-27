class Veterinario {
    _idVeterinario;
    _nomeVeterinario;
    _usuarioVeterinario;
    _senhaVeterinario;

    constructor(nomeVeterinario, usuarioVeterinario, senhaVeterinario) {
        this._nomeVeterinario = nomeVeterinario;
        this._usuarioVeterinario = usuarioVeterinario;
        this._senhaVeterinario = senhaVeterinario;
    }

    get idVeterinario() {
        return this._idVeterinario;
    }

    get nomeVeterinario() {
        return this._nomeVeterinario;
    }

    get usuarioVeterinario() {
        return this._usuarioVeterinario;
    }

    get senhaVeterinario() {
        return this._senhaVeterinario;
    }


    set nomeVeterinario(nomeVeterinario) {
        this._nomeVeterinario = nomeVeterinario;
    }

    set usuarioVeterinario(usuarioVeterinario) {
        this._usuarioVeterinario = usuarioVeterinario;
    }

    set senhaVeterinario(senhaVeterinario) {
        this._senhaVeterinario = senhaVeterinario;
    }

}

export default Veterinario;