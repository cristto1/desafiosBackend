class ProductManager {
    constructor() {
        this.products = [];
        this.idCounter = 1;
        }

    addProduct(product) {
        const existingProduct = this.products.find(
            (p) => p.code === product.code
        );

    if (existingProduct) {
            console.error("Product code already exists");
            return;
        }

    const { title, description, price, thumbnail, code, stock } = product;

    if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error("All fields are required");
        return;
    }

    const newProduct = {
        id: this.idCounter,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
    };

    this.products.push(newProduct);
    this.idCounter++;
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((p) => p.id === id);

    if (!product) {
        console.error("Not found");
            return;
    }

    return product;
    }
}

module.exports = ProductManager;