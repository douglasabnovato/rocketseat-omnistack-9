// index, show, store, update, destroy

const User = require('../models/User');

module.exports = {
    //async e await quando a função demora, 
    //e o sistema tem que aguardar antes de ir para a próxima instrução
    async store(req, res){
        const { email } = req.body;

        const user = await User.create({ email })
    }
};