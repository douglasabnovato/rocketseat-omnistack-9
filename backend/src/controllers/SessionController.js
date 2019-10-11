// index, show, store, update, destroy

const User = require('../models/User');

module.exports = {
    //async e await : aguardar resposta antes de prosseguir
    async store(req, res){
        const { email } = req.body;

        let user = await User.findOne({ email });

        if(!user){
            user = await User.create({ email });
        }

        return res.json(user);
    }
};