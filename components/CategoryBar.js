"use client";
import { useState } from "react";

export default function CategoryBar({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="filter-section">
      <div className="filter-group">
        <div className="filter-row">
          <span className="filter-label">Category</span>
          <div className="cp-list">
            <button 
              className={`cp ${activeCategory === 'all' ? 'on' : ''}`}
              onClick={() => onCategoryChange('all')}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button 
                key={cat}
                className={`cp ${activeCategory === cat ? 'on' : ''}`}
                onClick={() => onCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
