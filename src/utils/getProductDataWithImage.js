import productsData from '../data/data.json';

const products = productsData.map((productData) => {
  const { imageName } = productData;
  return {
    ...productData,
    image: new URL(`../assets/shoes/${imageName}.jpg`, import.meta.url).href,
  };
});

export default products;
