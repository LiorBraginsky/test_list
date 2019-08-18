const calculateSale = (sale_price, regular_price) => {
  const result = Math.ceil(((regular_price - sale_price) / sale_price) * 100);
  return result;
}

export default calculateSale;