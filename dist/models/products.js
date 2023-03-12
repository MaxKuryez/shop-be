"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRated = exports.Product = void 0;
class Product {
    constructor(title, price, description, image, category) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
        this.category = category;
    }
}
exports.Product = Product;
class ProductRated extends Product {
    constructor(title, price, description, image, category, rating) {
        super(title, price, description, image, category);
        this.rating = rating;
    }
}
exports.ProductRated = ProductRated;
