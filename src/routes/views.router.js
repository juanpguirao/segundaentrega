const { Router } = require('express');

const router = Router();
const food = [
    {name:"Hamburgesa", price:1500},
    {name:"Pizza", price:1200}
];

router.get('/', (req, res)=>{
    const user = {
        name : req.query.name,
        isAdmin : req.query.name === "Juampi"
    };
    const data = { 
        title: "Mi titulo dinamico",
        user,
        list:food,
        style: "styles.css"
    };
    res.render('index', data);
});

module.exports = router;