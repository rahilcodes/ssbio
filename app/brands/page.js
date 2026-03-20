"use client";
import Link from "next/link";

const brands = [
  {
    name: "Toastmaster",
    slug: "Toastmaster",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Toastmaster_logo.svg/320px-Toastmaster_logo.svg.png",
    fallbackLogo: "https://www.toastmaster.in/wp-content/uploads/2021/02/Toastmaster-Logo.png",
    color: "#c8602a",
    bg: "#fef6f0",
    desc: "Toastmaster is a leading manufacturer of commercial bakery and catering equipment trusted by chefs and foodservice operators worldwide. Their product range includes contact grills, waffle makers, conveyor toasters, egg cookers, and specialty catering equipment designed for high-volume professional kitchens.",
    founded: "Founded in the UK",
    category: "Bakery & Catering Equipment",
  },
  {
    name: "Celfrost",
    slug: "Celfrost",
    logo: "https://middlebycelfrost.com/wp-content/uploads/2023/05/celfrost-logo.png",
    fallbackLogo: "https://5.imimg.com/data5/NT/DX/MY-3543918/celfrost-logo.png",
    color: "#1a4f7a",
    bg: "#f0f5fb",
    desc: "Celfrost is India's premier commercial refrigeration brand, part of the Middleby Corporation. Their comprehensive range includes reach-in refrigerators, blast chillers, prep counters, cold rooms, display counters, and ice machines — all engineered to international quality standards for Indian commercial kitchens.",
    founded: "Part of Middleby Corporation",
    category: "Commercial Refrigeration",
  },
  {
    name: "Menumaster",
    slug: "Menumaster",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Menumaster_logo.png/320px-Menumaster_logo.png",
    fallbackLogo: "https://www.menumaster.com/wp-content/uploads/2021/09/menumaster-logo.png",
    color: "#c0392b",
    bg: "#fdf2f2",
    desc: "Menumaster is the world's leading manufacturer of commercial microwave and high-speed oven solutions. Used in quick-service restaurants, convenience stores, and hotels globally, Menumaster ovens deliver speed, consistency, and reliability for high-throughput cooking operations.",
    founded: "A Middleby Company",
    category: "Commercial Microwaves & Speed Ovens",
  },
  {
    name: "Lincat",
    slug: "Lincat",
    logo: "https://www.lincat.co.uk/wp-content/themes/lincat/images/lincat-logo.svg",
    fallbackLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lincat_logo.png/280px-Lincat_logo.png",
    color: "#2c3e50",
    bg: "#f4f6f7",
    desc: "Lincat is the UK's number one manufacturer of commercial catering equipment. Their extensive product range includes induction hobs, fryers, grills, holding equipment, bain-maries, and countertop ovens — celebrated for their build quality, energy efficiency, and reliability in professional kitchen environments.",
    founded: "UK's #1 Catering Equipment Manufacturer",
    category: "Professional Cooking & Holding Equipment",
  },
  {
    name: "Vestfrost",
    slug: "Vestfrost",
    logo: "https://www.vestfrost.com/wp-content/uploads/2020/10/Vestfrost-logo.svg",
    fallbackLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Vestfrost-logo.png/280px-Vestfrost-logo.png",
    color: "#1a6b3a",
    bg: "#f0f8f4",
    desc: "Vestfrost is a Danish manufacturer with over 50 years of expertise in commercial and scientific refrigeration. Their product lines include glass-top and stainless-steel freezers, refrigerators, and specialty units for blood banking, pharmaceutical storage, and bar & beverage applications.",
    founded: "50+ years of Danish engineering",
    category: "Scientific & Commercial Refrigeration",
  },
  {
    name: "IMC",
    slug: "IMC",
    logo: "https://www.imcuk.com/wp-content/themes/imc/assets/img/imc-logo.png",
    fallbackLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/IMC-logo.png/280px-IMC-logo.png",
    color: "#344955",
    bg: "#f4f6f8",
    desc: "IMC (International Market Centres) specialises in commercial kitchen undercounter refrigeration, bar fridges, ice machines, and waste management solutions. Their modular designs are engineered for tight spaces and high-throughput hospitality and foodservice operations.",
    founded: "Commercial Bar & Kitchen Specialists",
    category: "Undercounter Refrigeration & Bar Equipment",
  },
  {
    name: "Icetro",
    slug: "Icetro",
    logo: "https://icetro.com/wp-content/uploads/2020/10/logo.png",
    fallbackLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Icetro-logo.png/280px-Icetro-logo.png",
    color: "#0077b6",
    bg: "#f0f8ff",
    desc: "Icetro is a leading manufacturer of commercial ice machines and soft-serve equipment. Their modular ice makers, flake ice machines, and countertop soft-serve units are trusted by restaurants, hotels, hospitals, and convenience stores for reliable, hygienic, and energy-efficient ice production.",
    founded: "Global Ice Solutions",
    category: "Ice Machines & Soft Serve Equipment",
  },
  {
    name: "La Cimbali",
    slug: "La Cimbali",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/La_Cimbali_logo.svg/320px-La_Cimbali_logo.svg.png",
    fallbackLogo: "https://www.lacimbali.com/wp-content/themes/lacimbali/assets/images/la-cimbali-logo.png",
    color: "#8b0000",
    bg: "#fdf4f4",
    desc: "La Cimbali is Italy's most iconic professional espresso machine brand, with over 100 years of coffee heritage. Their commercial espresso machines, grinders, and coffee systems are the choice of baristas and specialty coffee shops worldwide, delivering unparalleled extraction quality and craftsmanship.",
    founded: "100+ years of Italian coffee heritage",
    category: "Professional Espresso & Coffee Equipment",
  },
  {
    name: "Hamilton Beach",
    slug: "Hamilton Beach",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Hamilton_Beach_Brands_logo.svg/320px-Hamilton_Beach_Brands_logo.svg.png",
    fallbackLogo: "https://www.hamiltonbeachcommercial.com/wp-content/uploads/sites/2/2020/09/HB-Commercial-Logo.png",
    color: "#d4363c",
    bg: "#fdf3f3",
    desc: "Hamilton Beach Commercial is a trusted American manufacturer of blenders, drink mixers, food processors, toasters, and specialty countertop equipment for commercial foodservice. Their commercial-grade products are built for durability and performance in restaurants, bars, cafes, and institutional kitchens.",
    founded: "American Commercial Foodservice Leader",
    category: "Countertop & Beverage Equipment",
  },
  {
    name: "Middleby Kitchen",
    slug: "Midd=Kitchen",
    logo: "https://middleby.com/wp-content/themes/middleby-2020/assets/img/middleby-logo.png",
    fallbackLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Middleby_Logo.png/320px-Middleby_Logo.png",
    color: "#231f20",
    bg: "#f5f5f5",
    desc: "The Middleby Corporation is a global leader in the foodservice equipment industry. Their 'Middleby Kitchen' range represents a collection of the world's most innovative and high-performing brands for commercial cooking, warming, and food preparation.",
    founded: "Global Leader in Foodservice",
    category: "Integrated Kitchen Solutions",
  },
  {
    name: "HOUNO",
    slug: "HOUNO",
    logo: "https://www.houno.com/wp-content/uploads/2020/06/houno-logo.png",
    fallbackLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Houno_logo.png/280px-Houno_logo.png",
    color: "#00539b",
    bg: "#f0f4f8",
    desc: "Hounö is a Danish pioneer in combi oven technology. Their ovens are designed for chefs who demand precision, flexibility, and ease of use. Hounö combi ovens are celebrated for their reliability and ability to deliver consistent results in the most demanding kitchen environments.",
    founded: "Danish Combi Oven Pioneers",
    category: "Combi Oven Solutions",
  },
];

export default function BrandsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Our Partners</span>
          <h1>World-Class Brands</h1>
          <p>We are authorised distributors for some of the most respected commercial kitchen equipment brands in the world, bringing global quality to kitchens across Telangana &amp; AP.</p>
        </div>
      </section>

      {/* Brands grid */}
      <section style={{ background: '#f5f5f7', padding: '6rem 0' }}>
        <div className="container">
          <div className="brands-grid">
            {brands.map((brand) => (
              <div key={brand.name} className="brand-card" style={{ '--brand-color': brand.color, '--brand-bg': brand.bg }}>
                {/* Logo area */}
                <div className="brand-logo-area" style={{ background: brand.bg }}>
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="brand-logo-img"
                    onError={(e) => {
                      if (e.target.src !== brand.fallbackLogo) {
                        e.target.src = brand.fallbackLogo;
                      } else {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="brand-logo-fallback" style={{ display: 'none', color: brand.color }}>
                    {brand.name}
                  </div>
                  <span className="brand-category-chip" style={{ background: brand.color }}>{brand.category}</span>
                </div>

                {/* Body */}
                <div className="brand-body">
                  <div className="brand-founded" style={{ color: brand.color }}>{brand.founded}</div>
                  <h2 className="brand-name">{brand.name}</h2>
                  <p className="brand-desc">{brand.desc}</p>
                  <Link
                    href={`/products?brand=${encodeURIComponent(brand.slug)}`}
                    className="brand-cta"
                    style={{ background: brand.color }}
                  >
                    View {brand.name} Products →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
