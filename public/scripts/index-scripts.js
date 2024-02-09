import { OrderedProduct } from "./components/OrderedProduct.js";
import { Product } from "./components/Product.js";

const PRODUCTS = [
    {
        name: "Паста CHYSTO SHVYDKO",
        price: 100,
        description: 'Професійний засіб для чищення взуття',
        details: `
        Паста Chysto Shvydko - це універсальний засіб, який ефективно усуває повсякденні забруднення, повертаючи взуттю первісну чистоту та свіжість. Завдяки простоті використання, паста гарантує швидкий догляд за взуттям та відмінний результат з мінімальними зусиллями.`,
        characteristics: `• Призначення: ефективне очищення міцних матеріалів взуття (шкіра, гума, піна (ЕВА), синтетика, композити).
        • Обмеження використання: не рекомендується для лакованої, анілінової, глянцевої шкіри, нубуку, замші та сітчастих текстилів.
        • Застосування: використовувати з водою; у разі чутливості матеріалу до води – застосовувати лише на підошву.
        • Увага: можливе змивання попередньо нанесеного фарбувального шару.
        • Склад: підготовлена вода, аніонні та неіоногенні поверхнево-активні агенти, спеціалізовані адсорбенти, мікронізовані абразивні частки, барвник, ароматичні добавки. 
        Всі компоненти є біорозкладними та безпечними.
        `,
        images: ['./images/products/Паста-на-сайт-1.jpg',
            './images/products/Паста-на-сайт-2.jpg',
            './images/products/Паста-на-сайт-3.jpg'],
        ordered: 0,
        descount: 0.1
    },
    {
        name: "Щітка Medium",
        price: 150,
        description: 'Універсальна щітка для всіх типів взуття',
        details: `Щітка Chysto Shvydko - Незамінний інструмент для якісного чищення взуття. З її допомогою легко видалити засохлий бруд та пил.Підходить для різних типів поверхонь, включаючи шкіру, замшу та текстиль.`,
        characteristics: `• Матеріал: Дерево.
        • Довжина щетин: 20мм.
        • Тип щетини: універсальна середня жорсткість.
        • Ручка: ергономічна, забезпечує зручне тримання.
        • Призначення: очищення шкіряного, замшевого та текстильного взуття.
        • Особливості: довговічна, легка у догляді.`,
        images: ['./images/products/Щітка-на-сайт-1.jpg',
            './images/products/Щітка-на-сайт-2.jpg',
            './images/products/Щітка-на-сайт-3.jpg'],
        ordered: 0,
        descount: 0.1
    },
    {
        name: "Серветка Мікрофібра",
        price: 120,
        description: 'Базова серветка для витирання взуття після чищення',
        details: `
        Серветка ідеально підходить для витирання та полірування поверхні взуття після його очищення. Мікрофібра забезпечує ніжне видалення бруду без пошкодження матеріалу взуття, зберігаючи його зовнішній вигляд та подовжуючи термін служби.`,
        characteristics: `• Матеріал: Якісна мікрофібра.
        • Розміри: 30х30см.
        • Призначення: витирання та полірування взуття після чищення.
        • Особливості: ніжно чистить без пошкодження поверхні, підходить для всіх типів взуття.
        • Прання: можливість машинного або ручного прання.`,
        images: ["./images/products/Серветка-на-сайт-1.jpg",
            "./images/products/Серветка-на-сайт-2.jpg"],
        ordered: 0,
        descount: 0.1
    },
    {
        name: "Лопатка ComfortStep ",
        price: 180,
        description: `Зручна лопатка для легкого взування`,
        details: `Лопатка ComfortStep легка та ергономічна форма дозволяє носити ії з собою та ідеально підходить для щоденного використання.`,
        characteristics: ``,
        images: ["./images/products/Лопатка-1.jpg"],
        ordered: 0,
        descount: 0.1
    },
    {
        name: "Набір для чистки взуття 3в1 ",
        price: 130,
        description: `Все необхідне для догляду за взуттям в одному наборі`,
        details: `Набір включає в себе високоякісну пасту для чищення, професійну щітку та мікрофіброву серветку, що разом створюють ідеальний комплекс для догляду за вашим взуттям. Паста ефективно видаляє забруднення та надає блиск, щітка забезпечує глибоке очищення без пошкодження матеріалу, а м'яка серветка використовується для фінішного полірування`,
        characteristics: ``,
        images: ["./images/products/Комплект-1.jpg"],
        ordered: 0,
        descount: 0.1
    },
    {
        name: "Щітка VelvetGrip",
        price: 130,
        description: `Для ефективного догляду за замшевим взуттям 2в1`,
        details: `Щітка VelvetGrip - це інструмент для замшевого взуття з металевою та гумовою сторонами. Металеві щетинки розпушують ворс та видаляють в'їдливі забруднення, а гумова сторона ніжно чистить поверхню. Ідеальна для підтримки стану та вигляду замші.`,
        characteristics: ``,
        images: ["./images/products/Щітка-VelvetGrip-1.jpg"],
        ordered: 0,
        descount: 0.1
    },
    {
        name: "Крем Wax Protect ",
        price: 180,
        description: `Натуральний водонепроникний бар'єр та елегантний блиск`,
        details: ``,
        characteristics: ``,
        images: ["./images/products/Віск-фото-на-сайт-1.jpg"],
        ordered: 0,
        descount: 0.1
    },
    {
        name: "Спрей Shoe Sanitize",
        price: 130,
        description: `Спрей для дезінфекції взуття з протизапаховим ефектом`,
        details: ``,
        characteristics: ``,
        images: ["./images/products/Спрей-фото-на-сайт-1.jpg"],
        ordered: 0,
        descount: 0.1
    },
    {
        name: "Активна піна Rapid Refresh",
        price: 130,
        description: `Швидка піна для миттєвого відновлення чистоти й блиску взуття`,
        details: ``,
        characteristics: ``,
        images: ["./images/products/Піна-фото-на-сайт-1.jpg"],
        ordered: 0,
        descount: 0.1
    }
];

PRODUCTS.forEach(function (prod) {
    let product = new Product(prod, updateCartIndicator, PRODUCTS);
    document.querySelector(".products").appendChild(product.element);
});


document.querySelectorAll(".navigator").forEach(function (element) {
    element.addEventListener("click", navigator);
});

document.querySelectorAll(".buy").forEach(function (element) {
    element.addEventListener("click", onBuy);
});

document.querySelector(".cart").addEventListener("click", onCart);
document.querySelector(".confirm-orders-btn").addEventListener("click", onConfirmOrders);
document.querySelector('#address').addEventListener('input', onFindAddress)
document.querySelector('#founded-addresses-list').addEventListener('change', onSelectAddress);
document.querySelector('#founded-warehouses-list').addEventListener('change', onSelectWarehouse)
document.querySelector(".confirm").addEventListener("click", onConfirm);
document.querySelector(".barck-to-cart").addEventListener("click", onBackToCart);
document.addEventListener("scroll", onScrollDown);

function navigator(e) {
    let target = e.target.closest(".navigator")

    let pages = document.querySelectorAll(".page");
    pages.forEach(function (element) {
        element.classList.add("hidden");
    });

    let page = document.querySelector(`.${target.dataset.page}`);
    page.classList.remove("hidden");

    onBackToCart();
}

function onCart() {
    PRODUCTS.forEach(function (prod) {
        if (prod.ordered > 0) {

            if (document.querySelector(`[data-ordered-product="${prod.name}"]`)) {
                document.querySelector(`[data-ordered-product="${prod.name}"]`).querySelector(".order-product-quantity").value = prod.ordered;
            } else {
                const orderedProduct = new OrderedProduct(prod, updateCartIndicator);
                document.querySelector(".orders").appendChild(orderedProduct.element);
            }

        } else {
            if (document.querySelector(`[data-ordered-product="${prod.name}"]`)) {
                document.querySelector(`[data-ordered-product="${prod.name}"]`).remove();
            }
        }

    });


}

function onBuy(e) {
    let target = e.target.closest(".product");
    let product = target.dataset.product;

    let newProduct = PRODUCTS.find(function (element) {
        return element.name === product;
    });

    newProduct.ordered++;

    updateCartIndicator();

    let cartIndicator = target.querySelector(".product-cart-indicator");
    cartIndicator.textContent = newProduct.ordered;

    if (newProduct.ordered > 0) {
        cartIndicator.style.display = '';
    } else {
        cartIndicator.style.display = 'none';
    }

}

function onConfirmOrders(e) {
    let target = e.target;
    target.classList.add("hidden");

    let confirmOrdersShell = document.querySelector(".confirm-orders-box");
    confirmOrdersShell.classList.remove("hidden");


    let orders = document.querySelector(".orders");
    orders.classList.add("hidden");


    let myOrders = document.querySelector(".my-orders");
    myOrders.innerHTML = '';

    let sumBefore = 0;
    let descount = 0;
    let total = 0;

    PRODUCTS.forEach(function (prod) {
        if (prod.ordered > 0) {
            let order = document.createElement("div");
            order.classList.add("my-order");

            let name = document.createElement("h3");
            name.classList.add("my-order-name");
            name.textContent = prod.name;

            let quantity = document.createElement("div");
            quantity.classList.add("my-order-quantity");
            quantity.textContent = 'кількість: ' + prod.ordered;

            let price = document.createElement("div");
            price.classList.add("my-order-price");
            price.textContent = 'ціна: ' + prod.price + ' ₴';

            let sum = document.createElement("div");
            sum.classList.add("my-order-sum");
            sum.textContent = 'сума: ' + prod.ordered * prod.price;


            order.appendChild(name);
            order.appendChild(quantity);
            order.appendChild(price);

            myOrders.appendChild(order);

            sumBefore += prod.ordered * prod.price;

            descount += prod.ordered * prod.price * prod.descount;
            total += prod.ordered * prod.price * (1 - prod.descount);
        }

        document.querySelector(".sum").textContent = sumBefore;
        document.querySelector(".descont-sum").textContent = '-' + descount;
        document.querySelector(".total-sum").textContent = total;
    }
    );
}

async function onConfirm() {
    let name = document.querySelector("#name").value;
    let surname = document.querySelector("#surname").value;
    let phone = document.querySelector("#phone").value;
    let email = document.querySelector("#email").value;
    let comment = document.querySelector("#comment").value;
    let address = document.querySelector(".founded-address").innerText;
    let warehouse = document.querySelector(".selected-warehouse").innerText;
    let date = new Date();
    date = date.toLocaleString().slice(0, 10);

    if (!validateFields()) {
        return;
    }

    let products = PRODUCTS.filter(function (prod) {
        return prod.ordered > 0;
    }
    );

    let productsString = '';

    products.forEach(function (prod) {
        productsString += `${prod.name} - ${prod.ordered} шт. \n`;
    });

    let totalSum = document.querySelector(".total-sum").textContent;

    let orders = [
        date,
        name,
        surname,
        phone,
        email,
        comment,
        address,
        warehouse,
        productsString,
        totalSum
    ];

    try {
        const res = await fetch('/create-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ orders })
        });

        let data = await res.json();
        console.log(data);

        clearFields()

    } catch (error) {
        console.log(error);
    }
}

function onBackToCart() {
    let confirmOrdersShell = document.querySelector(".confirm-orders-box");
    confirmOrdersShell.classList.add("hidden");

    let confirmOrdersBtn = document.querySelector(".confirm-orders-btn");
    confirmOrdersBtn.classList.remove("hidden");

    let orders = document.querySelector(".orders");
    orders.classList.remove("hidden");

}

function updateCartIndicator() {
    let amt = 0;

    PRODUCTS.forEach(function (element) {
        amt += element.ordered;
    });

    document.querySelector(".cart-indicator").textContent = amt;
    document.querySelector(".fixed-cart").querySelector(".cart-indicator").textContent = amt;
}

async function onFindAddress(e) {
    document.querySelector('.founded-address').innerHTML = '';
    document.querySelector('.selected-warehouse').innerHTML = '';
    document.querySelector('#founded-warehouses-list').innerHTML = '';

    let value = e.target.value;
    let url = 'https://api.novaposhta.ua/v2.0/json/';
    let bodyContent = `{
        "apiKey": "d319a5abcd8c2ad50f99f22d9c5f43fe",
        "modelName": "Address",
        "calledMethod": "searchSettlements",
        "methodProperties": {
            "CityName": "${value}",
            "Limit": "50",
            "Page": "1"
        }
    }`
    let res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: bodyContent
    })

    let data = await res.json();

    if (data.data.length) {
        let Addresses = data.data[0].Addresses;
        let selectionAddresses = document.querySelector('#founded-addresses-list');

        selectionAddresses.innerHTML = '';

        let startOption = document.createElement('option');
        startOption.cheched = true;
        startOption.disabled = true;
        startOption.innerText = 'Список н.п.';
        selectionAddresses.append(startOption)

        Addresses.forEach(address => {
            let option = document.createElement('option');
            option.value = address.Present;
            option.innerText = address.Present;
            option.dataset.ref = address.Ref;

            selectionAddresses.append(option)
        })

        // Check if there's only one option and trigger the change event
        if (selectionAddresses.options.length === 2) { // 2 because the disabled option is also counted
            selectionAddresses.dispatchEvent(new Event('change'));
        }
    }
}

async function onSelectAddress(e) {
    let value = e.target.value;
    let ref = e.target.selectedOptions[0].dataset.ref;
    document.querySelector('#address').value = value;
    document.querySelector('.founded-address').innerHTML = value;
    document.querySelector('.selected-warehouse').innerHTML = '';

    let WarehousesData = await getWarehouses(ref);


    if (WarehousesData.data.length) {
        let selectionWarehouses = document.querySelector('#founded-warehouses-list');
        const Warehouses = WarehousesData.data;

        selectionWarehouses.innerHTML = '';

        let startOption = document.createElement('option');
        startOption.cheched = true;
        startOption.disabled = true;
        startOption.innerText = 'Список відділень';
        selectionWarehouses.append(startOption)

        Warehouses.forEach(warehouse => {
            let option = document.createElement('option');
            option.value = warehouse.Description;
            option.innerText = warehouse.Description;
            option.dataset.address = value;

            selectionWarehouses.append(option)
        })

        // Check if there's only one option and trigger the change event
        if (selectionWarehouses.options.length === 2) { // 2 because the disabled option is also counted
            selectionWarehouses.dispatchEvent(new Event('change'));
        }
    }
}

function onSelectWarehouse(e) {
    let value = e.target.value;

    document.querySelector('.selected-warehouse').innerHTML = value;
}

async function getWarehouses(ref) {
    let url = 'https://api.novaposhta.ua/v2.0/json/';
    let body = `{
        "apiKey": "d319a5abcd8c2ad50f99f22d9c5f43fe",
        "modelName": "Address",
        "calledMethod": "getWarehouses",
        "methodProperties": {
            "SettlementRef": "${ref}",
            "Limit": "50"
        }
    }`;

    let res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body
    });

    let data = await res.json();

    return data;
}

function validateFields() {
    let name = document.querySelector("#name");
    let surname = document.querySelector("#surname");
    let phone = document.querySelector("#phone");
    let address = document.querySelector(".founded-address");
    let addressSelect = document.querySelector("#founded-addresses-list");
    let warehouse = document.querySelector(".selected-warehouse");
    let warehouseSelect = document.querySelector("#founded-warehouses-list");

    let inputs = [
        name,
        surname,
        phone,
    ];

    let select = [
        {
            div: address,
            select: addressSelect
        },
        {
            div: warehouse,
            select: warehouseSelect
        }
    ];

    let isValid = true;

    inputs.forEach(function (input) {
        if (!input.value) {
            input.classList.add("invalid");
            isValid = false;
        } else {
            input.classList.remove("invalid");
        }
    });

    select.forEach(function (obj) {
        if (!obj.div.innerText) {
            obj.select.classList.add("invalid");
            isValid = false;
        } else {
            obj.select.classList.remove("invalid");
        }
    });

    return isValid;

}

function clearFields() {
    let name = document.querySelector("#name");
    let surname = document.querySelector("#surname");
    let phone = document.querySelector("#phone");
    let email = document.querySelector("#email");
    let comment = document.querySelector("#comment");
    let address = document.querySelector("#address");

    let addressDiv = document.querySelector(".founded-address");
    let warehouseDiv = document.querySelector(".selected-warehouse");

    let addressSelect = document.querySelector("#founded-addresses-list");
    let warehouseSelect = document.querySelector("#founded-warehouses-list");

    let inputs = [
        name,
        surname,
        phone,
        email,
        comment,
        address,
        address
    ];

    let divs = [
        addressDiv,
        warehouseDiv
    ];

    let selects = [
        addressSelect,
        warehouseSelect
    ];

    inputs.forEach(function (input) {
        input.value = '';
    });

    divs.forEach(function (div) {
        div.innerHTML = '';
    }
    );

    selects.forEach(function (select) {
        select.innerHTML = '';
    }
    );

    document.querySelector(".my-orders").innerHTML = '';

    PRODUCTS.forEach(function (prod) {
        prod.ordered = 0;
    });

    updateCartIndicator();

    document.querySelector(".orders").innerHTML = '';

    document.querySelector(".sum").textContent = '0';

    document.querySelector(".descont-sum").textContent = '0';

    document.querySelector(".total-sum").textContent = '0';

    document.querySelector(".cart-indicator").textContent = '0';

    document.querySelectorAll(".product-cart-indicator").forEach(function (element) {
        element.style.display = 'none';
    }
    );

}

function onScrollDown(params) {
    let scroll = window.scrollY;
    let header = document.querySelector(".header");
    let headerHeight = header.offsetHeight;
    let headerBottom = headerHeight + header.offsetTop;

    console.log(scroll);

    let fixedCart = document.querySelector(".fixed-cart");

    if (scroll > headerBottom) {
        fixedCart.classList.remove("hidden");
    } else {
        fixedCart.classList.add("hidden");
    }
}