const products_card = [
  {
    id: '1',
    image: 'img/section-best-selling-products/white_armchair.png',
    alt: 'Minimalist interior with a white armchair featuring a soft cushion, positioned next to a tripod floor lamp with a white lampshade and a decorative plant in a white pot on the floor. The walls and floor are also in white.',
    title: 'Lord armchair, Miedel Home',
    price: '120,00USD',
  },
  {
    id: '2',
    image: 'img/section-best-selling-products/green_armchair.png',
    alt: 'Minimalist interior with a green chair placed next to a small black side table holding a glass vase with green leaves. Three hanging light bulbs are suspended above, and the background features a white wall and floor.',
    title: 'Ultimate Greenchair, XODO',
    price: '90,00USD',
  },
  {
    id: '3',
    image: 'img/section-best-selling-products/pink_armchair.png',
    alt: 'Minimalist interior with a pink armchair featuring wooden legs, positioned next to a small round gold side table holding a small orange candle. A cluster of round pendant lights hangs above, with a white wall and floor in the background.',
    title: 'Valetta armchair, ZIX studio',
    price: '310,00USD',
  },
];

function renderProductsCard(products_card) {
  let productsHtml = '';
  for (const product of products_card) {
    productsHtml += `    
        <article class="product-card">
            <div class="product-card__image">
                <a href="#">
                    <img src="${product.image}" alt="${product.alt}"/>
                </a>
            </div>
            <a style="text-decoration: none " href="#">
            <h3 class="product-card__title">${product.title}</h3></a>
            <p class="product-card__price">${product.price}</p>
            <button class="product-card__button" type="button">ORDER NOW</button>
        </article>`;
  }
  document.querySelector('.products__list').innerHTML = productsHtml;
}

renderProductsCard(products_card);
