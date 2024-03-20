class ProductManager {
    constructor() {
        this.products = [];
        this.idCounter = 1;
        }

    addProduct(product) {
        const { title, category, description, price, thumbnail, code, stock } = product;

        if (!title || !category || !description || !price || !thumbnail || !code || !stock) {
            console.error("Campos incompletos");
            return;
        }

        const existingProduct = this.products.find(
            (pro) => pro.code === product.code
        );

        if (existingProduct) {
            console.error("Código del producto ya existe");
            return;
        }

        const newProduct = {
            id: this.idCounter,
            title,
            category,
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
        const product = this.products.find((pro) => pro.id === id);

        if (!product) {
            console.error("No se encontró el producto");
                return;
        }

        return product;
    }

    getProductByCategory(category) {
        const product = this.products.find((pro) => pro.category === category);

        if (!product) {
            console.error("No se encontró el producto");
                return;
        }

        return product;
    }
}

module.exports = ProductManager;

