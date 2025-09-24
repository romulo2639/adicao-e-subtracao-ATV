const express = require('express')
const app = express()

app.get('/', (req,res) =>{
        res.send('Ok!');
});

app.get('/adicao/:n1/:n2', (req,res) =>{
    let n1 = parseInt(req.params.n1);
    let n2 = parseInt(req.params.n2);

    let Soma = n1 + n2;

    res.send("o resultado da adicao é : " + Soma)
});

app.get('/subtracao/:n1/:n2', (req,res) =>{
    let n1 = parseInt(req.params.n1);
    let n2 = parseInt(req.params.n2);

    let Sub = n1 - n2;

    res.send("o resultado da subtracao é : " + Sub)
});

app.listen(3000, () => {
    console.log('Servidor em execução... ');
    console.log('http://localhost:3000/adicao/6/2 ');
    console.log('http://localhost:3000/subtracao/6/2');
})
