$(document).ready(() => {
  $('#productViewContainer').html(inject_productView());
});

// Alterar imagem de visualização
$(document).on('click', '.ID_productviewCarouselImage', (e) => {
  let imgSRC = $(e.target).attr('src');
  $('#productViewImageSelected').attr({ src: imgSRC });
});

function inject_productView() {
  let productValue = env.modal.productView.productSelected;

  let localCaroucelImages = '';
  productValue.productImages.forEach((value) => {
    localCaroucelImages += `
    <div class="productview__carousel__image__container">
      <img class="productview__carousel__image ID_productviewCarouselImage" src="${value}"></img>
    </div>
    `;
  });

  let result = `
    <div class="productview__maininfo__container">

      <!-- ###### Carrocel de imagens ##### -->

      <div class="productview__images__container">
        <div class="productview__image__selected__container">
          <img id="productViewImageSelected" class="productview__image__selected" src="${
            productValue.productImages[0]
          }"></img>
        </div>
        <div class="productview__image__alert">Imagens meramente ilustrativas</div>
        <div
          class="owl-productview owl-carousel owl-theme productview__carousel__container"
        >
        ${localCaroucelImages}
        </div>
      </div>

      <!-- ###### Informações principais do produto ##### -->

      <div class="productview__info__container">
        <div class="productview__info__brand">${productValue.productBrand}</div>
        <div class="productview__info__name">${productValue.productName}</div>
        <div class="productview__info__stars">
          ${injectHTML.repeat(
            `
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="svg--star__ratings" d="M5.5 0.941162L7.12288 4.20747L10.7308 4.74157L8.12587 7.29436L8.73282 10.8908L5.5 9.20216L2.26718 10.8908L2.87413 7.29436L0.269189 4.74157L3.87713 4.20747L5.5 0.941162Z" fill="#FDC14D"/>
            </svg>
            `,
            5
          )}(1)
        </div>
        <div class="productview__info__type">
        ${
          productValue.productIsOrganic
            ? `<div class="productview__info__type__item">
                <div class="productview__info__type__icon">
                  <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="svg--producttype__organic" d="M4.24115 15.7469L4.24183 12.3097C6.62678 12.2132 7.99948 10.66 8 8.00787C8.00043 5.82684 6.07642 2.38996 4.92198 0.523248C4.71284 0.200502 4.37815 0.00864327 4.00158 0C3.63338 7.9026e-05 3.28188 0.192085 3.08097 0.523644C1.93416 2.38212 0.000427399 5.82856 1.50795e-07 7.99214C-0.000523573 10.6443 1.36318 12.2056 3.75647 12.2923L3.75579 15.7471C3.75576 15.8866 3.86453 16 3.99842 16C4.13231 16 4.24112 15.8865 4.24115 15.7469ZM4.23386 10.2944L6.04176 8.4096C6.13383 8.31361 6.13386 8.15658 6.04183 8.06063C5.9498 7.96469 5.79917 7.96472 5.7071 8.0607L4.24236 9.58774L4.24279 7.44161L5.50665 6.124C5.59872 6.02801 5.59875 5.87098 5.50672 5.77503C5.41468 5.67909 5.26406 5.67912 5.17199 5.7751L4.2513 6.73495L4.25171 4.64117C4.25174 4.50158 4.14297 4.38819 4.00908 4.38822C3.87519 4.38825 3.76638 4.50169 3.76635 4.64127L3.76594 6.73506L2.84563 5.7756C2.7536 5.67966 2.60297 5.67969 2.5109 5.77567C2.41883 5.87166 2.4188 6.02869 2.51083 6.12464L3.77417 7.44171L3.77375 9.57039L2.30961 8.04398C2.21758 7.94804 2.06696 7.94807 1.97489 8.04406C1.88282 8.14004 1.88279 8.29707 1.97482 8.39302L3.77361 10.2683L3.77331 11.7863C2.44278 11.7255 0.501479 11.0978 0.502096 7.97458C0.485756 5.96804 2.36089 2.61758 3.48259 0.802729C3.59142 0.619499 3.78391 0.506045 3.99311 0.514724C4.20231 0.523403 4.39476 0.619327 4.50351 0.80251C5.6245 2.61688 7.50668 5.95781 7.50628 7.99925C7.50566 11.1225 5.55575 11.7423 4.23356 11.8124L4.23386 10.2944Z" fill="#3B6626"/>
                  </svg>
                </div>
                <div class="productview__info__type__text">Orgânico</div>
              </div>`
            : ''
        }
        </div>
        <div class="productview__info__price__container">
          ${
            productValue.productSalePrice
              ? `<div class="productview__info__saleprice">R$ ${productValue.productSalePrice}</div>`
              : ''
          }
          <div class="productview__info__price">R$ ${
            productValue.productPrice
          }</div>
        </div>
        ${
          productValue.productHasStock
            ? `<button data-productname="${productValue.productName}" class="productview__info__buy ID_productViewInfoBuy">ADICIONAR</button>`
            : '<button class="productview__info__buy no--stock--button">PRODUTO INDISPONÍVEL</button>'
        }
      </div>
    </div>

    <!-- ###### Descrição do produto ##### -->

    <div class="productview__description__container">
        <div class="productview__description__title">Descrição do produto</div>
        <div class="productview__description__content">${
          productValue.productDescription
        }</div>
    </div>
  `;

  return result;
}
