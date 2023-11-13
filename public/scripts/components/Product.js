export class Product {
    constructor(productData, updateCartIndicator,) {
        this.productData = productData;
        this.updateCartIndicator = updateCartIndicator;
        this.element = this.createProductElement();
        this.attachEventListeners();
    }

    createProductElement() {
        // Create the main container
        const container = document.createElement('article');
        container.className = 'product';
        container.setAttribute('data-product', this.productData.name);

        // Add image container
        const imgContainer = this.createImageContainer(this.productData.image);
        container.appendChild(imgContainer);

        // Add product info
        const productInfo = this.createProductInfo(this.productData);
        container.appendChild(productInfo);

        // Add close button
        const buyButton = this.createBuyButton(this.productData);
        container.appendChild(buyButton);

        return container;
    }

    createImageContainer(imageSrc) {
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

        let inner = `<h3>${productData.name}</h3>
        <p>${productData.description}</p>
        <span>Ціна: ${productData.price}гр</span>`;

        productInfo.insertAdjacentHTML('beforeend', inner);
        // Return the product info element
        return productInfo;
    }

    createBuyButton() {
        // Create elements and set attributes for the buy button
        let buyButton = document.createElement('button');
        buyButton.className = 'buy';
        buyButton.textContent = 'Купити';

        // Return the buy button element
        return buyButton;
    }

    attachEventListeners() {
    }
}