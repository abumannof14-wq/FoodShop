import Product from "../../../components/section/Product";
import { All } from "../../../data/vegetables";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }) {
  const resolvedParams = await params;
  
  const product = All.find((item) => String(item.id) === String(resolvedParams.id));

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Product product={product} />
    </main>
  );
}