'use client';
import { useRouter } from 'next/navigation';
import { HomeIcon } from '@heroicons/react/24/solid';
import { Libre_Baskerville } from 'next/font/google';

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Rosas() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-pink-50 px-4 py-10">
      
      {/* CONTENIDO PRINCIPAL */}
      <div className="flex flex-col items-center justify-center flex-grow">
        
        {/* Título + botón inicio */}
        <div className="flex items-center justify-center gap-4 mb-2">
          <h1
            className={`text-4xl sm:text-5xl text-center font-serif ${libreBaskerville.className} text-black`}
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            El Florista
          </h1>

          <button
            onClick={() => router.push('/')}
            className="flex items-center justify-center w-11 h-11 bg-white text-black rounded-full shadow-lg hover:bg-gray-200 transition"
            title="Ir al inicio"
          >
            <HomeIcon className="w-6 h-6" />
          </button>
        </div>

        <hr className="border-t-2 border-gray-400 w-70 sm:w-90 mx-auto mb-10 rounded-full" />

        {/* Opciones */}
        <div className="flex flex-col sm:flex-row gap-12 justify-center items-center">

          {/* Ramos Clásicos */}
          <div
            onClick={() => router.push('/rosas/ramos_clasicos')}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition w-44"
          >
            <div className="w-44 h-44 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition">
              <img
                src="/images/rosa/ramo_clasico.jpg"
                alt="Rosas Clásicas"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="mt-4 text-lg font-semibold text-black text-center">
              Ramos Clásicos
            </span>
          </div>

          {/* Ramos Premium */}
          <div
            onClick={() => router.push('/rosas/premium')}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition w-44"
          >
            <div className="w-44 h-44 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition">
              <img
                src="/images/rosa/ramo_premium.jpg"
                alt="Rosas Premium"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="mt-4 text-lg font-semibold text-black text-center">
              Ramos Premium
            </span>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-16 w-full border-t border-gray-300 py-6 text-center text-sm sm:text-base">
        <p className="mt-4 text-gray-500 text-xs">
          © {new Date().getFullYear()} El Florista — Todos los derechos reservados.
        </p>
      </footer>

    </div>
  );
}
