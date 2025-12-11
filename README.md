# Carbo

A full‑stack marketplace application that enables customers to view, compare, order and track both digital and physical products. Built as part of a team challenge focused on designing an end‑to‑end commerce system inspired by leaders like Amazon, Blinkit, Airbnb, Swiggy and CarbonMark.

## 🚀 Overview

**Carbo** is designed as a modern marketplace platform aimed at delivering seamless product discovery, ordering, and tracking. Customers can:

* Browse products across multiple categories.
* Compare prices from different sellers.
* Place orders for digital/physical goods.
* Track deliveries in real time.
* Read and write customer reviews.

The app supports flexible marketplace models—fashion goods, food delivery, carbon credits and more.

## 🏗️ Project Structure

```
Carbo/
├── public/                 # Static assets
├── src/                    # Frontend source code (React + TypeScript)
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page-level views (Home, Product, Cart, Order Tracking)
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities
│   └── ...                 
├── supabase/               # Database schema and configuration
├── .env                    # Environment variables
├── package.json            # Dependencies
├── tailwind.config.ts      # TailwindCSS config
├── postcss.config.js       # PostCSS config
└── README.md               # Project documentation
```

## 🛠️ Tech Stack

### **Frontend**

* React + TypeScript
* Vite
* shadcn/ui components
* Tailwind CSS

### **Backend**

* Supabase (PostgreSQL + Authentication + Storage)
* Edge Functions (serverless operations)

### **Other Tools**

* ESLint
* Bun / Node

## ✨ Core Features

### 🔍 Product Discovery

* Explore products across categories.
* Search & filters.
* Product comparison across sellers.

### 🛒 Ordering System

* Secure checkout flow.
* Order summary & confirmation.
* Both digital and physical product support.

### 🚚 Delivery Tracking

* Real‑time order status updates (Placed → Packed → Shipped → Delivered).
* Map‑based or step‑based tracking.

### ⭐ Reviews & Ratings

* Users can post reviews after purchase.
* Read reviews from verified customers.

### 📊 Marketplace‑Specific Add‑Ons

Supports multiple marketplace themes:

#### **Sneaker Marketplace**

* 10‑point authenticity check.
* Price comparison across sellers.
* Returns & refund module.

#### **Food Delivery Marketplace**

* Menu digitization (images + details + pricing).
* Delivery ETA updates.
* WhatsApp/Chat support for restaurant/delivery partner.

#### **Carbon Credit Marketplace**

* Price per credit.
* Project categories (Forestry, Renewable energy, Infrastructure, etc.)
* SDG goals fulfilled per project.
* Certification details (e.g., VERRA).

## 🧩 Key System Components

### **Authentication**

* Email/password & OAuth via Supabase.

### **Database Schema (Simplified)**

* `users`
* `products`
* `sellers`
* `orders`
* `order_tracking`
* `reviews`
* `categories`

### **State Management**

* React Query or custom hooks.

## 🚀 Getting Started

### 1️⃣ Clone the project

```bash
https://github.com/RSN601KRI/Carbo.git
```

### 2️⃣ Install dependencies

```bash
bun install       # or npm install
```

### 3️⃣ Set up environment variables

Create a `.env` file based on `.env.example`:

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

### 4️⃣ Run development server

```bash
bun dev           # or npm run dev
```

## 🤝 Contributing

1. Fork the repo.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request.

## 📌 Roadmap

* [ ] Add seller dashboard
* [ ] Add payments integration (Razorpay/Stripe)
* [ ] Notifications (SMS / Email)
* [ ] Map‑based delivery tracking
* [ ] Admin panel

## 📄 License

This project is licensed under the MIT License.

## 🙌 Acknowledgements

Inspired by leading marketplace platforms such as **Amazon, Blinkit, Airbnb, Swiggy, CarbonMark**.
