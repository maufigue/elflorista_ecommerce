'use client';
import { useRouter } from 'next/navigation';
import { HomeIcon } from '@heroicons/react/24/solid';
import ProductCardEspecial from '../../components/ProductCardEspecial';
import { Libre_Baskerville } from 'next/font/google';

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Girasoles() {
  const router = useRouter();

  const products = [
    {
      name: "Ramo de Rosas & Girasoles",
      price: "Consultar",
      image: "/images/girasol/rosas_girasoles.jpg",
    },
        {
      name: "Ramo de Dolares",
      price: "Consultar",
      image: "/images/arreglos_especiales/rosas_dolares.jpg",
    },
    {
      name: "Jarrón  de Girasoles",
      price: "Consultar",
      image: "/images/girasol/jarron_girasoles.jpg",
    },
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
          <ProductCardEspecial
            key={index}
            name={product.name}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}
