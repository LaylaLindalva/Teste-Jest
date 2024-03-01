const ComparaSenhas = (senha1, senha2) => {
    if(senha1 === senha2){
        return 'Sua senha foi aceita'
    }else {
        return 'Erro:..'
    }
}
module.exports = ComparaSenhas;