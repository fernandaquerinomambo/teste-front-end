let env = {
  allProducts: controller.productsArray.addImageKey(
    controller.productsArray.commaInMoney(productsArray.products)
  ),
  modal: {
    productView: {
      productSelected: {
        productName: '',
        productBrand: '',
        productPrice: '',
        productSalePrice: '',
        productIsMamboPlus: '',
        productIsOrganic: '',
        productHasStock: '',
        productDescription: '',
        productImages: [
          'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg',
        ],
      },
    },
  },
};
