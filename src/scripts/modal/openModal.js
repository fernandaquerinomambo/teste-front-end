// Modal para visualizar produto
$('.ID_discountShelfItemSpy').on('click', (e) => {
  let productName = $(e.target).data('productname');
  let productBrand = $(e.target).data('productbrand');
  let productSearch = env.allProducts.filter((value) => {
    if (
      value.productName === productName &&
      value.productBrand === productBrand
    )
      return true;
  });

  env.modal.productView.productSelected = productSearch[0];
  $('#productViewContainer').html(inject_productView());
  $('#productViewModal').show().css('display', 'flex');
  injectCarousel__productView();
});

$('#productViewModalClose').on('click', () => {
  $('#productViewModal').hide();
});
