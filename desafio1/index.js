const ProductManager = require("./productManager");

const productManager = new ProductManager();

productManager.addProduct({
    title: "Collar elefante",
    category: 'Collares',
    description: " Collar con dige de elefante colores",
    price: 40000,
    thumbnail: "https://cristto1.github.io/antilope/assets/image/collar-elefante-colores.jpg",
    code: "collar1",
    stock: 20,
});

productManager.addProduct({
    title: "Pulsera mano de Dios",
    category: 'Pulseras',
    description: "Pulsera dorado con dije mano de Dios",
    price: 35000,
    thumbnail: "https://cristto1.github.io/antilope/assets/image/pulsera-2.jpg",
    code: "pulsera1",
    stock: 20,
});

productManager.addProduct({
    title: "Ear cuff corona",
    category: 'Ear cuff',
    description: "Ear cuff dorado en forma de corona",
    price: 25000,
    thumbnail: "https://cristto1.github.io/antilope/assets/image/earcuff-2.jpg",
    code: "earcuff1",
    stock: 10,
});

console.log(productManager.getProducts());

console.log(productManager.getProductById(1));

console.log(productManager.getProductById(5));

console.log(productManager.getProductByCategory('Collares'));




