'use client';
import { useRouter } from 'next/navigation';
import { Libre_Baskerville } from 'next/font/google';

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 px-4 py-10">
      {/* Título principal */}
      <h1
        className={`text-4xl sm:text-5xl mb-3 text-center leading-tight ${libreBaskerville.className}`}
      >
        El Florista
      </h1>
      <hr className="border-t-2 border-gray-400 w-24 sm:w-40 mx-auto mb-10 rounded-full" />

      {/* Contenedor principal de opciones */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-10 sm:gap-12 justify-center items-center">
        {/* 🌻 Opción Girasoles */}
        <div
          onClick={() => router.push('/girasoles')}
          className="flex flex-col items-center cursor-pointer hover:scale-105 transform transition-transform duration-300 w-40 sm:w-48"
        >
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://imgs.search.brave.com/ZFNuT1pLEKWkAQjN44bzqfzKaU_XW48RoTN24BTH2H8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mbG9y/aXN0ZXJpYWZlbGl1/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wNC9yYW1v/LWdpcmFzb2xlcy5q/cGc"
              alt="Girasol"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-3 text-lg sm:text-xl font-semibold">Girasol</span>
        </div>

        {/* 🌹 Opción Rosas */}
        <div
          onClick={() => router.push('/rosas')}
          className="flex flex-col items-center cursor-pointer hover:scale-105 transform transition-transform duration-300 w-40 sm:w-48"
        >
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://imgs.search.brave.com/ug5EVyhaqsVCW1SmoWX8t7V-Zbdhp_8y3zFo1bNWEC4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9yYW1vLWVzdGEt/ZW52dWVsdG8tZWxl/Z2FudGVtZW50ZS1j/b21iaW5hY2lvbi1j/b2xvcmVzLWhlcm1v/c28tcmFtby1yb3Nh/c18xMjk1NzU2LTIy/NzAyMC5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA"
              alt="Rosa"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-3 text-lg sm:text-xl font-semibold">Rosas</span>
        </div>

        {/* 💐 Opción Ramos Especiales */}
        <div
          onClick={() => router.push('/ramos')}
          className="flex flex-col items-center cursor-pointer hover:scale-105 transform transition-transform duration-300 w-40 sm:w-48"
        >
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://imgs.search.brave.com/GDHDj348bNrAoLjdTjJbCp_u_DzmB0mc-aPIEJnWhuU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2IzL2Y0/Lzc3L2IzZjQ3NzZi/ZmI4NjYxMTg2NzQ4/NTE1NTdmZDVjNzg3/LmpwZw"
              alt="Ramos Especiales"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-3 text-lg sm:text-xl font-semibold">
            Ramos Especiales
          </span>
        </div>
      </div>
    </div>
  );
}
