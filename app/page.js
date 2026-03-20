import { getAllProducts, getAllBrands } from "@/lib/products";
import HomeClient from "@/components/HomeClient";

export default function Home() {
  const products = getAllProducts();
  const brands = getAllBrands();
  
  // Calculate top categories by product count
  const catCounts = {};
  products.forEach(p => {
    if (p.cat) catCounts[p.cat] = (catCounts[p.cat] || 0) + 1;
  });
  
  // Sort descending by count
  const topCategories = Object.entries(catCounts)
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);

  return (
    <HomeClient initialProducts={products} categories={topCategories} brands={brands} />
  );
}
