import { getProductById, getAllProducts } from "@/lib/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import EnquireButton from "@/components/EnquireButton";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.brand} ${product.title} | SS BIO SOLUTIONS`,
    description: product.desc.substring(0, 160),
  };
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const p = getProductById(id);

  if (!p) notFound();

  return (
    <main>
      <section className="pd-hero-section">
        <div className="container">
          <div className="pd-breadcrumb">
            <Link href="/">Home</Link> / <Link href="/products">Products</Link> / <strong>{p.model}</strong>
          </div>

          <div className="pd-grid">
            {/* Left Column: Sticky Image */}
            <div style={{ position: 'relative' }}>
              <div className="pd-image-sticky">
                <img src={p.img} alt={p.title} className="pd-main-img" />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="pd-content">
              <span className="pd-brand-pill">{p.brand}</span>
              <h1 className="pd-title-main">{p.title}</h1>
              <p className="pd-desc-main">{p.desc}</p>

              {/* Specifications */}
              {p.specs && Object.keys(p.specs).length > 0 && (
                <div style={{ marginBottom: '4rem' }}>
                  <h3 className="pd-section-title">Technical Specifications</h3>
                  <div className="pd-specs-grid">
                    {Object.entries(p.specs).map(([k, v]) => (
                      <div key={k} className="pd-spec-card">
                        <div className="pd-spec-label">{k.replace(/_/g, ' ')}</div>
                        <div className="pd-spec-value">{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              {p.features && p.features.length > 0 && (
                <div style={{ marginBottom: '4rem' }}>
                  <h3 className="pd-section-title">Key Features</h3>
                  <ul className="pd-features-list">
                    {p.features.map((f, i) => (
                      <li key={i} className="pd-feature-item">
                        <div className="pd-feature-icon">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Premium CTA Box */}
              <div className="pd-cta-box">
                <h3 className="pd-cta-title">Interested in this product?</h3>
                <p className="pd-cta-desc">Speak with our Hyderabad experts for a personalized quote, technical guidance, and delivery information.</p>
                <EnquireButton product={p} premium={true} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Variants Table Section */}
      {p.variants && p.variants.length > 0 && (
        <section className="pd-variants-section">
          <div className="container">
            <h2 className="pd-variants-title">Available Models & Variants</h2>
            <div className="pd-table-wrapper">
              <table className="pd-table">
                <thead>
                  <tr>
                    {p.variants[0].map((h, i) => <th key={i}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {p.variants.slice(1).map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => <td key={j}>{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
