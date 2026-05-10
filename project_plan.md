# Duvet Covers Kenya - Premium Bedding & Linens

## 1. Project Description
Duvet Covers Kenya is an e-commerce website selling premium duvet covers, pillows, blankets, bedsheets, bedding sets and mattress protectors. Target customers are Kenyan households looking for quality bedroom essentials with nationwide delivery. The brand emphasizes soft, durable, and elegant bedding that transforms bedrooms into cozy sanctuaries.

## 2. Page Structure
- `/` - Home (main landing page with hero, collections, products, promotions)
- `/products` - Product Listing Page
- `/product/:id` - Product Detail Page
- `/collections` - Collections/Category Page
- `/blog` - Blog/Guides Page
- `/contact` - Contact & Support Page
- `*` - 404 Not Found

## 3. Core Features
- [x] Hero banner with room/category search
- [x] Product collections carousel
- [x] Top offers and promotions showcase
- [x] Trending products grid
- [x] Category discovery sections
- [x] Product detail preview
- [x] Blog/Guides section
- [x] Newsletter subscription
- [x] Responsive navigation with mobile menu
- [x] Shopping cart icon
- [x] Footer with contact info and links

## 4. Data Model Design
(Will use mock data initially. No Supabase connected yet.)

## 5. Backend / Third-party Integration Plan
- Supabase: **Not connected yet** - Will be needed for user auth, product database, and orders when ready
- Shopify: **Not connected yet** - Will be needed for product catalog and checkout integration
- Stripe: **Not connected yet** - Will be needed for payment processing

## 6. Development Phase Plan

### Phase 1: Home Page Foundation
- [x] Build the complete home page with all major sections
- [x] Update brand from HomeLux to Duvet Covers Kenya
- [x] Change product focus from kitchenware to bedding/linens
- [x] Update all product mock data for duvets, pillows, blankets, bedsheets

### Phase 2: Product Pages
- Goal: Create product listing and product detail pages
- Deliverable: `/products` and `/product/:id` pages with realistic data

### Phase 3: Connect Backend
- Goal: Integrate Supabase for data, then Shopify for products
- Deliverable: Real product data flowing from backend

### Phase 4: Cart & Checkout
- Goal: Shopping cart functionality and checkout flow
- Deliverable: Working cart with add/remove and checkout process