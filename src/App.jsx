import headphones from "./assets/headphones.jpg";
import smartwatch from "./assets/smartwatch.jpg";
import bluetoothspeaker from "./assets/bluetoothspeaker.jpg";
import mouse from "./assets/mouse.jpg";
import dslrcamera from "./assets/dslrcamera.jpg";
import ProductCard from './components/ProductCard';
import './index.css';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 1999,
    image: headphones
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 2999,
    image: smartwatch
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 1499,
    image: bluetoothspeaker
  },
  {
    id: 4,
    name: 'Gaming Mouse',
    price: 999,
    image: mouse
  },
  {
    id: 5,
    name: 'DSLR Camera',
    price: 45999,
    image: dslrcamera
  }
];



function App() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />

      ))}
    </div>
  );
}
export default App;
