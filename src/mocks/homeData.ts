export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: string;
  rating?: number;
  reviews?: number;
  colors?: string[];
  sizes?: string[];
}

export interface Collection {
  id: string;
  name: string;
  subTitle: string;
  image: string;
  link: string;
}

export interface Category {
  id: string;
  name: string;
  subcategories: string[];
  image: string;
}

export interface OfferBanner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  badge?: string;
  link: string;
}

export const collections: Collection[] = [
  {
    id: '1',
    name: 'Duvet Covers - King, Queen & Single Sizes',
    subTitle: 'View collection',
    image: 'https://readdy.ai/api/search-image?query=Premium%20white%20duvet%20cover%20neatly%20folded%20on%20bed%20with%20soft%20pillows%20neutral%20tones%20elegant%20bedroom%20setting%20professional%20product%20photography%20soft%20natural%20lighting%20clean%20minimal%20background%20warm%20cream%20colors&width=200&height=200&seq=1&orientation=squarish',
    link: '/collections/duvets',
  },
  {
    id: '2',
    name: 'Luxury Pillows - Memory Foam & Soft',
    subTitle: 'View collection',
    image: 'https://readdy.ai/api/search-image?query=Premium%20fluffy%20white%20pillows%20arranged%20on%20bed%20soft%20luxury%20bedding%20professional%20product%20photography%20soft%20studio%20lighting%20clean%20minimal%20background%20warm%20tones%20elegant&width=200&height=200&seq=2&orientation=squarish',
    link: '/collections/pillows',
  },
  {
    id: '3',
    name: 'Warm Blankets - Fleece, Wool & Cotton',
    subTitle: 'View collection',
    image: 'https://readdy.ai/api/search-image?query=Soft%20cozy%20blanket%20draped%20over%20armchair%20warm%20knitted%20texture%20professional%20product%20photography%20soft%20studio%20lighting%20clean%20minimal%20background%20cream%20beige%20tones&width=200&height=200&seq=3&orientation=squarish',
    link: '/collections/blankets',
  },
  {
    id: '4',
    name: 'Cotton Bedsheets - Fitted & Flat Sheets',
    subTitle: 'View collection',
    image: 'https://readdy.ai/api/search-image?query=Crisp%20white%20cotton%20bedsheet%20set%20neatly%20folded%20on%20clean%20surface%20professional%20product%20photography%20soft%20studio%20lighting%20minimal%20background%20elegant%20hotel%20quality&width=200&height=200&seq=4&orientation=squarish',
    link: '/collections/bedsheets',
  },
  {
    id: '5',
    name: 'Complete Bedding Sets',
    subTitle: 'View collection',
    image: 'https://readdy.ai/api/search-image?query=Complete%20luxury%20bedding%20set%20with%20matching%20duvet%20cover%20pillowcases%20and%20bedsheet%20on%20beautifully%20made%20bed%20professional%20interior%20photography%20soft%20warm%20lighting%20elegant%20neutral%20tones&width=200&height=200&seq=5&orientation=squarish',
    link: '/collections/bedding-sets',
  },
  {
    id: '6',
    name: 'Mattress Protectors & Toppers',
    subTitle: 'View collection',
    image: 'https://readdy.ai/api/search-image?query=White%20quilted%20mattress%20protector%20pad%20on%20clean%20mattress%20professional%20product%20photography%20soft%20studio%20lighting%20minimal%20background%20clean%20hygiene&width=200&height=200&seq=6&orientation=squarish',
    link: '/collections/mattress-protectors',
  },
];

export const trendingProducts: Product[] = [
  {
    id: 't1',
    name: 'Premium 100% Cotton Duvet Cover Set - King Size, 3-Piece with Pillowcases, Soft & Breathable, White',
    price: 4999,
    originalPrice: 8500,
    image: 'https://readdy.ai/api/search-image?query=White%20cotton%20duvet%20cover%20set%20with%20two%20matching%20pillowcases%20on%20bed%20professional%20product%20photography%20soft%20studio%20lighting%20clean%20minimal%20background%20high%20quality%20linen&width=300&height=300&seq=10&orientation=squarish',
    category: 'Duvet Covers',
    badge: 'Hot Sale',
    rating: 4.9,
    reviews: 312,
    colors: ['White', 'Beige', 'Grey', 'Navy'],
    sizes: ['Single', 'Queen', 'King', 'Super King'],
  },
  {
    id: 't2',
    name: 'Luxury Memory Foam Pillow - Orthopedic Neck Support, Hypoallergenic, Standard Size for Kenyan Homes',
    price: 2499,
    originalPrice: 4500,
    image: 'https://readdy.ai/api/search-image?query=White%20memory%20foam%20pillow%20with%20soft%20cotton%20cover%20professional%20product%20photography%20soft%20studio%20lighting%20clean%20minimal%20background%20ergonomic%20design&width=300&height=300&seq=11&orientation=squarish',
    category: 'Pillows',
    badge: 'Best Seller',
    rating: 4.7,
    reviews: 198,
  },
  {
    id: 't3',
    name: 'Ultra Soft Fleece Blanket - Queen Size, Warm & Cozy, Machine Washable, Perfect for Cold Nights in Kenya',
    price: 3499,
    originalPrice: 5500,
    image: 'https://readdy.ai/api/search-image?query=Soft%20fluffy%20fleece%20blanket%20in%20cream%20color%20draped%20neatly%20professional%20product%20photography%20soft%20studio%20lighting%20clean%20minimal%20background%20warm%20cozy%20texture&width=300&height=300&seq=12&orientation=squarish',
    category: 'Blankets',
    badge: 'Sale',
    rating: 4.6,
    reviews: 156,
    colors: ['Cream', 'Grey', 'Pink', 'Blue'],
  },
  {
    id: 't4',
    name: 'Egyptian Cotton Fitted Bedsheet - Deep Pocket, 400 Thread Count, Single Size, Crisp White',
    price: 1999,
    originalPrice: 3500,
    image: 'https://readdy.ai/api/search-image?query=Crisp%20white%20fitted%20bedsheet%20on%20mattress%20corner%20showing%20deep%20pocket%20elastic%20professional%20product%20photography%20soft%20studio%20lighting%20clean%20minimal%20background%20hotel%20quality&width=300&height=300&seq=13&orientation=squarish',
    category: 'Bedsheets',
    rating: 4.5,
    reviews: 89,
    sizes: ['Single', 'Double', 'Queen', 'King'],
  },
  {
    id: 't5',
    name: 'Complete 7-Piece Bedding Set - Duvet Cover, Fitted Sheet, Pillowcases & Cushion Covers, King Size, Grey',
    price: 8999,
    originalPrice: 14500,
    image: 'https://readdy.ai/api/search-image?query=Complete%20grey%20bedding%20set%20with%20duvet%20cover%20fitted%20sheet%20and%20multiple%20pillowcases%20on%20made%20bed%20professional%20interior%20photography%20soft%20warm%20lighting%20elegant%20modern%20bedroom&width=300&height=300&seq=14&orientation=squarish',
    category: 'Bedding Sets',
    badge: 'New',
    rating: 4.8,
    reviews: 74,
    colors: ['Grey', 'White', 'Beige'],
  },
];

export const appliances: Product[] = [
  {
    id: 'a1',
    name: 'Waterproof Mattress Protector - Quilted, Hypoallergenic, Fitted Style, Double Size, White',
    price: 2499,
    image: 'https://readdy.ai/api/search-image?query=White%20quilted%20waterproof%20mattress%20protector%20on%20clean%20bed%20professional%20product%20photography%20soft%20studio%20lighting%20minimal%20background%20hygiene%20protection&width=300&height=300&seq=20&orientation=squarish',
    category: 'Mattress Protectors',
    rating: 4.4,
    reviews: 67,
  },
  {
    id: 'a2',
    name: 'Luxury Goose Down Duvet Inner - 13.5 Tog, Warm Winter Weight, King Size, Hotel Quality',
    price: 12999,
    originalPrice: 18999,
    image: 'https://readdy.ai/api/search-image?query=Fluffy%20white%20goose%20down%20duvet%20inner%20comforter%20on%20bed%20professional%20product%20photography%20soft%20studio%20lighting%20clean%20minimal%20background%20luxury%20hotel%20quality%20warm&width=300&height=300&seq=21&orientation=squarish',
    category: 'Duvet Inners',
    badge: 'Best Seller',
    rating: 4.9,
    reviews: 245,
    sizes: ['Single', 'Double', 'Queen', 'King'],
  },
  {
    id: 'a3',
    name: 'Silk Pillowcase Set of 2 - Mulberry Silk, Anti-Aging, Hair-Friendly, Standard Size, Champagne Color',
    price: 3499,
    originalPrice: 5500,
    image: 'https://readdy.ai/api/search-image?query=Two%20champagne%20colored%20silk%20pillowcases%20neatly%20arranged%20on%20white%20surface%20professional%20product%20photography%20soft%20studio%20lighting%20clean%20minimal%20background%20luxury%20smooth%20texture&width=300&height=300&seq=22&orientation=squarish',
    category: 'Pillowcases',
    badge: 'New',
    rating: 4.7,
    reviews: 132,
    colors: ['Champagne', 'White', 'Pink', 'Black'],
  },
  {
    id: 'a4',
    name: 'Weighted Blanket - 7kg, Gravity Therapy Blanket for Better Sleep, Anxiety Relief, Grey Cotton Cover',
    price: 7999,
    image: 'https://readdy.ai/api/search-image?query=Grey%20weighted%20blanket%20with%20quilted%20pattern%20on%20neatly%20made%20bed%20professional%20product%20photography%20soft%20studio%20lighting%20clean%20minimal%20background%20therapeutic%20calm&width=300&height=300&seq=23&orientation=squarish',
    category: 'Blankets',
    rating: 4.6,
    reviews: 91,
    sizes: ['5kg', '7kg', '9kg'],
  },
  {
    id: 'a5',
    name: 'Bamboo Fiber Bedsheet Set - 4-Piece, Ultra Soft, Eco-Friendly, Queen Size, Sage Green',
    price: 5999,
    originalPrice: 9500,
    image: 'https://readdy.ai/api/search-image?query=Sage%20green%20bamboo%20fiber%20bedsheet%20set%20with%20matching%20pillowcases%20on%20bed%20professional%20product%20photography%20soft%20studio%20lighting%20clean%20minimal%20background%20eco%20friendly%20natural%20texture&width=300&height=300&seq=24&orientation=squarish',
    category: 'Bedsheets',
    rating: 4.5,
    reviews: 58,
    colors: ['Sage Green', 'White', 'Sky Blue'],
  },
];

export const featuredProduct: Product = {
  id: 'fp1',
  name: 'Premium 100% Egyptian Cotton Duvet Cover Set - King Size, 3-Piece with 2 Pillowcases, 600 Thread Count, Soft & Breathable',
  price: 6499,
  originalPrice: 9999,
  image: 'https://readdy.ai/api/search-image?query=Luxurious%20white%20egyptian%20cotton%20duvet%20cover%20set%20with%20two%20matching%20pillowcases%20on%20elegant%20king%20size%20bed%20professional%20product%20photography%20soft%20natural%20lighting%20high%20end%20hotel%20style%20clean%20crisp%20bedding&width=500&height=500&seq=30&orientation=squarish',
  category: 'Duvet Covers',
  badge: 'Hot Sale',
  rating: 4.9,
  reviews: 312,
  colors: ['White', 'Ivory', 'Silver Grey', 'Soft Pink', 'Sage Green'],
  sizes: ['Single', 'Double', 'Queen', 'King', 'Super King'],
};

export const offerBanners: OfferBanner[] = [
  {
    id: 'o1',
    title: 'Winter Blanket Sale',
    subtitle: 'Save up to 40%',
    image: 'https://readdy.ai/api/search-image?query=Cozy%20warm%20bedroom%20with%20thick%20wool%20blankets%20and%20soft%20pillows%20on%20bed%20winter%20atmosphere%20professional%20lifestyle%20photography%20warm%20golden%20lighting%20inviting%20comfortable&width=600&height=400&seq=40&orientation=landscape',
    badge: 'Save up to 40%',
    link: '/collections/blankets',
  },
  {
    id: 'o2',
    title: 'Pillow Paradise',
    subtitle: 'Buy 2 Get 1 Free',
    image: 'https://readdy.ai/api/search-image?query=Stack%20of%20premium%20fluffy%20white%20and%20grey%20pillows%20on%20clean%20white%20background%20professional%20product%20photography%20soft%20studio%20lighting%20minimal%20style%20luxury%20bedding&width=280&height=200&seq=41&orientation=landscape',
    badge: 'Buy 2 Get 1 Free',
    link: '/collections/pillows',
  },
  {
    id: 'o3',
    title: 'Complete Bedding Sets',
    subtitle: 'Offers on Full Sets',
    image: 'https://readdy.ai/api/search-image?query=Beautifully%20made%20bed%20with%20complete%20matching%20bedding%20set%20duvet%20cover%20fitted%20sheet%20and%20pillowcases%20in%20soft%20neutral%20tones%20modern%20bedroom%20professional%20interior%20photography%20bright%20natural%20lighting&width=280&height=200&seq=42&orientation=landscape',
    badge: 'Up to 35% Off',
    link: '/collections/bedding-sets',
  },
  {
    id: 'o4',
    title: 'Shop New Duvet Covers',
    subtitle: 'Fresh Styles Just In',
    image: 'https://readdy.ai/api/search-image?query=Modern%20bedroom%20with%20stylish%20patterned%20duvet%20cover%20in%20soft%20colors%20fresh%20linens%20crisp%20bedding%20professional%20interior%20photography%20bright%20natural%20lighting%20contemporary%20design&width=600&height=200&seq=43&orientation=landscape',
    link: '/collections/duvets',
  },
];

export const discoverCategories: Category[] = [
  {
    id: 'd1',
    name: 'Duvet Covers',
    subcategories: ['Cotton Duvet Covers', 'Silk Duvet Covers', 'Linen Duvet Covers', 'Patterned Duvet Covers', 'Plain Duvet Covers'],
    image: 'https://readdy.ai/api/search-image?query=Various%20duvet%20covers%20in%20different%20colors%20and%20textures%20displayed%20on%20hangers%20professional%20product%20photography%20soft%20studio%20lighting%20clean%20minimal%20background%20textile%20collection&width=400&height=250&seq=50&orientation=landscape',
  },
  {
    id: 'd2',
    name: 'Pillows & Pillowcases',
    subcategories: ['Memory Foam Pillows', 'Feather Pillows', 'Orthopedic Pillows', 'Silk Pillowcases', 'Cotton Pillowcases'],
    image: 'https://readdy.ai/api/search-image?query=Collection%20of%20different%20pillows%20and%20pillowcases%20arranged%20neatly%20on%20white%20background%20professional%20product%20photography%20soft%20studio%20lighting%20clean%20minimal%20style%20bedding%20accessories&width=400&height=250&seq=51&orientation=landscape',
  },
  {
    id: 'd3',
    name: 'Blankets & Throws',
    subcategories: ['Fleece Blankets', 'Wool Blankets', 'Weighted Blankets', 'Cotton Throws', 'Knitted Throws'],
    image: 'https://readdy.ai/api/search-image?query=Collection%20of%20cozy%20blankets%20and%20throws%20in%20various%20textures%20and%20colors%20draped%20over%20furniture%20professional%20interior%20photography%20warm%20lighting%20comfortable%20home%20setting&width=400&height=250&seq=52&orientation=landscape',
  },
  {
    id: 'd4',
    name: 'Bedsheets & Bedding',
    subcategories: ['Fitted Sheets', 'Flat Sheets', 'Sheet Sets', 'Bamboo Sheets', 'Egyptian Cotton Sheets'],
    image: 'https://readdy.ai/api/search-image?query=Neatly%20folded%20bedsheets%20and%20bedding%20sets%20in%20various%20colors%20stacked%20on%20shelf%20professional%20product%20photography%20soft%20studio%20lighting%20clean%20minimal%20background%20organized%20retail%20display&width=400&height=250&seq=53&orientation=landscape',
  },
];

export const marqueeItems = [
  'Premium Duvet Covers & Bedding Sets',
  'New Arrivals',
  'Free Delivery on Orders Over KSh 5,000',
  'Softest Pillows & Coziest Blankets',
  'Shop Now - Pay Later',
];