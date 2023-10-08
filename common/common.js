// NavBar
const navBarComponenet = () => {
    return `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a class="navbar-brand fw-bold" href="#">Start Bootstrap</a>
                    <ul class="navbar-nav  mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="addProduct.html">Add Product</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Shop
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Delivery</a></li>
                                <li><a class="dropdown-item" href="#">Pricing</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    </div>
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item ">
                            <a class="nav-link d-flex align-items-end rounded " href="login.html">
                                <button class="btn btn-light border border-dark">
                                    Logout
                                </button>
                            </a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item ">
                            <a class="nav-link d-flex align-items-center rounded " href="#">
                                <button class="btn btn-light border border-dark">
                                    <i class="bi bi-cart"></i>
                                    <span class="me-2">Cart</span>
                                    <div id="goodsQty" class="badge bg-warning text-dark rounded-circle">${getTotalGoods()}</div>
                                </button>
                            </a>
                        </li>
                    </ul>
            </div>
        </nav>
    `;
} 

// Footer
const footerComponent = () => {
    return `
    <footer class="fixed-bottom">
    <div class="d-flex flex-end ">
        <div class="col bg-dark text-white">
            <p class="text-center">Copyright &copy; Ahmed Al-Majidi 2023</p>
        </div>
    </div>
</footer>
    `
}
// ====================================================================================

let product1 = {
    productName: 'Laptop Lenovo',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: 1200,
    image: '',
    saled: false
};

let product2 = {
    productName: 'Samsung S22 Ultra',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: 1000,
    image: '',
    saled: true
};

let product3 = {
    productName: 'Headphones',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    price: 100,
    image: '',
    saled: true
};

let products = [product1, product2, product3];

// Calculate Toal Price
function getTotalPrice() {
    let totalPrice = 0;

    let claculateTotalPrice = (item, index) => {
        if (item.saled) {
            totalPrice += item.price;
        }
    };
    products.forEach(claculateTotalPrice);
    return totalPrice;
}

// Calculate Total Goods
function getTotalGoods() {
    let totalGoods = 0;
    let claculateTotalgoods = (item, index) => {
        if (item.saled) {
            totalGoods += 1;
        }
    };
    products.forEach(claculateTotalgoods);
    return totalGoods;
    // document.addEventListener('DOMContentLoaded', () => {
    //     document.getElementById("goodsQty").innerHTML = totalGoods;
    // });
}


function itemSaled() {
    document.getElementById("card-btn").innerHTML= "View Options";
    document.getElementById("sale").classList.add("d-none");
    getTotalGoods();
    // document.getElementById("total-price").innerHTML = getTotalPrice();
}