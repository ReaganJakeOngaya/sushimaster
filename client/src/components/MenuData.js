import sushi2 from '../assets/salmon-nigiri.jpg';
import sushi3 from '../assets/nigiri-sushi.jpg';
import sushi4 from '../assets/cherashizushi.jpg';
import sushi5 from '../assets/miso-ramen.jpg';
import sushi6 from '../assets/Dragonroll.jpg';
import sushi7 from '../assets/volcano-ramen.jpg';
import sushi8 from '../assets/Rainbow-sushi.jpg';
import sushi9 from '../assets/spicy-tuna.jpg';
import sushi10 from '../assets/shoyu-ramen.jpg';
import sushi11 from '../assets/Temaki-sushi.jpg';
import sushi12 from '../assets/maki-sushi.jpg';
import dessert1 from '../assets/mochi-dessert.jpg';
import dessert2 from '../assets/anmitsu.jpg';
import dessert3 from '../assets/matcha.jpg';
import dessert4 from '../assets/black tonkotsu.jpeg';
import dessert5 from '../assets/Mochi-Donuts.jpg';
import drink1 from '../assets/green-tea.webp';
import drink2 from '../assets/sakura-tea.jpg';
import drink3 from '../assets/mugicha.jpg';
import drink4 from '../assets/sakura-mojito.jpg';

export const menuItems = [
  {
    id: 1,
    name: 'Maki Sushi',
    price: 21.0,
    description: 'Traditional Japanese dish consisting of vinegared rice and various fillings rolled in a sheet of nori (seaweed)',
    category: 'sushi',
    rating: 4.8,
    tags: ['Premium', 'Fresh'],
    badge: 'Popular',
    image: sushi12,
  },
  {
    id: 2,
    name: 'Temaki sushi',
    price: 19.0,
    description: 'Sushi made by rolling a sheet of nori (dried seaweed) by hand into a distinct cone shape with seasoned sushi rice and various fillings',
    category: 'sushi',
    rating: 4.6,
    tags: ['Traditional', 'Classic'],
    image: sushi11,
  },
  {
    id: 3,
    name: 'Nigiri Sushi',
    price: 24.0,
    description: 'Sushi made of a small, hand-pressed mound of seasoned rice topped with a slice of raw fish or seafood, though it can also include cooked ingredients like shrimp or egg, or vegetables',
    category: 'sushi',
    rating: 4.9,
    tags: ['Hand-pressed', 'Premium'],
    badge: "Chef's Special",
    image: sushi3,
  },
  {
    id: 4,
    name: 'Salmonon Nigiri Sushi',
    price: 18.0,
    description: ' Dish consisting of a small, hand-pressed oval of vinegared sushi rice topped with a slice of fresh, sashimi-grade raw salmon',
    category: 'sushi',
    rating: 4.7,
    tags: ['Hand-rolled', 'Fresh'],
    image: sushi2,
  },
  {
    id: 5,
    name: 'Shoyu Ramen',
    price: 13.0,
    description: 'One of the four main types of Japanese ramen, characterized by its savory, clear, soy sauce-based broth',
    category: 'ramen',
    rating: 4.8,
    tags: ['Soy Broth', 'Savory', 'Noodles'],
    badge: 'Popular',
    image: sushi10,
  },
  {
    id: 6,
    name:'Cherashizushi',
    price: 16.0,
    description: 'A traditional Japanese dish consisting of vinegared sushi rice in a bowl or platter topped with a colorful assortment of ingredients',
    category: 'sushi',
    rating: 4.7,
    tags: ['Rice', 'Sashimi'],
    image: sushi4,
  },
  {
    id: 7,
    name: 'Miso Noodles',
    price: 12.0,
    description: 'noodle soup dish featuring a hearty broth flavored with miso (fermented soybean paste)',
    category: 'ramen',
    rating: 4.5,
    tags: ['Thick Noodles', 'Soybean Broth'],
    image: sushi5,
  },
  {
    id: 8,
    name: 'Anmitsu Dessert',
    price: 8.0,
    description: 'A traditional, popular Japanese cold dessert that originated in the Meiji era',
    category: 'desserts',
    rating: 4.6,
    tags: ['Sweet', 'Traditional', 'Cold'],
    image: dessert2,
  },
  {
    id: 9,
    name: 'Mochi Ice Cream',
    price: 9.0,
    description: 'Soft mochi filled with premium ice cream',
    category: 'desserts',
    rating: 4.8,
    tags: ['Soft', 'Premium'],
    badge: 'Popular',
    image: dessert1,
  },
  {
    id: 10,
    name: 'Oruncha Tea',
    price: 5.0,
    description: 'Traditional Japanese green tea',
    category: 'drinks',
    rating: 4.5,
    tags: ['Green Tea', 'Traditional'],
    image: drink1,
  },
  {
    id: 11,
    name: 'Sakura Tea',
    price: 6.0,
    description: 'Delicate cherry blossom flavored tea',
    category: 'drinks',
    rating: 4.7,
    tags: ['Cherry Blossom', 'Delicate'],
    badge: 'Seasonal',
    image: drink2,
  },
  {
    id: 12,
    name: 'Mugicha',
    price: 4.5,
    description: 'Refreshing barley tea, served cold',
    category: 'drinks',
    rating: 4.4,
    tags: ['Barley', 'Cold'],
    image: drink3,
  },
  {
    id: 13,
    name: 'Dragon Roll Sushi',
    price: 4.5,
    description: 'American-style, inside-out sushi roll (uramaki) known for its striking presentation, which features thinly sliced avocado layered on top to resemble the scales of a dragon',
    category: 'sushi',
    rating: 4.4,
    tags: ['Avocado', 'Inside-out', 'Uramaki'],
    image: sushi6,
  },
  {
    id: 14,
    name: 'Volcano Ramen',
    price: 4.5,
    description: 'Creamy and rich, full flavor broth created from slow cooked pork bones, spiced up with spicy rayu, mayu, and togorashi',
    category: 'ramen',
    rating: 4.4,
    tags: ['Spicy', 'Rich Broth', 'Chashu'],
    image: sushi7,
  },
  {
    id: 15,
    name: 'Rainbow Roll Sushi',
    price: 4.5,
    description: 'A popular American-style, inside-out sushi roll (uramaki) consisting of a classic California roll base topped with a colorful layer of various fresh, thinly sliced fish and avocado',
    category: 'sushi',
    rating: 4.4,
    tags: ['Spicy', 'Rich Broth', 'Chashu'],
    image: sushi8,
  },
  {
    id: 16,
    name: 'Matcha Tiramisu',
    price: 4.5,
    description: 'A creative fusion dessert that replaces the traditional coffee element of an Italian tiramisu with matcha green tea',
    category: 'desserts',
    rating: 4.4,
    tags: ['Matcha', 'Green Tea', 'Fusion'],
    image: dessert3,
  },
  {
    id: 17,
    name: 'Sakura Mojito',
    price: 8.0,
    description: 'Cherry blossom infused mojito with fresh mint',
    category: 'drinks',
    rating: 4.6,
    tags: ['Cherry Blossom', 'Refreshing', 'Mint'],
    image: drink4,
  },
  {
    id: 18,
    name: 'Spicy Tuna Crispy',
    price: 20.0,
    description: 'Crispy rice with spicy tuna and special sauce',
    category: 'sushi',
    rating: 4.8,
    tags: ['Spicy', 'Crispy', 'Tuna'],
    image: sushi9,
  },
  {
    id: 19,
    name: 'Black Tonkotsu',
    price: 16.0,
    description: 'Rich black garlic tonkotsu ramen with premium pork',
    category: 'ramen',
    rating: 4.7,
    tags: ['Black Garlic', 'Rich', 'Premium Pork'],
    image: dessert4,
  },
  {
    id: 20,
    name: 'Mochi Donuts',
    price: 10.0,
    description: 'Soft mochi donuts with various glazes',
    category: 'desserts',
    rating: 4.5,
    tags: ['Mochi', 'Donuts', 'Sweet'],
    image: dessert5,
  },
];

// You can also export other related data
export const categories = [
  { key: 'all', label: 'All Items' },
  { key: 'sushi', label: 'Sushi' },
  { key: 'ramen', label: 'Ramen' },
  { key: 'desserts', label: 'Desserts' },
  { key: 'drinks', label: 'Drinks' },
];

export const searchItems = menuItems.map(item => ({
  id: item.id,
  name: item.name,
  price: item.price,
  category: item.category,
  image: item.image,
}));