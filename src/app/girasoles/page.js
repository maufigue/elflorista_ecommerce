'use client';
import { useRouter } from 'next/navigation';
import { HomeIcon } from '@heroicons/react/24/solid';
import ProductCard from '../../components/ProductCard';
import { Libre_Baskerville } from 'next/font/google';

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Girasoles() {
  const router = useRouter();

  const products = [
    { name: "Girasol & Eucalipto", price: "20.000", image: "/images/girasol/ramo_girasol_eucalipto.jpg" },
    { name: "Girasol & Gypsophila", price: "20.000", image: "/images/girasol/ramo_girasol_gypso.jpg" },
    { name: "6 Girasoles & Eucalipto", price: "120.000", image: "/images/girasol/ramo_6_girasol_eucalipto.jpg" },
    { name: "6 Girasoles & Gypsophila", price: "120.000", image: "/images/girasol/ramo_6_girasol_gypso.jpg" },
    { name: "12 Girasoles & Eucalipto", price: "190.000", image: "/images/girasol/ramo_12_girasol_eucalipto.jpg" },
    { name: "12 Girasoles & Gypsophila", price: "190.000", image: "/images/girasol/ramo_12_girasol_gypso.jpg" },
    { name: "24 Girasoles & Eucalipto", price: "250.000", image: "/images/girasol/ramo_24_girasol_eucalipto.jpg" },
    { name: "24 Girasoles & Gypsophila", price: "250.000", image: "/images/girasol/ramo_24_girasol_gypso.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Título + botón circular con icono */}
      <div className="flex items-center justify-center gap-4 mb-2">
        <h1
  className={`text-4xl sm:text-5xl mb-2 text-center font-serif ${libreBaskerville.className} text-black`}
  style={{ fontFamily: "'Libre Baskerville', serif" }}
>
  El Florista
</h1>
        <button
          onClick={() => router.push('/')}
          className="flex items-center justify-center w-12 h-12 bg-white-500 text-black rounded-full shadow-lg hover:bg-gray-600 transition-colors"
          title="Ir al inicio"
        >
          <HomeIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Línea horizontal debajo del título */}
      <hr className="border-t-2 border-gray-400 w-70 sm:w-90 mx-auto mb-10 rounded-full" />

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center text-black">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}
