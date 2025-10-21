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
    { name: "Ramo de Girasol", price: "250.000", image: "https://imgs.search.brave.com/ZFNuT1pLEKWkAQjN44bzqfzKaU_XW48RoTN24BTH2H8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mbG9y/aXN0ZXJpYWZlbGl1/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wNC9yYW1v/LWdpcmFzb2xlcy5q/cGc" },
    { name: "Ramo 6 Girasoles", price: "120.000", image: "https://imgs.search.brave.com/ZFNuT1pLEKWkAQjN44bzqfzKaU_XW48RoTN24BTH2H8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mbG9y/aXN0ZXJpYWZlbGl1/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wNC9yYW1v/LWdpcmFzb2xlcy5q/cGc" },
    { name: "Ramo 12 Girasoles", price: "150.000", image: "https://imgs.search.brave.com/ZFNuT1pLEKWkAQjN44bzqfzKaU_XW48RoTN24BTH2H8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mbG9y/aXN0ZXJpYWZlbGl1/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wNC9yYW1v/LWdpcmFzb2xlcy5q/cGc" },
    { name: "Ramo 24 Girasoles", price: "150.000", image: "https://imgs.search.brave.com/ZFNuT1pLEKWkAQjN44bzqfzKaU_XW48RoTN24BTH2H8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mbG9y/aXN0ZXJpYWZlbGl1/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wNC9yYW1v/LWdpcmFzb2xlcy5q/cGc" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Título + botón circular con icono */}
      <div className="flex items-center justify-center gap-4 mb-2">
        <h1
        className={`text-5xl mb-2 text-center ${libreBaskerville.className}`}
      >
        El Florista
      </h1>
        <button
          onClick={() => router.push('/')}
          className="flex items-center justify-center w-12 h-12 bg-white-500 text-yellow rounded-full shadow-lg hover:bg-yellow-600 transition-colors"
          title="Ir al inicio"
        >
          <HomeIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Línea horizontal debajo del título */}
      <hr className="border-t-3 border-black-500 w-200 mx-auto mb-8 rounded-full" />

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
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
