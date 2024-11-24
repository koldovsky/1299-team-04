const products = [
  {
    id: '1',
    className: 'Chairs',
    ourName: 'Fusion armchair, LEXX',
    ourImg: 'img/section-our-fave-finds/armchairs/fusion-yellow-chair.png',
    ourAlt: 'Yellow chair on metal legs',
    ourPrice: '320.00',
  },
  {
    id: '2',
    className: 'Chairs',
    ourName: 'Aurora armchair, MDS',
    ourImg: 'img/section-our-fave-finds/armchairs/jeanine-gray-chair.png',
    ourAlt: 'Beige tufted armchair with wooden legs and curved armrests',
    ourPrice: '210.00',
  },
  {
    id: '3',
    className: 'Chairs',
    ourName: 'Cloud armchair, DIX',
    ourImg: 'img/section-our-fave-finds/armchairs/cloud-tiffany-chair.png',
    ourAlt: 'Tiffany soft chair with wooden legs and armrests',
    ourPrice: '150.00',
  },
  {
    id: '4',
    className: 'Chairs',
    ourName: 'Jeanine armchair, KUKO',
    ourImg: 'img/section-our-fave-finds/armchairs/jeanine-gray-chair.png',
    ourAlt: 'Light gray soft chair with wooden legs and armrests',
    ourPrice: '210.00',
  },
  {
    id: '5',
    className: 'lamps',
    ourName: '3-piece Minimal, ARM',
    ourImg: 'img/section-our-fave-finds/lamps/white-lamps.png',
    ourAlt: 'Three exquisite white lamps',
    ourPrice: '110.00',
  },
  {
    id: '6',
    className: 'lamps',
    ourName: 'Red Drops, KUKO',
    ourImg: 'img/section-our-fave-finds/lamps/red-lamps.png',
    ourAlt: 'Two red lamps in the form of drops',
    ourPrice: '210.00',
  },
  {
    id: '7',
    className: 'lamps',
    ourName: 'Delar, Uni Studio',
    ourImg: 'img/section-our-fave-finds/lamps/decor-lamps.png',
    ourAlt: 'Two lamps decorated in gold',
    ourPrice: '350.00',
  },
  {
    id: '8',
    className: 'lamps',
    ourName: 'Bubbles, Udion',
    ourImg: 'img/section-our-fave-finds/lamps/gold-lamps.png',
    ourAlt: 'Three decorative light bulbs in the form of golden beads',
    ourPrice: '410.00',
  },
  {
    id: '9',
    className: 'Tables',
    ourName: 'Upi table, Landstrom',
    ourImg: 'img/section-our-fave-finds/tables/white-table.png',
    ourAlt: 'A white table with a green vase on it',
    ourPrice: '90.00',
  },
  {
    id: '10',
    className: 'Tables',
    ourName: 'Monica table, Orro',
    ourImg: 'img/section-our-fave-finds/tables/gold-table.png',
    ourAlt: 'A gold metal table on gold metal legs on which a jug is placed',
    ourPrice: '110.00',
  },
  {
    id: '11',
    className: 'Tables',
    ourName: 'Snitch cabinet, ARM',
    ourImg: 'img/section-our-fave-finds/tables/wood-table.png',
    ourAlt: 'A wooden table with a vase on it',
    ourPrice: '100.00',
  },
  {
    id: '12',
    className: 'Tables',
    ourName: 'Hugo table, KUKO studio',
    ourImg: 'img/section-our-fave-finds/tables/gray-table.png',
    ourAlt: 'A dark gray metal table on a round base made of many metal rods',
    ourPrice: '99.00',
  },
];

function displayProducts(className) {
  const outputDiv = document.getElementById('output');

  const filteredProducts = products.filter((product) => product.className === className);

  outputDiv.innerHTML = filteredProducts.length
    ? filteredProducts.map((product) =>
        `<div>
          <img src="${product.ourImg}" alt="${product.ourAlt}">
          <h3>${product.ourName}</h3>
          <p>Ціна: $${product.ourPrice}</p>
        </div>`
      ).join("")
    : `<p>Немає товарів у класі ${className}</p>`;
}

document.getElementById("classChairs").addEventListener("click", () => displayProducts("Chairs"));
document.getElementById("classLamps").addEventListener("click", () => displayProducts("Lamps"));
document.getElementById("classTables").addEventListener("click", () => displayProducts("Tables"));