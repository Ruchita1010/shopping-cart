import items from '../data/data.json';

export function getItemPriceById(id) {
  const item = items.find((item) => item.id === id);
  return item ? item.price : 0;
}
