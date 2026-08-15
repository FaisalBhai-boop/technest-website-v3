import React, { useState, useEffect, useMemo } from "react";
import {
  Search, ShoppingCart, Heart, User, MessageCircle, Sun, Moon,
  ChevronRight, Star, Truck, ShieldCheck, BadgeCheck, Headphones,
  Zap, Clock, ChevronLeft, Plus, Minus, X, Menu, CheckCircle2
} from "lucide-react";

import airpodsCover from "./assets/airpods-cover.jpg";
import airpodsBox from "./assets/airpods-box.jpg";
import airpodsAnc from "./assets/airpods-anc.jpg";
import airpodsBoxFront from "./assets/airpods-box-front.jpg";
import airpodsUnboxed from "./assets/airpods-unboxed.jpg";
import airpodsCaseOpen from "./assets/airpods-case-open.jpg";
import airpodsHero from "./assets/airpods-hero.jpg";
import infinixCharger from "./assets/infinix-charger.jpg";
import technestLogo from "./assets/technest-logo.jpeg";

/* ---------------------------------------------------------
   TECHNEST — SMART TECH, BETTER LIFE
   Design tokens:
   bg        #0D0D0D  (near-black, warmer than pure black)
   surface   #151517  (card base)
   line      #232326  (hairline borders)
   primary   #008CFF  (electric blue)
   accent    #00C8FF  (cyan glow)
   green     #16E37B  (variant / "in stock" accent)
   text      #F5F6F7
   muted     #8A8E96
--------------------------------------------------------- */

const WHATSAPP = "923096125390";
const PHONE_DISPLAY = "0309 6125390";

const CATEGORIES = [
  { name: "AirPods", icon: "🎧" },
  { name: "Earbuds", icon: "🔊" },
  { name: "Headphones", icon: "🎵" },
  { name: "Speakers", icon: "📢" },
  { name: "Smart Watches", icon: "⌚" },
  { name: "Chargers", icon: "⚡" },
  { name: "Data Cables", icon: "🔌" },
  { name: "Power Banks", icon: "🔋" },
  { name: "Mobile Holders", icon: "📱" },
];

const PRODUCTS = [
  {
    id: "anc-airpods",
    title: "TECHNEST AirPods Pro ANC — Active Noise Cancellation",
    category: "AirPods",
    price: 600,
    oldPrice: 1400,
    stock: 13,
    rating: 4.8,
    reviews: 214,
    color: ["Black", "Green"],
    badge: "Flash Sale",
    featured: true,
    image: airpodsHero,
    gallery: [airpodsHero, airpodsCover, airpodsBox, airpodsAnc, airpodsBoxFront, airpodsUnboxed, airpodsCaseOpen],
    description:
      "Premium ANC AirPods engineered for immersive sound and all-day comfort. Active Noise Cancellation blocks outside noise so every call and track feels closer. Touch controls, low-latency Bluetooth 5.3, and a pocket-friendly charging case make these a daily carry — not just an accessory.",
    specs: [
      "Active Noise Cancellation (ANC)",
      "Bluetooth 5.3, stable low-latency connection",
      "Touch control — play, pause, skip, calls",
      "Up to 6 hrs playback, 24 hrs with case",
      "Sweat & splash resistant",
      "Wireless charging case included",
    ],
  },
  {
    id: "buds-x1",
    title: "TECHNEST Buds X1 Wireless Earbuds",
    category: "Earbuds",
    price: 1290,
    oldPrice: 1990,
    stock: 40,
    rating: 4.6,
    reviews: 132,
    color: ["Black", "Green"],
    badge: "Best Seller",
    description: "Compact wireless earbuds with punchy bass and a featherlight fit for all-day wear.",
    specs: ["Bluetooth 5.1", "18 hrs total battery", "IPX4 splash resistant"],
  },
  {
    id: "bt-speaker",
    title: "TECHNEST Boom Mini Bluetooth Speaker",
    category: "Speakers",
    price: 1590,
    oldPrice: 2400,
    stock: 22,
    rating: 4.7,
    reviews: 98,
    color: ["Black"],
    badge: "New",
    description: "Room-filling sound in a pocket-sized speaker. Built for the beach, the balcony, and everywhere between.",
    specs: ["10W driver", "12 hr battery", "Waterproof IPX6"],
  },
  {
    id: "smart-watch",
    title: "TECHNEST Pulse Smart Watch",
    category: "Smart Watches",
    price: 2490,
    oldPrice: 3990,
    stock: 17,
    rating: 4.5,
    reviews: 76,
    color: ["Black", "Green"],
    badge: "Trending",
    description: "Track your day, calls, and fitness on a vivid HD display built to survive real life.",
    specs: ["1.9\" HD display", "7-day battery", "Heart rate + SpO2"],
  },
  {
    id: "fast-charger",
    title: "TECHNEST 33W Fast Charger",
    category: "Chargers",
    price: 890,
    oldPrice: 1290,
    stock: 60,
    rating: 4.9,
    reviews: 301,
    color: ["Black"],
    badge: "Best Seller",
    image: infinixCharger,
    gallery: [infinixCharger],
    description: "Get to 50% in minutes. Compact GaN-style charger with overheat and short-circuit protection.",
    specs: ["33W PD/QC", "Multi-device safe", "Compact travel size"],
  },
  {
    id: "data-cable",
    title: "TECHNEST Braided Data Cable",
    category: "Data Cables",
    price: 350,
    oldPrice: 590,
    stock: 100,
    rating: 4.6,
    reviews: 154,
    color: ["Black", "Green"],
    badge: "New Arrival",
    description: "Reinforced braided cable built to survive daily bends, tangles, and backpacks.",
    specs: ["1.2m length", "Fast charge + data sync", "6000+ bend lifespan"],
  },
];

function formatPKR(n) {
  return "Rs " + n.toLocaleString("en-PK");
}

/* ---------- Countdown ---------- */
function useCountdown(hours = 8) {
  const target = useMemo(() => Date.now() + hours * 3600 * 1000, []);
  const [left, setLeft] = useState(target - Date.now());
  useEffect(() => {
    const t = setInterval(() => setLeft(Math.max(0, target - Date.now())), 1000);
    return () => clearInterval(t);
  }, [target]);
  const h = Math.floor(left / 3600000);
  const m = Math.floor((left % 3600000) / 60000);
  const s = Math.floor((left % 60000) / 1000);
  return { h, m, s };
}

/* ---------- Small UI atoms ---------- */
function Pill({ children }) {
  return (
    <span className="pill">
      {children}
      <style>{`
        .pill{
          display:inline-flex; align-items:center; gap:6px;
          padding:4px 10px; border-radius:999px;
          background:rgba(0,140,255,0.12); color:#4FC3FF;
          font-size:11px; font-weight:600; letter-spacing:.04em; text-transform:uppercase;
          border:1px solid rgba(0,140,255,0.35);
        }
      `}</style>
    </span>
  );
}

function Stars({ rating }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={13}
          fill={i <= Math.round(rating) ? "#00C8FF" : "none"}
          color={i <= Math.round(rating) ? "#00C8FF" : "#3A3A3E"}
        />
      ))}
    </div>
  );
}

/* ---------- Product Card ---------- */
function ProductCard({ p, onOpen, onAddCart, onBuyNow, onWishlist, wished }) {
  const discount = Math.round(100 - (p.price / p.oldPrice) * 100);
  return (
    <div className="pcard" onClick={() => onOpen(p)}>
      <div className="pcard-img">
        <div className={"pcard-badge" + (p.badge === "Flash Sale" ? " gold" : "")}>{p.badge}</div>
        <button
          className="pcard-wish"
          onClick={(e) => { e.stopPropagation(); onWishlist(p.id); }}
          aria-label="Wishlist"
        >
          <Heart size={15} fill={wished ? "#00C8FF" : "none"} color={wished ? "#00C8FF" : "#fff"} />
        </button>
        <div className="pcard-visual">
          {p.image ? (
            <img src={p.image} alt={p.title} className="pcard-photo" />
          ) : (
            p.category === "AirPods" ? "🎧" : p.category === "Earbuds" ? "🎵" : p.category === "Speakers" ? "🔊" : p.category === "Smart Watches" ? "⌚" : p.category === "Chargers" ? "⚡" : "🔌"
          )}
        </div>
      </div>
      <div className="pcard-body">
        <div className="pcard-cat">{p.category}</div>
        <div className="pcard-title">{p.title}</div>
        <div className="pcard-rating">
          <Stars rating={p.rating} />
          <span className="pcard-reviews">({p.reviews})</span>
        </div>
        <div className="pcard-price-row">
          <span className="pcard-price">{formatPKR(p.price)}</span>
          <span className="pcard-old">{formatPKR(p.oldPrice)}</span>
          <span className="pcard-discount">-{discount}%</span>
        </div>
        <button className="pcard-buy" onClick={(e) => { e.stopPropagation(); onBuyNow(p); }}>
          Buy Now
        </button>
        <button className="pcard-add" onClick={(e) => { e.stopPropagation(); onAddCart(p); }}>
          Add to Cart
        </button>
      </div>
      <style>{`
        .pcard{
          background:#151517; border:1px solid #232326; border-radius:18px;
          overflow:hidden; cursor:pointer; transition:transform .25s ease, border-color .25s ease, box-shadow .25s ease;
          display:flex; flex-direction:column;
        }
        .pcard:hover{ transform:translateY(-4px); border-color:rgba(0,200,255,0.4); box-shadow:0 12px 40px rgba(0,140,255,0.15); }
        .pcard-img{ position:relative; aspect-ratio:1/1; background:radial-gradient(circle at 30% 20%, #1c1c1f, #0d0d0d); display:flex; align-items:center; justify-content:center; }
        .pcard-visual{ font-size:56px; filter:drop-shadow(0 8px 20px rgba(0,140,255,0.35)); width:100%; height:100%; display:flex; align-items:center; justify-content:center; }
        .pcard-photo{ width:100%; height:100%; object-fit:cover; filter:none; }
        .pcard-badge{ position:absolute; top:10px; left:10px; background:linear-gradient(135deg,#008CFF,#00C8FF); color:#03131f; font-size:10px; font-weight:800; letter-spacing:.05em; text-transform:uppercase; padding:4px 9px; border-radius:999px; }
        .pcard-badge.gold{ background:linear-gradient(135deg,#FFB020,#FFD166); color:#2b1a00; }
        .pcard-wish{ position:absolute; top:10px; right:10px; background:rgba(0,0,0,0.45); backdrop-filter:blur(6px); border:1px solid rgba(255,255,255,0.15); width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; }
        .pcard-body{ padding:14px 14px 16px; display:flex; flex-direction:column; gap:6px; flex:1; }
        .pcard-cat{ font-size:10px; color:#8A8E96; text-transform:uppercase; letter-spacing:.06em; }
        .pcard-title{ font-size:13.5px; font-weight:600; color:#F5F6F7; line-height:1.35; min-height:36px; }
        .pcard-rating{ display:flex; align-items:center; gap:6px; }
        .pcard-reviews{ font-size:11px; color:#8A8E96; }
        .pcard-price-row{ display:flex; align-items:baseline; gap:8px; margin-top:2px; }
        .pcard-price{ font-size:16px; font-weight:800; color:#00C8FF; }
        .pcard-old{ font-size:12px; color:#5f6167; text-decoration:line-through; }
        .pcard-discount{ font-size:11px; color:#16E37B; font-weight:700; }
        .pcard-add{ margin-top:8px; background:transparent; border:1px solid #2c2c30; color:#F5F6F7; padding:9px; border-radius:10px; font-size:12.5px; font-weight:600; transition:all .2s ease; }
        .pcard-add:hover{ background:#1c1c1f; }
        .pcard-buy{ margin-top:8px; background:linear-gradient(135deg,#008CFF,#00C8FF); border:none; color:#031018; padding:9px; border-radius:10px; font-size:12.5px; font-weight:800; }
      `}</style>
    </div>
  );
}

/* ---------- Product Detail Drawer ---------- */
function ProductDrawer({ product, onClose, onAddCart, onBuyNow }) {
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(product?.color?.[0]);
  const [activeImg, setActiveImg] = useState(0);
  useEffect(() => { setActiveImg(0); setQty(1); setColor(product?.color?.[0]); }, [product]);
  if (!product) return null;
  const discount = Math.round(100 - (product.price / product.oldPrice) * 100);
  const gallery = product.gallery || [];

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer" onClick={(e) => e.stopPropagation()}>
        <button className="drawer-close" onClick={onClose}><X size={18} /></button>
        <div className="drawer-grid">
          <div className="drawer-img">
            {gallery.length > 0 ? (
              <>
                <img src={gallery[activeImg]} alt={product.title} className="drawer-photo" />
                <div className="drawer-thumbs">
                  {gallery.map((g, i) => (
                    <button key={i} className={"thumb" + (i === activeImg ? " active" : "")} onClick={() => setActiveImg(i)}>
                      <img src={g} alt="" />
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="drawer-visual">🎧</div>
            )}
            <div className="drawer-badge-wrap"><Pill>{product.badge}</Pill></div>
          </div>
          <div className="drawer-info">
            <div className="drawer-cat">{product.category}</div>
            <h2 className="drawer-title">{product.title}</h2>
            <div className="drawer-rating">
              <Stars rating={product.rating} />
              <span>{product.rating} · {product.reviews} reviews</span>
            </div>
            <div className="drawer-price-row">
              <span className="drawer-price">{formatPKR(product.price)}</span>
              <span className="drawer-old">{formatPKR(product.oldPrice)}</span>
              <span className="drawer-discount">-{discount}%</span>
            </div>
            <div className={"drawer-stock " + (product.stock < 15 ? "low" : "")}>
              {product.stock < 15 ? `⚡ Only ${product.stock} left in stock — order soon` : `In stock: ${product.stock}`}
            </div>

            <p className="drawer-desc">{product.description}</p>

            {product.color && (
              <div className="drawer-colors">
                <div className="drawer-label">Color</div>
                <div className="drawer-color-row">
                  {product.color.map((c) => (
                    <button
                      key={c}
                      className={"color-swatch" + (color === c ? " active" : "")}
                      onClick={() => setColor(c)}
                    >
                      <span className={"dot " + c.toLowerCase()} /> {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="drawer-qty-row">
              <div className="drawer-label">Quantity</div>
              <div className="qty-control">
                <button onClick={() => setQty(Math.max(1, qty - 1))}><Minus size={13} /></button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)}><Plus size={13} /></button>
              </div>
            </div>

            <div className="drawer-cta-row">
              <button className="btn-outline" onClick={() => onAddCart(product, qty, color)}>Add to Cart</button>
              <button className="btn-solid" onClick={() => onBuyNow(product, qty, color)}>
                Confirm Order
              </button>
            </div>

            <ul className="drawer-specs">
              {product.specs.map((s) => (
                <li key={s}><CheckCircle2 size={14} color="#16E37B" /> {s}</li>
              ))}
            </ul>

            <div className="drawer-trust">
              <div><Truck size={14} /> Fast delivery across Pakistan</div>
              <div><ShieldCheck size={14} /> 7-day checking warranty</div>
              <div><BadgeCheck size={14} /> Quality checked before dispatch</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .drawer-overlay{ position:fixed; inset:0; background:rgba(0,0,0,0.7); backdrop-filter:blur(4px); z-index:100; display:flex; align-items:flex-end; justify-content:center; }
        @media(min-width:768px){ .drawer-overlay{ align-items:center; } }
        .drawer{ background:#131315; width:100%; max-width:720px; max-height:92vh; overflow-y:auto; border-radius:20px 20px 0 0; position:relative; border:1px solid #232326; }
        @media(min-width:768px){ .drawer{ border-radius:20px; } }
        .drawer-close{ position:absolute; top:14px; right:14px; z-index:2; background:rgba(255,255,255,0.08); border:1px solid #2c2c30; width:32px; height:32px; border-radius:50%; color:#fff; display:flex; align-items:center; justify-content:center; }
        .drawer-grid{ display:grid; grid-template-columns:1fr; }
        @media(min-width:768px){ .drawer-grid{ grid-template-columns:1fr 1fr; } }
        .drawer-img{ position:relative; background:radial-gradient(circle at 30% 20%,#1c1c1f,#0d0d0d); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:14px; padding:24px 20px; }
        .drawer-photo{ width:100%; max-width:280px; aspect-ratio:1/1; object-fit:cover; border-radius:16px; }
        .drawer-thumbs{ display:flex; gap:8px; flex-wrap:wrap; justify-content:center; }
        .thumb{ width:44px; height:44px; border-radius:8px; overflow:hidden; border:1.5px solid #2c2c30; padding:0; opacity:0.6; }
        .thumb.active{ border-color:#00C8FF; opacity:1; }
        .thumb img{ width:100%; height:100%; object-fit:cover; }
        .drawer-badge-wrap{ position:absolute; top:14px; left:14px; }
        .drawer-visual{ font-size:120px; filter:drop-shadow(0 20px 40px rgba(0,140,255,0.35)); }
        .drawer-info{ padding:22px 20px 28px; display:flex; flex-direction:column; gap:10px; }
        .drawer-cat{ font-size:11px; text-transform:uppercase; letter-spacing:.06em; color:#8A8E96; }
        .drawer-title{ font-size:19px; font-weight:800; line-height:1.3; color:#F5F6F7; margin:0; }
        .drawer-rating{ display:flex; align-items:center; gap:8px; font-size:12px; color:#8A8E96; }
        .drawer-price-row{ display:flex; align-items:baseline; gap:10px; margin-top:4px; }
        .drawer-price{ font-size:24px; font-weight:800; color:#00C8FF; }
        .drawer-old{ font-size:14px; color:#5f6167; text-decoration:line-through; }
        .drawer-discount{ font-size:12px; color:#16E37B; font-weight:700; }
        .drawer-stock{ font-size:12px; color:#8A8E96; }
        .drawer-stock.low{ color:#FF6B6B; font-weight:600; }
        .drawer-desc{ font-size:13px; line-height:1.6; color:#B8BABF; margin:4px 0; }
        .drawer-label{ font-size:11px; text-transform:uppercase; letter-spacing:.05em; color:#8A8E96; margin-bottom:6px; }
        .drawer-color-row{ display:flex; gap:8px; flex-wrap:wrap; }
        .color-swatch{ display:flex; align-items:center; gap:6px; padding:7px 12px; border-radius:10px; border:1px solid #2c2c30; background:transparent; color:#F5F6F7; font-size:12.5px; }
        .color-swatch.active{ border-color:#00C8FF; background:rgba(0,200,255,0.08); }
        .dot{ width:9px; height:9px; border-radius:50%; display:inline-block; }
        .dot.black{ background:#000; border:1px solid #444; }
        .dot.green{ background:#16E37B; }
        .qty-control{ display:flex; align-items:center; gap:14px; border:1px solid #2c2c30; border-radius:10px; padding:7px 14px; width:fit-content; }
        .qty-control button{ color:#fff; }
        .drawer-cta-row{ display:flex; gap:10px; margin-top:6px; }
        .btn-outline{ flex:1; padding:13px; border-radius:12px; border:1px solid #2c2c30; background:transparent; color:#F5F6F7; font-weight:700; font-size:13px; }
        .btn-solid{ flex:1.3; padding:13px; border-radius:12px; border:none; background:linear-gradient(135deg,#008CFF,#00C8FF); color:#031018; font-weight:800; font-size:13px; text-align:center; text-decoration:none; }
        .drawer-specs{ list-style:none; padding:0; margin:8px 0 0; display:flex; flex-direction:column; gap:7px; }
        .drawer-specs li{ display:flex; align-items:center; gap:8px; font-size:12.5px; color:#C7C9CE; }
        .drawer-trust{ display:flex; flex-wrap:wrap; gap:14px; margin-top:10px; padding-top:14px; border-top:1px solid #232326; font-size:11.5px; color:#8A8E96; }
        .drawer-trust div{ display:flex; align-items:center; gap:6px; }
      `}</style>
    </div>
  );
}

/* ---------- Checkout Modal ---------- */
function CheckoutModal({ data, onClose, onConfirm }) {
  const [form, setForm] = useState({ name: "", phone: "", address: "", city: "", notes: "" });
  if (!data) return null;
  const valid = form.name.trim() && form.phone.trim() && form.address.trim() && form.city.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valid) return;
    const itemsText = data.items
      .map((i) => `${i.title} (${i.color}) x${i.qty} = ${formatPKR(i.price * i.qty)}`)
      .join("\n");
    const msg =
      `New Order — TECHNEST\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Address: ${form.address}, ${form.city}\n` +
      (form.notes ? `Notes: ${form.notes}\n` : "") +
      `\nItems:\n${itemsText}\n\n` +
      `Total: ${formatPKR(data.total)}\n` +
      `Payment: Cash on Delivery / EasyPaisa / JazzCash`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
    onConfirm();
  };

  return (
    <div className="checkout-overlay" onClick={onClose}>
      <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
        <button className="checkout-close" onClick={onClose}><X size={18} /></button>
        <h3>Complete Your Order</h3>
        <p className="checkout-sub">Apni details bharein — order WhatsApp par confirm ho jayega.</p>

        <div className="checkout-summary">
          {data.items.map((i, idx) => (
            <div key={idx} className="checkout-summary-row">
              <span>{i.title} <em>({i.color})</em> x{i.qty}</span>
              <span>{formatPKR(i.price * i.qty)}</span>
            </div>
          ))}
          <div className="checkout-summary-total">
            <span>Total</span>
            <span>{formatPKR(data.total)}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="checkout-form">
          <label>
            Full Name
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Ahmed Khan" required />
          </label>
          <label>
            Phone Number
            <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="03XX XXXXXXX" required />
          </label>
          <label>
            Delivery Address
            <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="House #, Street, Area" required />
          </label>
          <label>
            City
            <input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="e.g. Lahore" required />
          </label>
          <label>
            Order Notes (optional)
            <input value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Any instructions" />
          </label>

          <button type="submit" className="checkout-submit" disabled={!valid}>
            Confirm Order via WhatsApp
          </button>
          <p className="checkout-note">Cash on Delivery · EasyPaisa · JazzCash (Mohammed Faisal)</p>
        </form>
      </div>
      <style>{`
        .checkout-overlay{ position:fixed; inset:0; background:rgba(0,0,0,0.75); backdrop-filter:blur(4px); z-index:150; display:flex; align-items:flex-end; justify-content:center; }
        @media(min-width:768px){ .checkout-overlay{ align-items:center; } }
        .checkout-modal{ background:#131315; width:100%; max-width:460px; max-height:92vh; overflow-y:auto; border-radius:20px 20px 0 0; border:1px solid #232326; padding:24px 20px 28px; position:relative; }
        @media(min-width:768px){ .checkout-modal{ border-radius:20px; } }
        .checkout-close{ position:absolute; top:14px; right:14px; background:rgba(255,255,255,0.08); border:1px solid #2c2c30; width:32px; height:32px; border-radius:50%; color:#fff; display:flex; align-items:center; justify-content:center; }
        .checkout-modal h3{ font-size:18px; font-weight:800; margin:0 0 4px; color:#F5F6F7; }
        .checkout-sub{ font-size:12.5px; color:#8A8E96; margin:0 0 16px; }
        .checkout-summary{ background:#0D0D0D; border:1px solid #232326; border-radius:12px; padding:12px 14px; margin-bottom:18px; }
        .checkout-summary-row{ display:flex; justify-content:space-between; font-size:12px; color:#C7C9CE; padding:5px 0; }
        .checkout-summary-row em{ color:#8A8E96; font-style:normal; font-size:11px; }
        .checkout-summary-total{ display:flex; justify-content:space-between; font-size:14px; font-weight:800; color:#00C8FF; border-top:1px solid #232326; margin-top:6px; padding-top:8px; }
        .checkout-form{ display:flex; flex-direction:column; gap:12px; }
        .checkout-form label{ display:flex; flex-direction:column; gap:6px; font-size:11.5px; color:#8A8E96; text-transform:uppercase; letter-spacing:.04em; }
        .checkout-form input{ background:#0D0D0D; border:1px solid #2c2c30; border-radius:10px; padding:11px 13px; color:#F5F6F7; font-size:13.5px; outline:none; text-transform:none; letter-spacing:normal; }
        .checkout-form input:focus{ border-color:#00C8FF; }
        .checkout-submit{ margin-top:6px; background:linear-gradient(135deg,#008CFF,#00C8FF); border:none; color:#031018; font-weight:800; padding:14px; border-radius:12px; font-size:13.5px; }
        .checkout-submit:disabled{ opacity:0.45; }
        .checkout-note{ text-align:center; font-size:10.5px; color:#8A8E96; margin:10px 0 0; }
      `}</style>
    </div>
  );
}

/* ---------- Cart Drawer ---------- */
function CartDrawer({ open, items, onClose, onRemove, onCheckout }) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  return (
    <div className={"cart-overlay" + (open ? " open" : "")} onClick={onClose}>
      <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-head">
          <h3>Your Cart</h3>
          <button onClick={onClose}><X size={18} /></button>
        </div>
        {items.length === 0 ? (
          <div className="cart-empty">Cart khali hai — kuch add karein.</div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((i, idx) => (
                <div className="cart-item" key={idx}>
                  <div className="cart-item-visual">🎧</div>
                  <div className="cart-item-info">
                    <div className="cart-item-title">{i.title}</div>
                    <div className="cart-item-meta">{i.color} · Qty {i.qty}</div>
                    <div className="cart-item-price">{formatPKR(i.price * i.qty)}</div>
                  </div>
                  <button className="cart-item-remove" onClick={() => onRemove(idx)}><X size={14} /></button>
                </div>
              ))}
            </div>
            <div className="cart-total-row">
              <span>Total</span>
              <span>{formatPKR(total)}</span>
            </div>
            <button className="cart-checkout" onClick={onCheckout}>
              Proceed to Checkout
            </button>
            <div className="cart-pay-note">Cash on Delivery · EasyPaisa · JazzCash (Mohammed Faisal)</div>
          </>
        )}
      </div>
      <style>{`
        .cart-overlay{ position:fixed; inset:0; background:rgba(0,0,0,0); pointer-events:none; z-index:110; transition:background .25s ease; }
        .cart-overlay.open{ background:rgba(0,0,0,0.65); pointer-events:auto; }
        .cart-panel{ position:absolute; top:0; right:0; height:100%; width:100%; max-width:380px; background:#131315; border-left:1px solid #232326; transform:translateX(100%); transition:transform .3s ease; display:flex; flex-direction:column; padding:20px; }
        .cart-overlay.open .cart-panel{ transform:translateX(0); }
        .cart-head{ display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; }
        .cart-head h3{ margin:0; font-size:16px; color:#F5F6F7; }
        .cart-head button{ color:#8A8E96; }
        .cart-empty{ color:#8A8E96; font-size:13px; text-align:center; margin-top:40px; }
        .cart-items{ flex:1; overflow-y:auto; display:flex; flex-direction:column; gap:12px; }
        .cart-item{ display:flex; gap:10px; align-items:center; border-bottom:1px solid #202023; padding-bottom:12px; }
        .cart-item-visual{ font-size:28px; width:44px; height:44px; background:#1c1c1f; border-radius:10px; display:flex; align-items:center; justify-content:center; }
        .cart-item-info{ flex:1; }
        .cart-item-title{ font-size:12.5px; color:#F5F6F7; font-weight:600; line-height:1.3; }
        .cart-item-meta{ font-size:11px; color:#8A8E96; margin-top:2px; }
        .cart-item-price{ font-size:12.5px; color:#00C8FF; font-weight:700; margin-top:2px; }
        .cart-item-remove{ color:#8A8E96; }
        .cart-total-row{ display:flex; justify-content:space-between; padding:14px 0; border-top:1px solid #232326; font-weight:800; color:#F5F6F7; font-size:15px; }
        .cart-checkout{ background:linear-gradient(135deg,#008CFF,#00C8FF); color:#031018; text-align:center; padding:13px; border-radius:12px; font-weight:800; font-size:13.5px; text-decoration:none; }
        .cart-pay-note{ text-align:center; font-size:10.5px; color:#8A8E96; margin-top:8px; }
      `}</style>
    </div>
  );
}

/* ---------- Section Header ---------- */
function SectionHead({ eyebrow, title, sub }) {
  return (
    <div className="sec-head">
      <Pill>{eyebrow}</Pill>
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
      <style>{`
        .sec-head{ margin-bottom:20px; }
        .sec-head h2{ font-size:22px; font-weight:800; color:#F5F6F7; margin:8px 0 4px; letter-spacing:-0.01em; }
        .sec-head p{ font-size:13px; color:#8A8E96; margin:0; }
      `}</style>
    </div>
  );
}

/* ---------- MAIN APP ---------- */
export default function TechnestApp() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [checkout, setCheckout] = useState(null); // { items, total, fromCart }
  const { h, m, s } = useCountdown(8);

  const addToCart = (p, qty = 1, color = p.color?.[0]) => {
    setCart((c) => [...c, { title: p.title, price: p.price, qty, color }]);
    setToast(`${p.title} added to cart`);
    setTimeout(() => setToast(null), 2200);
    setActiveProduct(null);
  };
  const removeFromCart = (idx) => setCart((c) => c.filter((_, i) => i !== idx));
  const toggleWishlist = (id) =>
    setWishlist((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id]));

  const buyNowSingle = (p, qty = 1, color = p.color?.[0]) => {
    setCheckout({ items: [{ title: p.title, price: p.price, qty, color }], total: p.price * qty, fromCart: false });
    setActiveProduct(null);
  };
  const checkoutFromCart = () => {
    if (cart.length === 0) return;
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    setCheckout({ items: cart, total, fromCart: true });
    setCartOpen(false);
  };
  const confirmCheckout = () => {
    if (checkout?.fromCart) setCart([]);
    setCheckout(null);
    setToast("Order sent via WhatsApp!");
    setTimeout(() => setToast(null), 2500);
  };

  const flashSale = PRODUCTS.slice(0, 4);
  const bestSellers = PRODUCTS.filter((p) => p.badge === "Best Seller");
  const featured = PRODUCTS.find((p) => p.featured);

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-inner">
          <button className="nav-burger" onClick={() => setMenuOpen(true)}><Menu size={20} /></button>
          <div className="logo">
            <img src={technestLogo} alt="TECHNEST" className="logo-img" />
          </div>
          <div className="nav-search">
            <Search size={15} color="#8A8E96" />
            <input placeholder="Search AirPods, chargers, watches..." />
          </div>
          <div className="nav-actions">
            <a className="nav-icon" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" title="WhatsApp">
              <MessageCircle size={19} />
            </a>
            <button className="nav-icon"><User size={19} /></button>
            <button className="nav-icon" onClick={() => setToast(wishlist.length ? `${wishlist.length} item(s) in wishlist` : "Wishlist khali hai")}>
              <Heart size={19} />
              {wishlist.length > 0 && <span className="nav-badge">{wishlist.length}</span>}
            </button>
            <button className="nav-icon" onClick={() => setCartOpen(true)}>
              <ShoppingCart size={19} />
              {cart.length > 0 && <span className="nav-badge">{cart.length}</span>}
            </button>
          </div>
        </div>
        <div className="cat-strip">
          {CATEGORIES.map((c) => (
            <span key={c.name} className="cat-chip">{c.icon} {c.name}</span>
          ))}
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <img src={technestLogo} alt="TECHNEST — Innovation, Connectivity, Growth" className="hero-logo-banner" />
        <div className="hero-inner">
          <Pill>New Season Drop</Pill>
          <h1>Smart Tech.<br /><span className="grad">Better Life.</span></h1>
          <p>Premium mobile accessories, quality-checked and delivered across Pakistan — from Lahore, for everyone.</p>
          <div className="hero-cta">
            <a href="#shop" className="btn-solid" style={{ width: "auto", padding: "13px 26px" }}>Shop Now <ChevronRight size={15} /></a>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="btn-outline" style={{ width: "auto", padding: "13px 26px" }}>Chat on WhatsApp</a>
          </div>
        </div>
        <div className="hero-glow" />
      </section>

      {/* FLASH SALE */}
      <section className="section" id="shop">
        <div className="flash-head">
          <SectionHead eyebrow="Limited Time" title="Flash Sale" sub="Grab these before the timer runs out." />
          <div className="countdown">
            <Clock size={14} color="#FFB020" />
            <span>{String(h).padStart(2, "0")}:{String(m).padStart(2, "0")}:{String(s).padStart(2, "0")}</span>
          </div>
        </div>
        <div className="grid">
          {flashSale.map((p) => (
            <ProductCard key={p.id} p={p} onOpen={setActiveProduct} onAddCart={addToCart} onBuyNow={buyNowSingle} onWishlist={toggleWishlist} wished={wishlist.includes(p.id)} />
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCT BANNER */}
      {featured && (
        <section className="section">
          <div className="feature-banner" onClick={() => setActiveProduct(featured)}>
            <div className="feature-visual">
              {featured.image ? <img src={featured.image} alt={featured.title} className="feature-photo" /> : "🎧"}
            </div>
            <div className="feature-copy">
              <Pill>Featured — ANC Series</Pill>
              <h3>{featured.title}</h3>
              <p>{featured.description.slice(0, 110)}...</p>
              <div className="feature-price-row">
                <span className="feature-price">{formatPKR(featured.price)}</span>
                <span className="feature-old">{formatPKR(featured.oldPrice)}</span>
              </div>
              <span className="feature-link">View Product <ChevronRight size={14} /></span>
            </div>
          </div>
        </section>
      )}

      {/* BEST SELLERS */}
      <section className="section">
        <SectionHead eyebrow="Customer Favorites" title="Best Sellers" sub="What Pakistan is buying most this month." />
        <div className="grid">
          {bestSellers.map((p) => (
            <ProductCard key={p.id} p={p} onOpen={setActiveProduct} onAddCart={addToCart} onBuyNow={buyNowSingle} onWishlist={toggleWishlist} wished={wishlist.includes(p.id)} />
          ))}
        </div>
      </section>

      {/* ALL PRODUCTS */}
      <section className="section">
        <SectionHead eyebrow="Full Catalog" title="All Products" />
        <div className="grid">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} p={p} onOpen={setActiveProduct} onAddCart={addToCart} onBuyNow={buyNowSingle} onWishlist={toggleWishlist} wished={wishlist.includes(p.id)} />
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section why">
        <SectionHead eyebrow="Trust" title="Why Choose TECHNEST" />
        <div className="why-grid">
          {[
            { icon: <ShieldCheck size={20} />, t: "7-Day Checking Warranty", d: "Full inspection window on every order." },
            { icon: <BadgeCheck size={20} />, t: "Quality Checked", d: "Every unit tested before it ships." },
            { icon: <Truck size={20} />, t: "Fast Delivery", d: "Nationwide shipping across Pakistan." },
            { icon: <Zap size={20} />, t: "Cash on Delivery", d: "Pay when it arrives at your door." },
            { icon: <Headphones size={20} />, t: "Real Support", d: "Message us anytime on WhatsApp." },
            { icon: <CheckCircle2 size={20} />, t: "Secure Payments", d: "EasyPaisa, JazzCash & COD accepted." },
          ].map((f) => (
            <div className="why-card" key={f.t}>
              <div className="why-icon">{f.icon}</div>
              <div className="why-t">{f.t}</div>
              <div className="why-d">{f.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section">
        <div className="newsletter">
          <h3>Get early access to drops & deals</h3>
          <p>No spam — just new arrivals and flash sale alerts.</p>
          <div className="newsletter-form">
            <input placeholder="Your email address" />
            <button onClick={() => { setToast("Subscribed!"); setTimeout(() => setToast(null), 2000); }}>Subscribe</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <img src={technestLogo} alt="TECHNEST" className="footer-logo" />
            <p className="footer-tag">SMART TECH, BETTER LIFE</p>
            <p className="footer-desc">Premium mobile accessories, based in Lahore, shipping across Pakistan.</p>
          </div>
          <div>
            <div className="footer-h">Quick Links</div>
            <a href="#shop">Shop</a>
            <a href="#shop">Categories</a>
            <a href="#shop">Track Order</a>
            <a href="#shop">FAQ</a>
          </div>
          <div>
            <div className="footer-h">Policies</div>
            <a href="#shop">Shipping Policy</a>
            <a href="#shop">Return & Refund Policy</a>
            <a href="#shop">Privacy Policy</a>
            <a href="#shop">Terms & Conditions</a>
          </div>
          <div>
            <div className="footer-h">Contact</div>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">WhatsApp: {PHONE_DISPLAY}</a>
            <a href={`tel:+${WHATSAPP}`}>Call: {PHONE_DISPLAY}</a>
            <span className="footer-note">EasyPaisa / JazzCash name: Mohammed Faisal</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 TECHNEST. All rights reserved.</span>
          <span>Cash on Delivery · EasyPaisa · JazzCash · Bank Transfer</span>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a className="wa-float" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <MessageCircle size={24} />
      </a>

      {/* DRAWERS */}
      <ProductDrawer product={activeProduct} onClose={() => setActiveProduct(null)} onAddCart={addToCart} onBuyNow={buyNowSingle} />
      <CartDrawer open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onRemove={removeFromCart} onCheckout={checkoutFromCart} />
      <CheckoutModal data={checkout} onClose={() => setCheckout(null)} onConfirm={confirmCheckout} />

      {/* TOAST */}
      {toast && <div className="toast">{toast}</div>}

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <button className="menu-close" onClick={() => setMenuOpen(false)}><X size={18} /></button>
            {CATEGORIES.map((c) => (
              <div key={c.name} className="menu-item">{c.icon} {c.name}</div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        *{ box-sizing:border-box; }
        .app{ background:#0D0D0D; min-height:100vh; font-family:'Segoe UI',system-ui,sans-serif; color:#F5F6F7; padding-bottom:10px; }
        .grad{ background:linear-gradient(135deg,#008CFF,#00C8FF); -webkit-background-clip:text; background-clip:text; color:transparent; }

        /* NAVBAR */
        .navbar{ position:sticky; top:0; z-index:50; background:rgba(13,13,13,0.85); backdrop-filter:blur(14px); border-bottom:1px solid #1c1c1f; }
        .nav-inner{ display:flex; align-items:center; gap:12px; padding:12px 16px; max-width:1200px; margin:0 auto; }
        .nav-burger{ display:flex; color:#F5F6F7; }
        .logo{ display:flex; align-items:center; }
        .logo-img{ height:34px; width:auto; object-fit:contain; }
        .nav-search{ display:none; flex:1; align-items:center; gap:8px; background:#151517; border:1px solid #232326; border-radius:10px; padding:8px 12px; }
        .nav-search input{ background:none; border:none; outline:none; color:#F5F6F7; font-size:12.5px; width:100%; }
        @media(min-width:768px){ .nav-search{ display:flex; } .nav-burger{ display:none; } }
        .nav-actions{ display:flex; align-items:center; gap:6px; margin-left:auto; }
        .nav-icon{ position:relative; width:34px; height:34px; border-radius:9px; display:flex; align-items:center; justify-content:center; color:#F5F6F7; background:transparent; }
        .nav-icon:hover{ background:#1c1c1f; }
        .nav-badge{ position:absolute; top:-3px; right:-3px; background:#00C8FF; color:#031018; font-size:9px; font-weight:800; border-radius:50%; width:15px; height:15px; display:flex; align-items:center; justify-content:center; }
        .cat-strip{ display:flex; gap:8px; overflow-x:auto; padding:0 16px 10px; max-width:1200px; margin:0 auto; scrollbar-width:none; }
        .cat-strip::-webkit-scrollbar{ display:none; }
        .cat-chip{ flex-shrink:0; font-size:11.5px; color:#B8BABF; background:#151517; border:1px solid #232326; padding:6px 12px; border-radius:999px; white-space:nowrap; }

        /* HERO */
        .hero{ position:relative; padding:0 0 40px; text-align:center; overflow:hidden; }
        .hero-logo-banner{ width:100%; display:block; max-height:280px; object-fit:cover; object-position:center 70%; }
        .hero-inner{ max-width:600px; margin:0 auto; position:relative; z-index:2; padding:32px 20px 0; }
        .hero h1{ font-size:38px; font-weight:900; line-height:1.08; letter-spacing:-0.02em; margin:16px 0 12px; }
        .hero p{ font-size:14px; color:#9A9CA3; margin:0 0 24px; }
        .hero-cta{ display:flex; gap:10px; justify-content:center; flex-wrap:wrap; }
        .hero-glow{ position:absolute; top:-100px; left:50%; transform:translateX(-50%); width:500px; height:500px; background:radial-gradient(circle,rgba(0,140,255,0.25),transparent 70%); z-index:1; }

        /* SECTIONS */
        .section{ max-width:1200px; margin:0 auto; padding:36px 16px; }
        .flash-head{ display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:10px; }
        .countdown{ display:flex; align-items:center; gap:6px; background:rgba(255,176,32,0.1); border:1px solid rgba(255,176,32,0.35); padding:8px 14px; border-radius:999px; font-weight:700; font-size:13px; color:#FFB020; font-variant-numeric:tabular-nums; }
        .grid{ display:grid; grid-template-columns:repeat(2,1fr); gap:14px; }
        @media(min-width:640px){ .grid{ grid-template-columns:repeat(3,1fr); } }
        @media(min-width:1000px){ .grid{ grid-template-columns:repeat(4,1fr); } }

        /* FEATURE BANNER */
        .feature-banner{ display:flex; flex-direction:column; gap:20px; background:linear-gradient(135deg,#12161c,#0d1116); border:1px solid #1e2a35; border-radius:22px; padding:28px 24px; cursor:pointer; }
        @media(min-width:768px){ .feature-banner{ flex-direction:row; align-items:center; padding:40px; } }
        .feature-visual{ font-size:100px; text-align:center; filter:drop-shadow(0 20px 40px rgba(0,140,255,0.4)); flex-shrink:0; width:180px; height:180px; display:flex; align-items:center; justify-content:center; margin:0 auto; }
        .feature-photo{ width:100%; height:100%; object-fit:cover; border-radius:18px; filter:none; }
        .feature-copy h3{ font-size:20px; margin:10px 0 8px; font-weight:800; }
        .feature-copy p{ font-size:13px; color:#9A9CA3; margin:0 0 12px; line-height:1.6; }
        .feature-price-row{ display:flex; gap:10px; align-items:baseline; margin-bottom:12px; }
        .feature-price{ font-size:22px; font-weight:800; color:#00C8FF; }
        .feature-old{ font-size:13px; color:#5f6167; text-decoration:line-through; }
        .feature-link{ display:inline-flex; align-items:center; gap:4px; color:#fff; font-weight:700; font-size:13px; }

        /* WHY */
        .why-grid{ display:grid; grid-template-columns:repeat(2,1fr); gap:14px; }
        @media(min-width:768px){ .why-grid{ grid-template-columns:repeat(3,1fr); } }
        .why-card{ background:#131315; border:1px solid #202023; border-radius:16px; padding:18px; }
        .why-icon{ color:#00C8FF; margin-bottom:10px; }
        .why-t{ font-size:13.5px; font-weight:700; margin-bottom:4px; }
        .why-d{ font-size:11.5px; color:#8A8E96; line-height:1.5; }

        /* NEWSLETTER */
        .newsletter{ text-align:center; background:#131315; border:1px solid #202023; border-radius:20px; padding:36px 20px; }
        .newsletter h3{ font-size:19px; margin:0 0 6px; }
        .newsletter p{ font-size:12.5px; color:#8A8E96; margin:0 0 18px; }
        .newsletter-form{ display:flex; gap:8px; max-width:360px; margin:0 auto; flex-wrap:wrap; justify-content:center; }
        .newsletter-form input{ flex:1; min-width:180px; background:#0D0D0D; border:1px solid #2c2c30; border-radius:10px; padding:11px 14px; color:#fff; font-size:12.5px; outline:none; }
        .newsletter-form button{ background:linear-gradient(135deg,#008CFF,#00C8FF); border:none; color:#031018; font-weight:800; padding:11px 18px; border-radius:10px; font-size:12.5px; }

        /* FOOTER */
        .footer{ background:#0a0a0b; border-top:1px solid #1c1c1f; padding:40px 16px 20px; margin-top:20px; }
        .footer-grid{ max-width:1200px; margin:0 auto; display:grid; grid-template-columns:1fr; gap:28px; }
        @media(min-width:768px){ .footer-grid{ grid-template-columns:1.4fr 1fr 1fr 1fr; } }
        .footer-tag{ font-size:9px; letter-spacing:.1em; color:#00C8FF; text-transform:uppercase; margin:4px 0 10px; }        .footer-desc{ font-size:12px; color:#8A8E96; line-height:1.6; max-width:260px; }
        .footer-logo{ height:36px; width:auto; object-fit:contain; margin-bottom:2px; }
        .footer-h{ font-size:11px; text-transform:uppercase; letter-spacing:.06em; color:#8A8E96; margin-bottom:12px; }
        .footer-grid a{ display:block; font-size:12.5px; color:#C7C9CE; text-decoration:none; margin-bottom:9px; }
        .footer-grid a:hover{ color:#00C8FF; }
        .footer-note{ display:block; font-size:11px; color:#5f6167; margin-top:4px; }
        .footer-bottom{ max-width:1200px; margin:24px auto 0; padding-top:18px; border-top:1px solid #1c1c1f; display:flex; flex-direction:column; gap:8px; font-size:11px; color:#5f6167; }
        @media(min-width:768px){ .footer-bottom{ flex-direction:row; justify-content:space-between; } }

        /* WHATSAPP FLOAT */
        .wa-float{ position:fixed; bottom:22px; right:18px; width:54px; height:54px; border-radius:50%; background:#25D366; display:flex; align-items:center; justify-content:center; color:#fff; box-shadow:0 8px 24px rgba(37,211,102,0.4); z-index:90; }

        /* TOAST */
        .toast{ position:fixed; bottom:90px; left:50%; transform:translateX(-50%); background:#151517; border:1px solid #00C8FF; color:#fff; padding:11px 20px; border-radius:999px; font-size:12.5px; z-index:200; box-shadow:0 8px 24px rgba(0,0,0,0.4); }

        /* MOBILE MENU */
        .mobile-menu-overlay{ position:fixed; inset:0; background:rgba(0,0,0,0.6); z-index:120; }
        .mobile-menu{ background:#131315; width:76%; max-width:300px; height:100%; padding:20px; border-right:1px solid #232326; position:relative; }
        .menu-close{ color:#8A8E96; margin-bottom:16px; }
        .menu-item{ padding:12px 4px; font-size:14px; color:#F5F6F7; border-bottom:1px solid #1c1c1f; }

        .btn-outline{ display:inline-flex; align-items:center; justify-content:center; gap:6px; border:1px solid #2c2c30; color:#F5F6F7; border-radius:12px; text-decoration:none; font-weight:700; font-size:13px; }
        .btn-solid{ display:inline-flex; align-items:center; justify-content:center; gap:6px; background:linear-gradient(135deg,#008CFF,#00C8FF); color:#031018; border-radius:12px; text-decoration:none; font-weight:800; font-size:13px; }
      `}</style>
    </div>
  );
}
