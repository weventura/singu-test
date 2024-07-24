const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:4200'
}));
app.use(express.json());

const Status = {
    ENTEGUE: 'Entregue'
}

let pedidos = [];
let carrinho = [];

const pratos = [
    {
        id: 1,
        image: 'assets/images/food_001.png',
        title: 'Torta de frango',
        description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aliquam.',
        price: 90,
    },
    {
        id: 2,
        image: 'assets/images/food_002.png',
        title: 'Churrasco',
        description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aliquam.',
        price: 80,
    },
    {
        id: 3,
        image: 'assets/images/food_003.png',
        title: 'Frango frito',
        description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aliquam.',
        price: 30,
    },
    {
        id: 4,
        image: 'assets/images/food_004.png',
        title: 'Cachorro quente',
        description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aliquam.',
        price: 50,
    },
    {
        id: 5,
        image: 'assets/images/food_005.png',
        title: 'Bisteca',
        description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aliquam.',
        price: 120,
    },
    {
        id: 6,
        image: 'assets/images/food_006.png',
        title: 'Donuts',
        description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aliquam.',
        price: 200,
    },
    {
        id: 7,
        image: 'assets/images/food_007.png',
        title: 'Batata frita',
        description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aliquam.',
        price: 180,
    },
    {
        id: 8,
        image: 'assets/images/food_008.png',
        title: 'Pizza',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aliquam.',
        price: 35,
    },
    {
        id: 9,
        image: 'assets/images/food_009.png',
        title: 'Sushi',
        description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aliquam.',
        price: 10,
    },
];

// APIs pedidos
app.post('/pedidos', (req, res) => {
    const pedido = {
        id: Date.now().toString(),
        itens: req.body,
        status: 'Pendente',
        done: false
    };

    pedidos.push(pedido);
    carrinho = [];
    res.status(201).send(pedido);
});

app.get('/pedidos', (req, res) => {
    res.status(200).send(pedidos);
});

app.delete('/pedidos', (req, res) => {
    pedidos = [];

    res.status(200).send(pedidos);
});

app.put('/pedidos/:id/status', (req, res) => {
    const pedido = pedidos.find(p => p.id === req.params.id);

    if (pedido) {
        pedido.status = req.body.status;

        pedido.status === Status.ENTEGUE ? pedido.done = true : pedido.done = false;

        res.status(200).send(pedido);
    } else {
        res.status(404).send({ message: 'Pedido não encontrado' });
    }
});

//  APIs extras
app.get('/pratos', (req, res) => {
    res.status(200).send(pratos);
});

//  APIs carrinho
app.post('/carrinho', (req, res) => {
    const payload = req.body;

    carrinho.push(payload);
    res.status(201).send(carrinho);
});

app.delete('/carrinho', (req, res) => {
    carrinho = [];

    res.status(200).send(carrinho);
});

app.delete('/carrinho/:id', (req, res) => {
    const id = Number(req.params.id);
    const item = carrinho.find(p => p.id === id);

    if (item) {
        carrinho = carrinho.filter(c => c.id !== item.id);
        
        res.status(200).send(carrinho);
    } else {
        res.status(404).send({ message: 'Erro ao remover item' });
    }
});

app.get('/carrinho', (req, res) => {
    res.status(200).send(carrinho);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

module.exports = app;