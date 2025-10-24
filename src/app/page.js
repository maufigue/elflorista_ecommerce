'use client';
import { useRouter } from 'next/navigation';
import { Libre_Baskerville } from 'next/font/google';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

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
        className={`text-4xl sm:text-5xl mb-2 text-center font-serif ${libreBaskerville.className} text-black`}
        style={{ fontFamily: "'Libre Baskerville', serif" }}
      >
        El Florista
      </h1>

      <hr className="border-t-2 border-gray-400 w-50 sm:w-70 mx-auto mb-10 rounded-full" />

      {/* Contenedor principal de opciones */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-10 sm:gap-12 justify-center items-center">
        {/* 🌻 Opción Girasoles */}
        <div
          onClick={() => router.push('/girasoles')}
          className="flex flex-col items-center cursor-pointer hover:scale-105 transform transition-transform duration-300 w-40 sm:w-48"
        >
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img
              src="/images/girasol/ramo_girasoles_seccion.jpg"
              alt="Girasol"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-3 text-lg sm:text-xl font-semibold text-black">Girasoles</span>
        </div>

        {/* 🌹 Opción Rosas */}
        <div
          onClick={() => router.push('/rosas')}
          className="flex flex-col items-center cursor-pointer hover:scale-105 transform transition-transform duration-300 w-40 sm:w-48"
        >
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img
              src="/images/rosa/ramo_rosas_seccion.jpg"
              alt="Rosa"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-3 text-lg sm:text-xl font-semibold text-black">Rosas</span>
        </div>

        {/* 💐 Opción Arreglos Especiales */}
        <div
          onClick={() => router.push('/arreglos_especiales')}
          className="flex flex-col items-center cursor-pointer hover:scale-105 transform transition-transform duration-300 w-40 sm:w-48"
        >
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img
              src="/images/arreglos_especiales/rosas_dolares.jpg"
              alt="Arreglos Especiales"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-3 text-lg sm:text-xl font-semibold text-black text-center block leading-tight max-w-[8rem] sm:max-w-none">
            Arreglos Especiales
          </span>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 w-full bg-black-100 border-t border-gray-300 py-6 text-center text-sm sm:text-base">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-700">
          <div className="flex items-center gap-2">
            <PhoneIcon className="w-5 h-5" />
            <span>+595987288031</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon className="w-5 h-5" />
            <span>Santa Rosa del Aguaray, Paraguay</span>
          </div>
        </div>
        <p className="mt-4 text-gray-500 text-xs">
          © {new Date().getFullYear()} El Florista — Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
