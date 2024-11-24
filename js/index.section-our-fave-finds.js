const products = [
  {
    id: '1',
    name: 'Fusion armchair, LEXX',
    image: 'img/section-our-fave-finds/armchairs/fusion-yellow-chair.png',
    description: 'Yellow chair on metal legs',
    price: '320.00',
  },
  {
    id: '2',
    name: 'Aurora armchair, MDS',
    image: 'img/section-our-fave-finds/armchairs/jeanine-gray-chair.png',
    description: 'Beige tufted armchair with wooden legs and curved armrests',
    price: '210.00',
  },
  {
    id: '3',
    name: 'Cloud armchair, DIX',
    image: 'img/section-our-fave-finds/armchairs/cloud-tiffany-chair.png',
    description: 'Tiffany soft chair with wooden legs and armrests',
    price: '150.00',
  },
  {
    id: '4',
    name: 'Jeanine armchair, KUKO',
    image: 'img/section-our-fave-finds/armchairs/jeanine-gray-chair.png',
    description: 'Light gray soft chair with wooden legs and armrests',
    price: '210.00',
  },
  {
    id: '5',
    name: '3-piece Minimal, ARM',
    image: 'img/section-our-fave-finds/lamps/white-lamps.png',
    description: 'Three exquisite white lamps',
    price: '110.00',
  },
  {
    id: '6',
    name: 'Red Drops, KUKO',
    image: 'img/section-our-fave-finds/lamps/red-lamps.png',
    description: 'Two red lamps in the form of drops',
    price: '210.00',
  },
  {
    id: '7',
    name: 'Delar, Uni Studio',
    image: 'img/section-our-fave-finds/lamps/decor-lamps.png',
    description: 'Two lamps decorated in gold',
    price: '350.00',
  },
  {
    id: '8',
    name: 'Bubbles, Udion',
    image: 'img/section-our-fave-finds/lamps/gold-lamps.png',
    description: 'Three decorative light bulbs in the form of golden beads',
    price: '410.00',
  },
  {
    id: '9',
    name: 'Upi table, Landstrom',
    image: 'img/section-our-fave-finds/tables/white-table.png',
    description: 'A white table with a green vase on it',
    price: '90.00',
  },
  {
    id: '10',
    name: 'Monica table, Orro',
    image: 'img/section-our-fave-finds/tables/gold-table.png',
    description: 'A gold metal table on gold metal legs on which a jug is placed',
    price: '110.00',
  },
  {
    id: '11',
    name: 'Snitch cabinet, ARM',
    image: 'img/section-our-fave-finds/tables/wood-table.png',
    description: 'A wooden table with a vase on it',
    price: '100.00',
  },
  {
    id: '12',
    name: 'Hugo table, KUKO studio',
    image: 'img/section-our-fave-finds/tables/gray-table.png',
    description: 'A dark gray metal table on a round base made of many metal rods',
    price: '99.00',
  },
];

function displayProducts(products) {
  let productsHtml = '';
  for (const product of products) {
    productsHtml += `
      <div class="our-finds__product-card our-finds__product--armchairs">
        <div class="our-finds__product-image">
          <a href="#"><img src="${product.image}" alt="${product.description}" /></a>
        </div>
        <div class="our-finds__name-div">
          <h3><a href="#" class="our-finds__name">${product.name}</a></h3>
        </div>
        <div class="our-finds__price-div">
          <p class="our-finds__price">${product.price} <span class="our-finds__currency">USD</span></p>
        </div>
        <div class="our-finds__order-div">
          <span class="order-button">Order Now</span>
        </div>
      </div>`;
  }
  document.querySelector('.our-finds__products').innerHTML = productsHtml;
}

displayProducts(products);
