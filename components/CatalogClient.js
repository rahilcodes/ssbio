"use client";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useSearch } from "@/context/SearchContext";

// ── Brand color map — exact match to reference screenshot style
const BRAND_COLORS = {
  toastmaster: { bg: '#f5f0e8', badge: '#c8602a', text: '#c8602a' },
  celfrost:    { bg: '#edf2f7', badge: '#1a4f7a', text: '#1a4f7a' },
  default:     { bg: '#f5f5f5', badge: '#333333', text: '#333333' },
};

function getBrandStyle(brandCls) {
  return BRAND_COLORS[(brandCls || '').toLowerCase()] || BRAND_COLORS.default;
}

// ── Product Card — matches the reference screenshot exactly
function ProductCard({ product }) {
  const { id, title, brand, brandCls, img, model, desc, tags } = product;
  const [imgError, setImgError] = useState(false);
  const bStyle = getBrandStyle(brandCls);

  return (
    <div className="pcard">
      {/* ── IMAGE SECTION ── */}
      <Link href={`/products/${id}`} className="pcard-img-link">
        <div className="pcard-img-wrap" style={{ background: bStyle.bg }}>
          <div className="pcard-brand-pill" style={{ background: bStyle.badge }}>
            {(brand || '').toUpperCase()}
          </div>
          <div className="pcard-model-top">{model}</div>

          {!imgError && img ? (
            <img
              src={img}
              alt={title}
              className="pcard-img"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="pcard-placeholder">
              <span className="pcard-placeholder-icon">⚙️</span>
              <small style={{ color: bStyle.text }}>{(title || '').toUpperCase()}</small>
            </div>
          )}
        </div>
      </Link>

      {/* ── BODY SECTION ── */}
      <div className="pcard-body">
        <div className="pcard-info">
          <div className="pcard-brand-name" style={{ color: bStyle.text }}>
            {(brand || '').toUpperCase()}
          </div>

          <Link href={`/products/${id}`}>
            <h3 className="pcard-title">{title}</h3>
          </Link>

          <p className="pcard-desc">{desc}</p>
        </div>

        {tags && tags.length > 0 && (
          <div className="pcard-tags">
            {tags.map((tag, i) => (
              <span key={i} className="pcard-tag">{tag}</span>
            ))}
          </div>
        )}

        <div className="pcard-actions">
          <a
            href={`https://wa.me/919849461986?text=Hi%2C+I%27m+interested+in+${encodeURIComponent(title)}+(${encodeURIComponent(model)})`}
            target="_blank"
            rel="noopener noreferrer"
            className="pcard-enquire"
          >
            Enquire Now
          </a>
          <Link href={`/products/${id}`} className="pcard-details-btn">
            Details →
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── MAIN CATALOGUE PAGE ──
export default function CatalogClient({ initialProducts, categories, brands }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [view, setView] = useState("grid");
  const [initialized, setInitialized] = useState(false);
  const { searchQuery } = useSearch();

  // Read URL params on mount to pre-apply brand/category filters
  useEffect(() => {
    if (initialized) return;
    const params = new URLSearchParams(window.location.search);
    const brandParam = params.get('brand');
    const catParam = params.get('cat');
    if (brandParam) setSelectedBrands([brandParam]);
    if (catParam) setSelectedCategories([catParam]);
    setInitialized(true);
  }, [initialized]);

  const filteredProducts = useMemo(() => {
    let result = initialProducts;
    if (selectedBrands.length > 0) result = result.filter(p => selectedBrands.includes(p.brand));
    if (selectedCategories.length > 0) {
      result = result.filter(p => {
        const pCats = Array.isArray(p.cat) ? p.cat : [p.cat];
        return pCats.some(c => selectedCategories.includes(c));
      });
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        (p.title || '').toLowerCase().includes(q) ||
        (p.model || '').toLowerCase().includes(q) ||
        (p.brand || '').toLowerCase().includes(q)
      );
    }
    return result;
  }, [selectedCategories, selectedBrands, searchQuery, initialProducts]);

  const toggleCategory = cat =>
    setSelectedCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  const toggleBrand = b =>
    setSelectedBrands(prev => prev.includes(b) ? prev.filter(x => x !== b) : [...prev, b]);
  const clearAll = () => { setSelectedCategories([]); setSelectedBrands([]); };
  const activeFilters = selectedCategories.length + selectedBrands.length;

  return (
    <div className="catalog-wrapper">
      {/* Page Hero */}
      <div className="catalog-hero">
        <div className="container">
          <span className="section-tag">Professional Equipment</span>
          <h1>Product Catalogue</h1>
          <p>Browse {initialProducts.length}+ commercial kitchen products from world-class brands.</p>
        </div>
      </div>

      <div className="container catalog-layout">
        {/* ── SIDEBAR ── */}
        <aside className="catalog-sidebar">
          <div className="sidebar-card">
            <div className="sidebar-header">
              <h4>Filters</h4>
              {activeFilters > 0 && (
                <button className="clear-btn" onClick={clearAll}>
                  Clear {activeFilters}
                </button>
              )}
            </div>

            <div className="filter-group">
              <div className="filter-group-label">Category</div>
              <div className="filter-list">
                {categories.map(c => (
                  <label key={c} className={`filter-item ${selectedCategories.includes(c) ? 'active' : ''}`}>
                    <input type="checkbox" checked={selectedCategories.includes(c)} onChange={() => toggleCategory(c)} />
                    <span className="filter-check" />
                    <span className="filter-text">{c}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <div className="filter-group-label">Brand</div>
              <div className="filter-list">
                {brands.map(b => (
                  <label key={b} className={`filter-item ${selectedBrands.includes(b) ? 'active' : ''}`}>
                    <input type="checkbox" checked={selectedBrands.includes(b)} onChange={() => toggleBrand(b)} />
                    <span className="filter-check" />
                    <span className="filter-text">{b}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <div className="catalog-main">
          <div className="catalog-toolbar">
            <div className="catalog-count">
              <strong>{filteredProducts.length}</strong>
              <span> {filteredProducts.length === 1 ? 'product' : 'products'} found</span>
              {activeFilters > 0 && <span className="filter-badge">{activeFilters} filter{activeFilters > 1 ? 's' : ''} active</span>}
            </div>
            <div className="view-toggles">
              <button className={`view-btn ${view === 'grid' ? 'active' : ''}`} onClick={() => setView('grid')} title="Grid view">⊞</button>
              <button className={`view-btn ${view === 'list' ? 'active' : ''}`} onClick={() => setView('list')} title="List view">≡</button>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="catalog-empty">
              <div className="empty-icon">🔍</div>
              <h3>No products found</h3>
              <p>Try adjusting your filters or search query.</p>
              <button className="btn-gold" onClick={clearAll}>Clear All Filters</button>
            </div>
          ) : (
            <div className={view === 'grid' ? 'pcards-grid' : 'pcards-list'}>
              {filteredProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
