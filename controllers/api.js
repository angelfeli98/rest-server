
const saludar = (req, res) => {
    res.json('get usuario');
}

const getUser = (req, res) => {
    const id = req.params.id;
    res.json({
        id
    })
}

const saveUser = (req, res) => {
    
    const data = req.body;

    if(data.nombre){
        res.json({data})
    }else{
        res.status(400).json({
            "ok" : false,
            "mensaje" : "data incompleta"
        })
    }
    
}

module.exports = {
    saludar,
    getUser,
    saveUser
}