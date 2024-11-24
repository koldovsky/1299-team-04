const products = [
  {
    id: '1',
    category: 'Chairs',
    name: 'Fusion armchair, LEXX',
    image: 'img/section-our-fave-finds/armchairs/fusion-yellow-chair.png',
    description: 'Yellow chair on metal legs',
    price: 320.00,
  },
  {
    id: '2',
    category: 'Chairs',
    name: 'Aurora armchair, MDS',
    image: 'img/section-our-fave-finds/armchairs/aurora-beige-chair.png',
    description: 'Beige tufted armchair with wooden legs and curved armrests',
    price: 210.00,
  },
  {
    id: '3',
    category: 'Chairs',
    name: 'Cloud armchair, DIX',
    image: 'img/section-our-fave-finds/armchairs/cloud-tiffany-chair.png',
    description: 'Tiffany soft chair with wooden legs and armrests',
    price: 150.00,
  },
  {
    id: '4',
    category: 'Chairs',
    name: 'Jeanine armchair, KUKO',
    image: 'img/section-our-fave-finds/armchairs/jeanine-gray-chair.png',
    description: 'Light gray soft chair with wooden legs and armrests',
    price: 210.00,
  },
  {
    id: '5',
    category: 'Lamps',
    name: '3-piece Minimal, ARM',
    image: 'img/section-our-fave-finds/lamps/white-lamps.png',
    description: 'Three exquisite white lamps',
    price: 110.00,
  },
  {
    id: '6',
    category: 'Lamps',
    name: 'Red Drops, KUKO',
    image: 'img/section-our-fave-finds/lamps/red-lamps.png',
    description: 'Two red lamps in the form of drops',
    price: 210.00,
  },
  {
    id: '7',
    category: 'Lamps',
    name: 'Delar, Uni Studio',
    image: 'img/section-our-fave-finds/lamps/decor-lamps.png',
    description: 'Two lamps decorated in gold',
    price: 350.00,
  },
  {
    id: '8',
    category: 'Lamps',
    name: 'Bubbles, Udion',
    image: 'img/section-our-fave-finds/lamps/gold-lamps.png',
    description: 'Three decorative light bulbs in the form of golden beads',
    price: 410.00,
  },
  {
    id: '9',
    category: 'Tables',
    name: 'Upi table, Landstrom',
    image: 'img/section-our-fave-finds/tables/white-table.png',
    description: 'A white table with a green vase on it',
    price: 90.00,
  },
  {
    id: '10',
    category: 'Tables',
    name: 'Monica table, Orro',
    image: 'img/section-our-fave-finds/tables/gold-table.png',
    description: 'A gold metal table on gold metal legs on which a jug is placed',
    price: 110.00,
  },
  {
    id: '11',
    category: 'Tables',
    name: 'Snitch cabinet, ARM',
    image: 'img/section-our-fave-finds/tables/wood-table.png',
    description: 'A wooden table with a vase on it',
    price: 100.00,
  },
  {
    id: '12',
    category: 'Tables',
    name: 'Hugo table, KUKO studio',
    image: 'img/section-our-fave-finds/tables/gray-table.png',
    description: 'A dark gray metal table on a round base made of many metal rods',
    price: 99.00,
  },
];

function setActiveButton(chairsBtn) {
  const buttons = document.querySelectorAll('.our-finds__button');
  buttons.forEach((button) => button.classList.remove('active'));

  const button = document.getElementById(chairsBtn);
  if (button) {
    button.classList.add('active');
  } else {
    console.error(`Button with id "${chairsBtn}" not found`);
  }
}

function displayProducts(category) {
  let productsHtml = '';
  const filteredProducts = products.filter((product) => product.category === category);

  for (const product of filteredProducts) {
    productsHtml += `
      <div class="our-finds__product-card our-finds__product-card--${product.category.toLowerCase()}">
        <div class="our-finds__product-image">
          <a href="#"><img src="${product.image}" alt="${product.name} - ${product.description}" /></a>
        </div>
        <div class="our-finds__name-div">
          <h3><a href="#" class="our-finds__name">${product.name}</a></h3>
        </div>
        <div class="our-finds__price-div">
          <p class="our-finds__price">${product.price.toFixed(2)} <span class="our-finds__currency">USD</span></p>
        </div>
        <div class="our-finds__order-div">
          <span class="order-button">Order Now</span>
        </div>
      </div>`;
  }

  const productsContainer = document.querySelector('.our-finds__products');
  if (productsContainer) {
    productsContainer.innerHTML = productsHtml;
  } else {
    console.error('Container with class .our-finds__products not found.');
  }
}

function addButtonEvent(buttonId, category) {
  const button = document.getElementById(buttonId);
  if (button) {
    button.addEventListener('click', function () {
      setActiveButton(buttonId);
      displayProducts(category);
    });
  } else {
    console.error(`Button with id "${buttonId}" not found`);
  }
}

addButtonEvent('chairsBtn', 'Chairs');
addButtonEvent('lampsBtn', 'Lamps');
addButtonEvent('tablesBtn', 'Tables');

window.addEventListener('load', function () {
  setActiveButton('chairsBtn');
  displayProducts('Chairs');
});