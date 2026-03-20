import { getAllProducts, getAllCategories, getAllBrands } from "@/lib/products";
import CatalogClient from "@/components/CatalogClient";

export const metadata = {
  title: "Professional Kitchen Equipment Catalogue | SS BIO SOLUTIONS",
  description: "Browse our complete range of Middleby Celfrost and Toastmaster professional kitchen equipment.",
};

export default async function Products() {
  const products = getAllProducts();
  const categories = getAllCategories();
  const brands = getAllBrands();

  return (
    <CatalogClient 
      initialProducts={products} 
      categories={categories} 
      brands={brands} 
    />
  );
}
