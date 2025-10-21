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
    {
      name: "Ramo de Rosa",
      price: "25.000",
      image: "https://imgs.search.brave.com/ug5EVyhaqsVCW1SmoWX8t7V-Zbdhp_8y3zFo1bNWEC4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9yYW1vLWVzdGEt/ZW52dWVsdG8tZWxl/Z2FudGVtZW50ZS1j/b21iaW5hY2lvbi1j/b2xvcmVzLWhlcm1v/c28tcmFtby1yb3Nh/c18xMjk1NzU2LTIy/NzAyMC5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA",
    },
    {
      name: "Ramo 6 Rosas",
      price: "130.000",
      image: "https://imgs.search.brave.com/ug5EVyhaqsVCW1SmoWX8t7V-Zbdhp_8y3zFo1bNWEC4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9yYW1vLWVzdGEt/ZW52dWVsdG8tZWxl/Z2FudGVtZW50ZS1j/b21iaW5hY2lvbi1j/b2xvcmVzLWhlcm1v/c28tcmFtby1yb3Nh/c18xMjk1NzU2LTIy/NzAyMC5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA",
    },
    {
      name: "Ramo 12 Rosas",
      price: "250.000",
      image: "https://imgs.search.brave.com/ug5EVyhaqsVCW1SmoWX8t7V-Zbdhp_8y3zFo1bNWEC4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9yYW1vLWVzdGEt/ZW52dWVsdG8tZWxl/Z2FudGVtZW50ZS1j/b21iaW5hY2lvbi1j/b2xvcmVzLWhlcm1v/c28tcmFtby1yb3Nh/c18xMjk1NzU2LTIy/NzAyMC5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA",
    },
    {
      name: "Ramo 24 Rosas",
      price: "300.000",
      image: "https://imgs.search.brave.com/ug5EVyhaqsVCW1SmoWX8t7V-Zbdhp_8y3zFo1bNWEC4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9yYW1vLWVzdGEt/ZW52dWVsdG8tZWxl/Z2FudGVtZW50ZS1j/b21iaW5hY2lvbi1j/b2xvcmVzLWhlcm1v/c28tcmFtby1yb3Nh/c18xMjk1NzU2LTIy/NzAyMC5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA",
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
          className="flex items-center justify-center w-12 h-12 bg-white-500 text-black rounded-full shadow-lg hover:bg-yellow-600 transition-colors"
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
