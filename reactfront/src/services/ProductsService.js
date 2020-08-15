const { default: GenericService } = require("./GenericService");

class ProductsSerice extends GenericService {
    constructor() {
        super();
    }
    addProduct = (data) => this.post("/api/products", data);
    deleteProduct = (_id) => this.delete("/api/products/" + _id);
    updateProduct = (_id, data) => this.put("/api/products/" + _id, data);
    getSingleProduct = (id) => this.get("/api/products/" + id);
    getProducts = (page = 1, perPage = 9, category = "", subCategory = "") =>
        this.get(
            "/api/products?category=" +
            category +
            "&page=" +
            page +
            "&perPage=" +
            perPage +
            "&subCategory=" +
            subCategory
        );
    addToCart = (id) => this.get("/api/products/cart/" + id);
    viewCart = () => this.get("/api/products/cart");
    removeFromCart = (id) => this.get("/api/products/cart/remove/" + id);
}
let productService = new ProductsSerice();
export default productService;