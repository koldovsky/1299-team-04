const products_card = [
  {
    id: '1',
    image: 'img/section-best-selling-products/white_armchair.png',
    alt: 'Minimalist interior with a white armchair featuring a soft cushion, positioned next to a tripod floor lamp with a white lampshade and a decorative plant in a white pot on the floor. The walls and floor are also in white.',
    title: 'Lord armchair, Miedel Home',
    price: '120,00USD',
    url: 'index.section-best-selling-products-details.partial.html',
  },
  {
    id: '2',
    image: 'img/section-best-selling-products/green_armchair.png',
    alt: 'Minimalist interior with a green chair placed next to a small black side table holding a glass vase with green leaves. Three hanging light bulbs are suspended above, and the background features a white wall and floor.',
    title: 'Ultimate Greenchair, XODO',
    price: '90,00USD',
    url: 'index.section-best-selling-products-details.partial_2.html',
  },
  {
    id: '3',
    image: 'img/section-best-selling-products/pink_armchair.png',
    alt: 'Minimalist interior with a pink armchair featuring wooden legs, positioned next to a small round gold side table holding a small orange candle. A cluster of round pendant lights hangs above, with a white wall and floor in the background.',
    title: 'Valetta armchair, ZIX studio',
    price: '310,00USD',
    url: 'index.section-best-selling-products-details.partial_3.html',
  },
];

function renderProductsCard(products_card) {
  let productsHtml = '';
  for (const product of products_card) {
    productsHtml += `    
        <article class="product-card">
            <div class="product-card__image">
                <a href="${product.url}">
                    <img src="${product.image}" alt="${product.alt}"/>
                </a>
            </div>
            <a style="text-decoration: none " href="${product.url}">
            <h3 class="product-card__title">${product.title}</h3></a>
            <p class="product-card__price">${product.price}</p>
            <button class="product-card__button" type="button">ORDER NOW</button>
        </article>`;
  }
  document.querySelector('.products__list').innerHTML = productsHtml;
}

renderProductsCard(products_card);

///RENDER PAGE FOr DETAILs

const products_details = [
  {
    id: '1',
    title: 'Lord armchair, Miedel Home (LAMH)',
    code: 'product code 14',
    price: '120,00USD',
    description_1: 'Do you want to feel comfortable and hide from the bad weather? This armchair isperfect for relaxing with a book or a cup of tea. It also provides extra backsupport.',
    description_2: 'Dimensions and materials:28" x 38"Faux suede, wood',
    image: 'img/section-best-selling-products/white_armchair.png',
    alt: 'Minimalist interior with a white armchair featuring a soft cushion, positioned next to a tripod floor lamp with a white lampshade and a decorative plant in a white pot on the floor. The walls and floor are also in white.',
  },
  {
    id: '2',
    title: 'Ultimate Green chair, XODO (UGCX)',
    code: 'Product code 15',
    price: '90,00USD',
    description_1: 'Simple yet functional, this chair is perfect for your minimalistic dining room. It will become a bright spot in your interior design and will awaken your appetite.',
    description_2: 'Dimensions and materials:21" x 32"Plastic',
    image: 'img/section-best-selling-products/green_armchair.png',
    alt: 'Minimalist interior with a green chair placed next to a small black side table holding a glass vase with green leaves. Three hanging light bulbs are suspended above, and the background features a white wall and floor.',
  },
  {
    id: '3',
    title: 'Valetta armchair, ZIX studio (VAZS)',
    code: 'Product code 17',
    price: '310,00USD',
    description_1: 'An armchair in which you will feel what real comfort is. The original design will suit both the bedroom and the living room, or even a home office. Available only in pink.',
    description_2: 'Dimensions and materials:28" x 35"Faux suede, steel',
    image: 'img/section-best-selling-products/pink_armchair.png',
    alt: 'Minimalist interior with a pink armchair featuring wooden legs, positioned next to a small round gold side table holding a small orange candle. A cluster of round pendant lights hangs above, with a white wall and floor in the background.',
  },
];    

/// Доброго вечора доби, мені соромно що я не встиг за допомогою js дабавити сторінки, на жаль,
/// при всій мотивації вчити і практикуватись, просто брак часу.
/// Дякую за розуміння, після здачі я хочу все до кінця доробити бо справді це дуже цікаво.
/// Дякую вам що викладали для нас весь матеріал та пояснювали, ви дуже крутий)