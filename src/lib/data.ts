import productHoodie from '@/assets/product-hoodie.jpg';
import productTshirt from '@/assets/product-tshirt.jpg';
import productJoggers from '@/assets/product-joggers.jpg';
import productCap from '@/assets/product-cap.jpg';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "vsm-hoodie-001",
    name: "VSM Essential Hoodie",
    description: "Hoodie oversize premium en coton épais avec logo brodé.",
    price: 45000,
    originalPrice: 55000,
    image: productHoodie,
    category: "Hoodies",
    badge: "-18%",
    inStock: true,
  },
  {
    id: "vsm-tshirt-001",
    name: "VSM Graphic Tee",
    description: "T-shirt streetwear avec graphique exclusif. 100% coton.",
    price: 25000,
    image: productTshirt,
    category: "T-Shirts",
    inStock: true,
  },
  {
    id: "vsm-joggers-001",
    name: "VSM Track Joggers",
    description: "Joggers premium avec bandes latérales signature.",
    price: 35000,
    originalPrice: 42000,
    image: productJoggers,
    category: "Pantalons",
    badge: "-17%",
    inStock: true,
  },
  {
    id: "vsm-cap-001",
    name: "VSM Signature Cap",
    description: "Casquette snapback avec logo brodé en relief.",
    price: 15000,
    image: productCap,
    category: "Accessoires",
    inStock: true,
  },
  {
    id: "vsm-hoodie-002",
    name: "VSM Red Edition Hoodie",
    description: "Édition limitée hoodie avec détails rouges exclusifs.",
    price: 55000,
    image: productHoodie,
    category: "Hoodies",
    badge: "LIMITED",
    inStock: true,
  },
  {
    id: "vsm-tshirt-002",
    name: "VSM Classic Black Tee",
    description: "T-shirt classique noir avec logo discret.",
    price: 20000,
    image: productTshirt,
    category: "T-Shirts",
    inStock: true,
  },
];

// Kinshasa communes with delivery zones
export const kinshasaCommunes = [
  { name: "Ngiri-Ngiri", zone: "proche", fee: 2000 },
  { name: "Kalamu", zone: "proche", fee: 2500 },
  { name: "Kasa-Vubu", zone: "proche", fee: 2500 },
  { name: "Lingwala", zone: "proche", fee: 3000 },
  { name: "Kinshasa", zone: "proche", fee: 3000 },
  { name: "Barumbu", zone: "moyenne", fee: 4000 },
  { name: "Gombe", zone: "moyenne", fee: 4500 },
  { name: "Bandalungwa", zone: "moyenne", fee: 4000 },
  { name: "Selembao", zone: "moyenne", fee: 4500 },
  { name: "Bumbu", zone: "moyenne", fee: 3500 },
  { name: "Makala", zone: "moyenne", fee: 4000 },
  { name: "Ngaba", zone: "moyenne", fee: 4000 },
  { name: "Limete", zone: "moyenne", fee: 5000 },
  { name: "Lemba", zone: "moyenne", fee: 5000 },
  { name: "Matete", zone: "moyenne", fee: 4500 },
  { name: "Ndjili", zone: "éloignée", fee: 6000 },
  { name: "Masina", zone: "éloignée", fee: 6500 },
  { name: "Kimbanseke", zone: "éloignée", fee: 7000 },
  { name: "Nsele", zone: "éloignée", fee: 8000 },
  { name: "Maluku", zone: "éloignée", fee: 10000 },
  { name: "Mont-Ngafula", zone: "éloignée", fee: 7000 },
  { name: "Kisenso", zone: "éloignée", fee: 6500 },
  { name: "Ngaliema", zone: "moyenne", fee: 5000 },
  { name: "Kintambo", zone: "moyenne", fee: 4500 },
];

export const drcProvinces = [
  "Kinshasa",
  "Bas-Uele",
  "Équateur",
  "Haut-Katanga",
  "Haut-Lomami",
  "Haut-Uele",
  "Ituri",
  "Kasaï",
  "Kasaï Central",
  "Kasaï Oriental",
  "Kongo Central",
  "Kwango",
  "Kwilu",
  "Lomami",
  "Lualaba",
  "Mai-Ndombe",
  "Maniema",
  "Mongala",
  "Nord-Kivu",
  "Nord-Ubangi",
  "Sankuru",
  "Sud-Kivu",
  "Sud-Ubangi",
  "Tanganyika",
  "Tshopo",
  "Tshuapa",
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('fr-CD', {
    style: 'decimal',
    minimumFractionDigits: 0,
  }).format(price) + ' FC';
};
