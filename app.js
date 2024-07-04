const menu = [
  { id: 1, title: "Soup of the day", category: "starters", price: "$5", description: "Freshly made soup with seasonal ingredients", img: "https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 2, title: "Bruschetta", category: "starters", price: "$7", description: "Grilled bread rubbed with garlic and topped with diced tomatoes, fresh basil, and mozzarella", img: "https://www.allrecipes.com/thmb/kt9t899s87rKleitZiaUwWOoNJI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3605381-b506207e5f494e44a7cf5c1bbe488748.jpg" },
  { id: 3, title: "Chicken Parmesan", category: "mains", price: "$12", description: "Crispy chicken topped with tomato sauce and mozzarella, served with spaghetti", img: "https://media.gettyimages.com/id/1358831517/photo/crispy-chicken-parmesan.jpg?s=612x612&w=0&k=20&c=izCK6IforZt1WU1f467NXB-PPR0TAfEw0aoJ6d8imB0=" },
  { id: 4, title: "Steak Frites", category: "mains", price: "$18", description: "Grilled steak served with french fries and salad", img: "https://media.gettyimages.com/id/463889403/photo/rib-eye-steak.jpg?s=612x612&w=0&k=20&c=igQuEqd2hEwHnwIcuMbiUnQRm5T9Mwk1ASFanAq6iOk=" },
  { id: 5, title: "Chocolate Lava Cake", category: "desserts", price: "$8", description: "Warm chocolate cake with a gooey molten chocolate center, served with vanilla ice cream", img: "https://media.istockphoto.com/id/544716244/photo/warm-chocolate-lava-cake-with-molten-center-and-red-currants.webp?b=1&s=170667a&w=0&k=20&c=6NPIcP8XUG4WwbJU-qfLOEP07aU79doAIsqZ8wic478=" },
  { id: 6, title: "Apple Pie", category: "desserts", price: "$6", description: "Classic apple pie with a flaky crust, served with whipped cream", img: "https://plus.unsplash.com/premium_photo-1666353535417-c86616951727?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBwaWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
  { id: 7, title: "Vegan Burger", category: "mains", price: "$10", description: "Plant-based burger served with fries", img: "https://plus.unsplash.com/premium_photo-1664648063589-76b97669bc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnYW4lMjBidXJnZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
  { id: 8, title: "Caesar Salad", category: "starters", price: "$6", description: "Fresh romaine lettuce with Caesar dressing, parmesan, and croutons", img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Vhc2FyJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
  { id: 9, title: "Spaghetti Carbonara", category: "mains", price: "$14", description: "Classic carbonara with pancetta, egg, hard cheese, and pepper", img: "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwYWdoZXR0aSUyMGNhcmJvbmFyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
  { id: 10, title: "Tiramisu", category: "desserts", price: "$7", description: "Italian dessert made of savoiardi dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGlyYW1pc3V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
  { id: 11, title: "Iced Coffee", category: "beverages", price: "$4", description: "Chilled coffee served with ice and cream", img: "https://media.istockphoto.com/id/1034320850/photo/glass-of-iced-coffee-with-splash-of-milk.webp?b=1&s=170667a&w=0&k=20&c=3D2BPGo78PoG7PUmu9Grr_H5OR-S2X4RP2rH74_yuTk=" },
  { id: 12, title: "Mojito", category: "beverages", price: "$6", description: "Refreshing cocktail with lime, mint, sugar, and rum", img: "https://images.unsplash.com/photo-1617196035959-d4e281137481?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9qaXRvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" }
];

function displayMenuItems(items) {
  const menuContainer = document.getElementById('menu-items');
  menuContainer.innerHTML = items.map(item => `
      <div class="menu-item col-12 col-md-6 col-lg-4">
          <div class="card">
              <img src="${item.img}" class="card-img-top" alt="${item.title}">
              <div class="card-body">
                  <h5 class="card-title">${item.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${item.price}</h6>
                  <p class="card-text">${item.description}</p>
                  <p class="card-text"><small class="text-muted">Category: ${item.category}</small></p>
              </div>
          </div>
      </div>
  `).join('');
}

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();
    const filteredMenu = menu.filter(item => item.title.toLowerCase().includes(query));
    displayMenuItems(filteredMenu);
});

const filterButtons = document.querySelectorAll(".filter-button");
filterButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        const category = event.target.dataset.filter;
        const filteredMenu = category === "all" ? menu : menu.filter(item => item.category === category);
        displayMenuItems(filteredMenu);
    });
});

document.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
});
