const { Router } = require('express');
const router = Router();
const { v4: uuid } = require('uuid');

const users = []

router.get('/', (req, res) =>{
    res.json({
        id: users.id,
        users
    })
})
router.post('/', (req, res)=>{
    console.log("peticion post" + req.body)
    const user = {
        id: uuid(),
        ...req.body
    };
    users.push(user)
    res.status(201).json({
        success: true,
        data: users
    })
})
module.exports = router;