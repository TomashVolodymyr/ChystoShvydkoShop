export class Product {
    constructor(productData, updateCartIndicator,) {
        this.productData = productData;
        this.updateCartIndicator = updateCartIndicator;
        this.svgs = {
            minus: `<svg xmlns="http://www.w3.org/2000/svg" height="1em"
            viewBox="0 0 448 512">
            <path
                d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
        </svg>`,
            plus: `<svg xmlns="http://www.w3.org/2000/svg" height="1em"
            viewBox="0 0 448 512">
            <path
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>`,
            cross: `<svg xmlns="http://www.w3.org/2000/svg" height="1em"
            viewBox="0 0 384 512">
            <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>`,
            cart: `<svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512">
            <path
                d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
        </svg>`,
        };
        this.element = this.createProductElement();
        this.attachEventListeners();
    }

    createProductElement() {
        // Create the main container
        const container = document.createElement('article');
        container.className = 'product';
        container.setAttribute('data-product', this.productData.name);

        // Add image container
        const imgContainer = this.createImageContainer(this.productData.images[0]);
        container.appendChild(imgContainer);

        // Add product info
        const productInfo = this.createProductInfo(this.productData);
        container.appendChild(productInfo);

        // Add close button
        const buyButton = this.createBuyButton();
        productInfo.querySelector('.price-and-buy').appendChild(buyButton);

        return container;
    }

    createImageContainer(imageSrc = '#') {
        // Create elements and set attributes for the image container
        let imgContainer = document.createElement('div');
        imgContainer.className = 'product-img';

        let img = document.createElement('img');
        img.setAttribute('src', imageSrc);
        img.setAttribute('alt', 'product image');

        // Add the image to the container
        imgContainer.appendChild(img);

        // Return the image container element
        return imgContainer;
    }

    createProductInfo(productData) {
        // Create elements and fill in the product data
        let productInfo = document.createElement('div');
        productInfo.className = 'product-info';

        let title = document.createElement('h3');
        title.textContent = productData.name;

        let description = document.createElement('p');
        description.textContent = productData.description;

        let price = document.createElement('div');
        price.className = 'price-and-buy';

        let priceSpan = document.createElement('span');
        priceSpan.className = 'product-price';
        priceSpan.textContent = `${productData.price}₴`;

        // Add the elements to the product info container
        price.appendChild(priceSpan);
        productInfo.appendChild(title);
        productInfo.appendChild(description);
        productInfo.appendChild(price);

        // Return the product info element
        return productInfo;
    }

    createBuyButton() {
        // Create elements and set attributes for the buy button
        let buyButton = document.createElement('button');
        buyButton.className = 'buy';
        buyButton.textContent = 'В кошик ';

        buyButton.appendChild(this.createCartIcon());

        // Return the buy button element
        return buyButton;
    }

    attachEventListeners() {
        // Add event listeners for the product and buy button
        this.element.addEventListener('click', this.onProduct.bind(this));

    }

    createCartIcon() {
        // Create elements and set attributes for the cart icon
        let cartIcon = document.createElement('span');
        cartIcon.className = 'product-cart';
        cartIcon.innerHTML = this.svgs.cart;

        let cartIndicator = document.createElement('span');
        cartIndicator.className = 'product-cart-indicator';

        cartIndicator.textContent = this.productData.ordered;
        cartIndicator.style.display = 'none';


        // Add the cart indicator to the cart icon
        cartIcon.appendChild(cartIndicator);

        // Return the cart icon element
        return cartIcon;
    }

    onProduct(e) {
        if (e.target.closest('.buy')) return;

        let grayBox = document.querySelector('.gray-area');
        grayBox.classList.remove('hidden');
        document.body.classList.add('no-scroll');
        document.body.scrollIntoView();

        let productBox = this.createProductBox();
        grayBox.appendChild(productBox);
    }

    createProductBox() {
        // Create elements and set attributes for the product box
        let productBox = document.createElement('div');
        productBox.className = 'product-box';

        let cross = document.createElement('div');
        cross.className = 'close-product-box';
        cross.insertAdjacentHTML('beforeend', this.svgs.cross);
        cross.addEventListener('click', function () {
            document.querySelector('.gray-area').classList.add('hidden');
            document.body.classList.remove('no-scroll');
            productBox.remove();
        });

        productBox.appendChild(cross);

        let imagesColumn = document.createElement('div');
        imagesColumn.classList.add('box-images-column');
        productBox.appendChild(imagesColumn);

        let contentColumn = document.createElement('div');
        contentColumn.classList.add('box-content-column');
        productBox.appendChild(contentColumn);

        let rowOne = document.createElement('div');
        rowOne.classList.add('box-content-row');

        let image = this.createImageContainer(this.productData.images[0]);
        let imageContainer = document.createElement('div');
        imageContainer.classList.add('box-main-mage-container');
        imageContainer.appendChild(image);
        rowOne.appendChild(imageContainer);
        contentColumn.appendChild(rowOne);

        this.productData.images.forEach((imageSrc, index) => {

            let boxColumnImage = this.createBoxColumnImage(imageSrc, image);
            imagesColumn.appendChild(boxColumnImage);

            if (index === 0) {
                boxColumnImage.classList.add('active');
            }
        });

        let textButton = document.createElement('div');
        textButton.classList.add('box-text-button-container');
        rowOne.appendChild(textButton);

        let title = document.createElement('h3');
        title.textContent = this.productData.name;
        textButton.appendChild(title);

        let description = document.createElement('p');
        description.textContent = this.productData.description;
        textButton.appendChild(description);

        let priceSpan = document.createElement('span');
        priceSpan.className = 'price';
        priceSpan.textContent = `${this.productData.price}₴`;
        textButton.appendChild(priceSpan);

        let addContainer = document.createElement('div');
        addContainer.classList.add('add-container');

        let minus = document.createElement('span');
        minus.classList.add('minus');
        minus.innerHTML = this.svgs.minus;
        addContainer.appendChild(minus);

        let quantity = document.createElement('input');
        quantity.classList.add('quantity');
        quantity.setAttribute('type', 'number');
        quantity.setAttribute('value', this.productData.ordered);
        addContainer.appendChild(quantity);

        let plus = document.createElement('span');
        plus.classList.add('plus');
        plus.innerHTML = this.svgs.plus;
        addContainer.appendChild(plus);

        let buyButton = document.createElement('button');
        buyButton.classList.add('buy');
        buyButton.textContent = 'В кошик ';

        let cartIcon = this.createCartIcon();
        buyButton.appendChild(cartIcon);
        addContainer.appendChild(buyButton);

        let cartIndicator = buyButton.querySelector(".product-cart-indicator");
        this.updateProductCartIndicator(cartIndicator);

        minus.addEventListener('click', () => this.onMinusClick(quantity, cartIndicator));
        plus.addEventListener('click', () => this.onPlusClick(quantity, cartIndicator));

        textButton.appendChild(addContainer);

        let rowTwo = document.createElement('div');
        rowTwo.classList.add('box-content-row-2');
        contentColumn.appendChild(rowTwo);

        let tabs = document.createElement('div');
        tabs.classList.add('tabs');
        rowTwo.appendChild(tabs);

        let descriptionBtn = document.createElement('div');
        descriptionBtn.classList.add('tab', 'description');
        descriptionBtn.classList.add('active');
        descriptionBtn.setAttribute('data-tab', 'description');
        descriptionBtn.innerHTML = 'Опис';
        descriptionBtn.addEventListener('click', this.onTabClick);

        let commentsBtn = document.createElement('div');
        commentsBtn.classList.add('tab', 'comments');
        commentsBtn.setAttribute('data-tab', 'comments');
        commentsBtn.innerHTML = 'Відгуки';
        commentsBtn.addEventListener('click', this.onTabClick);

        let characteristicsBtn = document.createElement('div');
        characteristicsBtn.classList.add('tab', 'characteristics');
        characteristicsBtn.setAttribute('data-tab', 'characteristics');
        characteristicsBtn.innerHTML = 'Характеристика';
        characteristicsBtn.addEventListener('click', this.onTabClick);

        tabs.appendChild(descriptionBtn);
        tabs.appendChild(commentsBtn);
        tabs.appendChild(characteristicsBtn);

        let tabContent = document.createElement('div');
        tabContent.classList.add('tab-content');
        rowTwo.appendChild(tabContent);

        let descriptionContent = document.createElement('div');
        descriptionContent.classList.add('tab-content-item', 'description');
        descriptionContent.classList.add('active');
        descriptionContent.innerText = this.productData.details;
        tabContent.appendChild(descriptionContent);

        let commentsContent = document.createElement('div');
        commentsContent.classList.add('tab-content-item', 'comments');
        commentsContent.innerHTML = 'Відгуки';
        tabContent.appendChild(commentsContent);
        
        let characteristicsContent = document.createElement('div');
        characteristicsContent.classList.add('tab-content-item', 'characteristics');
        characteristicsContent.innerText = this.productData.characteristics;
        tabContent.appendChild(characteristicsContent);



     



        return productBox;
    }

    createBoxColumnImage(imageSrc, bigImage) {
        let shell = document.createElement('div');
        shell.className = 'box-column-image';

        // Create elements and set attributes for the box column image
        let boxColumnImage = document.createElement('img');
        boxColumnImage.setAttribute('src', imageSrc);
        boxColumnImage.setAttribute('alt', 'product image');

        // Add the box column image to the shell
        shell.appendChild(boxColumnImage);

        // Add event listener for the box column image
        shell.addEventListener('click', function () {
            let activeImage = bigImage.querySelector('img');
            activeImage.setAttribute('src', imageSrc);

            let activeBoxColumnImage = document.querySelector('.box-column-image.active');
            activeBoxColumnImage.classList.remove('active');

            shell.classList.add('active');
        });

        // Return the box column image element
        return shell;
    }

    onMinusClick(quantity, cartIndicator) {
        // Decrease the quantity by 1     
        if (this.productData.ordered > 0) {
            this.productData.ordered--;
        }
        quantity.value = this.productData.ordered;


        this.updateCartIndicator();
        this.updateProductCartIndicator(cartIndicator);
        this.updateProductCartIndicator();
    }

    onPlusClick(quantity, cartIndicator) {
        // Increase the quantity by 1  
        if (this.productData.ordered < 1000) {
            this.productData.ordered++;
        }
        quantity.value = this.productData.ordered;

        this.updateCartIndicator();
        this.updateProductCartIndicator(cartIndicator);
        this.updateProductCartIndicator();
    }

    updateProductCartIndicator(cartIndicatorElem) {
        let productElement = document.querySelector(`[data-product="${this.productData.name}"]`);

        let cartIndicator = cartIndicatorElem || productElement.querySelector(".product-cart-indicator");
        cartIndicator.textContent = this.productData.ordered;

        if (this.productData.ordered > 0) {
            cartIndicator.style.display = '';
        } else {
            cartIndicator.style.display = 'none';
        }
    }

    onTabClick(e) {
        let target = e.target.closest(".tab");

        if (!target) return;

        let activeTab = document.querySelector(".tab.active");
        activeTab.classList.remove("active");

        let activeContent = document.querySelector(".tab-content-item.active");
        activeContent.classList.remove("active");

        target.classList.add("active");

        let content = document.querySelector(`.tab-content-item.${target.dataset.tab}`);
        content.classList.add("active");
    }
}