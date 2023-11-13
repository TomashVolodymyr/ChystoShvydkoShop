export class OrderedProduct {

    constructor(productData, updateCartIndicator, ) {
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
        };
        this.element = this.createProductElement();
        this.attachEventListeners();

    }

    createProductElement() {
        // Create the main container
        const container = document.createElement('div');
        container.className = 'ordered-product';
        container.setAttribute('data-ordered-product', this.productData.name);

        // Add image container
        const imgContainer = this.createImageContainer(this.productData.image);
        container.appendChild(imgContainer);

        // Add product info
        const productInfo = this.createProductInfo(this.productData, this.svgs);
        container.appendChild(productInfo);

        // Add close button
        const closeButton = this.createCloseButton();
        container.appendChild(closeButton);

        return container;
    }

    createImageContainer(imageSrc) {
        // Create elements and set attributes for the image container
        let imgContainer = document.createElement('div');
        imgContainer.className = 'ordered-product-img';
        
        let img = document.createElement('img');
        img.setAttribute('src', imageSrc);
        img.setAttribute('alt', 'product image');

        // Add the image to the container
        imgContainer.appendChild(img);

        // Return the image container element
        return imgContainer;
    }

    createProductInfo(productData, svgs) {
        // Create elements and fill in the product data
        let productInfo = document.createElement('div');
        productInfo.className = 'product-info';

        let inner = `<h3>${productData.name}</h3>
        <p>Ціна: ${productData.price}гр</p>
        <div class="product-amount">
            <span class="minus">
           ${svgs.minus}
            </span>
            <input type="number" class="order-product-quantity" value="${productData.ordered}">
            <span class="plus">
               ${svgs.plus}
            </span>
        </div>`;

        productInfo.insertAdjacentHTML('beforeend', inner);
        // Return the product info element
        return productInfo;
    }

    createCloseButton() {
        // Create the close button element
        let closeButton = document.createElement('div');
        closeButton.className = 'close-order';
        closeButton.insertAdjacentHTML('beforeend', this.svgs.cross);
        
        // Return the close button element
        return closeButton;
    }

    attachEventListeners() {
        // Attach event listeners for quantity changes and closing the product
        this.element.querySelector('.minus').addEventListener('click', this.onMinusClick.bind(this));
        this.element.querySelector('.plus').addEventListener('click', this.onPlusClick.bind(this));
        this.element.querySelector('.close-order').addEventListener('click', this.onCloseClick.bind(this));
    }

    onMinusClick() {
        // Decrease the quantity by 1     
        if (this.productData.ordered > 1) {
            this.productData.ordered--;
        }
        this.element.querySelector('.order-product-quantity').value = this.productData.ordered;
        this.updateCartIndicator();
    }

    onPlusClick() {
        // Increase the quantity by 1  
        if (this.productData.ordered < 1000) {
            this.productData.ordered++;
        }
        this.element.querySelector('.order-product-quantity').value = this.productData.ordered;
        this.updateCartIndicator();
    }

    onCloseClick() {
        // Remove the product from the cart
        this.element.remove();
        this.productData.ordered = 0;
        this.updateCartIndicator();
    }
}
