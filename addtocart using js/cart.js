let products = [
    {
        id: 1,
        img: "img1.avif",
        title: "Gaming Headphone 1",
        description: "no desription",
        price: "2500",
        off: "11",
    },
    {
        id: 2,
        img: "img2.jpg",
        title: "Gaming Headphone 2",
        description: "no desription",
        price: "3500",
        off: "61",
    },
    {
        id: 3,
        img: "img3.jpg",
        title: "Gaming Headphone 3",
        description: "no desription",
        price: "4500",
        off: "110",
    },
    {
        id: 4,
        img: "img4.avif",
        title: "Gaming Headphone 4",
        description: "no desription",
        price: "6500",
        off: "150",
    },
    {
        id: 5,
        img: "img.png",
        title: "Gaming Headphone 5",
        description: "no desription",
        price: "7500",
        off: "200",
    },
];

const cartItems = JSON.parse(localStorage.getItem("data")) || [];

const cartBody = document.getElementById('cart');

function renderCartItems() {

    cartBody.innerHTML = '';

    cartItems.forEach((cartItems, index) => {
        const product = products.find(product => product.id == cartItems.id);

        if (products) {
            const row = document.createElement('tr');
            const discountPrice = (product.price * (product.off / 100)) / 100;
            row.innerHTML = `
            <td>${index + 1}</td>
            <td><img src="images/${product.img}" alt="" class="img" width="100px"></td>
            <td class="title">${product.title}</td>
            <td><input type="number" value="${cartItems.quantity}" min="1"></td>
            <td>Rs <span>${(product.price - discountPrice).toFixed(2)}</span></td>
            <td><button onclick="removeItem(${index})">Remove</button></td>
          `;
          cartBody.appendChild(row);
        }
    });
} 


function removeItem(index) {
    cartItems.splice(index, 1);

    localStorage.setItem('data', JSON.stringify(cartItems));

    renderCartItems();
    alert("Item removed successfully")

    window.location.reload()
}

renderCartItems();


document.getElementById('quantity').innerHTML = ` (${cartItems.length})`