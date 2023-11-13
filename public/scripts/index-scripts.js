import { OrderedProduct } from "./components/OrderedProduct.js";
import { Product } from "./components/Product.js";

const PRODUCTS = [
    {
        name: "Серветка Basic",
        price: 100,
        description: 'Базова серветка для очищення взуття',
        image: "https://picsum.photos/seed/10/100/100",
        ordered: 0
    },
    {
        name: "Серветка Premium",
        price: 150,
        description: 'Преміум серветка для глибокого очищення взуття',
        image: "https://picsum.photos/seed/20/100/100",
        ordered: 0
    },
    {
        name: "Серветка Eco",
        price: 120,
        description: 'Екологічна серветка для взуття',
        image: "https://picsum.photos/seed/30/100/100",
        ordered: 0
    },
    {
        name: "Серветка Ultra",
        price: 180,
        description: 'Ультратонка серветка для делікатного взуття',
        image: "https://picsum.photos/seed/40/100/100",
        ordered: 0
    },
    {
        name: "Серветка Strong",
        price: 130,
        description: 'Міцна серветка для робочого взуття Міцна серветка для робочого взуття Міцна серветка для робочого взуття Міцна серветка для робочого взуття Міцна серветка для робочого взуття',
        image: "https://picsum.photos/seed/50/100/100",
        ordered: 0
    },
    {
        name: "Серветка Strong",
        price: 130,
        description: 'Міцна серветка для робочого взуття',
        image: "https://picsum.photos/seed/50/100/100",
        ordered: 0
    }
];

PRODUCTS.forEach(function (prod) {
    let product = new Product(prod, updateCartIndicator);
    document.querySelector(".products").appendChild(product.element);
});


document.querySelectorAll(".navigator").forEach(function (element) {
    element.addEventListener("click", navigator);
});

document.querySelectorAll(".buy").forEach(function (element) {
    element.addEventListener("click", onBuy);
});


function navigator(e) {
    let target = e.target.closest(".navigator")

    let pages = document.querySelectorAll(".page");
    pages.forEach(function (element) {
        element.classList.add("hidden");
    });

    let page = document.querySelector(`.${target.dataset.page}`);
    page.classList.remove("hidden");
}

function onBuy(e) {
    let target = e.target.closest(".product");
    let product = target.dataset.product;

    let newProduct = PRODUCTS.find(function (element) {
        return element.name === product;
    });

    newProduct.ordered++;

    if (document.querySelector(`[data-ordered-product="${product}"]`)) {
        document.querySelector(`[data-ordered-product="${product}"]`).querySelector(".order-product-quantity").value++;
    } else {
        const orderedProduct = new OrderedProduct(newProduct, updateCartIndicator);
        document.querySelector(".orders").appendChild(orderedProduct.element);
    }

    updateCartIndicator();
}

function updateCartIndicator() {
    let amt = 0;

    PRODUCTS.forEach(function (element) {
        amt += element.ordered;
    });

    document.querySelector(".cart-indicator").textContent = amt;
}

