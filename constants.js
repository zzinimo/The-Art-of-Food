export const initialProducts = [
  {
    image: "./images/woodenBowl.webp",
    title: "Bowls",
    description:
      "A beautiful bowl for your kitchen. Made from recycled materials!",
    price: 15.99,
  },
  {
    image: "./images/woodenSpoon.webp",
    title: "Utensils",
    description:
      "Essential utensils for your kitchen. All made from sustainable materials!",
    price: 12.99,
  },
  {
    image: "./images/lemon.jpg",
    title: "Lemons",
    description:
      "We grow our own lemons for the teas that we brew and sell. All our lemons are organic and handpicked!",
    price: 2.99,
  },
];

export default class Product {
  constructor(data) {
    this.image = data.image;
    this.title = data.title;
    this.description = data.description;
    this.price = data.price;
  }

  _getTemplate() {
    const productTemplate = document.querySelector(".product__template");
    const productElement = productTemplate.content
      .querySelector(".product")
      .cloneNode(true);
    return productElement;
  }

  _getProduct() {
    const actualProduct = this._getTemplate();
    actualProduct.querySelector(".product__image").src = this.image;
    actualProduct.querySelector(".product__title").textContent = this.title;
    actualProduct.querySelector(".product__description").textContent =
      this.description;

    return actualProduct;
  }
}
