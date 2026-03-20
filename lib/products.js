import productsData from '../data/products.json';

export function getAllProducts() {
  return productsData;
}

export function getProductById(id) {
  return productsData.find(p => p.id === id);
}

export function getProductsByCategory(category) {
  if (category === 'all') return productsData;
  return productsData.filter(p => p.cat.includes(category));
}

export function getAllCategories() {
  const categories = new Set();
  productsData.forEach(p => {
    if (Array.isArray(p.cat)) {
      p.cat.forEach(c => categories.add(c));
    } else if (p.cat) {
      categories.add(p.cat);
    }
  });
  return Array.from(categories).sort();
}

export function getAllBrands() {
  const brands = new Set();
  productsData.forEach(p => {
    if (p.brand) {
      let b = p.brand;
      if (b === "HOUN×–") b = "HOUNÖ";
      brands.add(b);
    }
  });
  return Array.from(brands).sort();
}
