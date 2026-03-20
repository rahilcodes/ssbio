"use client";
import { useState } from "react";
import Link from "next/link";

export default function ProductCard({ product }) {
  const { id, title, brand, img, model } = product;
  const [imgError, setImgError] = useState(false);
  
  return (
    <div className="card">
      <div className="card-brand-badge">{brand}</div>
      <Link href={`/products/${id}`} className="card-img-wrap">
        {!imgError ? (
          <img src={img} alt={title} className="card-img" onError={() => setImgError(true)} />
        ) : (
          <div className="img-placeholder" style={{ color: '#ccc', textAlign: 'center' }}>
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '10px' }}>🍱</span>
            <small style={{ fontSize: '0.6rem', color: '#999' }}>IMAGE COMING SOON</small>
          </div>
        )}
      </Link>
      <div className="card-body">
        <h3 className="card-title" style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', height: '2.5rem', overflow: 'hidden' }}>{title}</h3>
        <p className="card-model" style={{ color: '#888', fontSize: '0.75rem', marginBottom: '1.5rem' }}>{model}</p>
        
        <Link href={`/products/${id}`} className="enquire-now-btn">
          Enquire Now
        </Link>
        <Link href={`/products/${id}`} className="details-btn">
          View Details →
        </Link>
      </div>
    </div>
  );
}
