$(document).ready(() => {
  $('.ID_discountshelfCarouselItemBuy, .ID_productViewInfoBuy').on(
    'click',
    (e) => {
      let productName = $(e.target).data('productname');
      inject_successfulPruchase(productName);

      $('#successfulPruchaseContainer').slideDown(() => {
        $('#successfulPruchaseContainer').delay(1000).slideUp(); 
     });
    }
  );
});

function inject_successfulPruchase(productSelected) {
  $('#successfulPruchaseContainer').html(() => {
    let result = `
      <div class="successfulpruchase__item">
        <div class="successfulpruchase__icon">
          <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="svg--ok__icon" d="M1 5.13793L6.98344 11L17.1905 1" stroke="white" stroke-width="1.66667" stroke-linecap="round"/>
          </svg>
        </div>
        <div>
          <div class="successfulpruchase__name">
            ${productSelected}
          </div>
          <div class="successfulpruchase__message">
            Adicionado com Sucesso!
          </div>
        </div>
      </div>
    `;

    return result;
  });
}
