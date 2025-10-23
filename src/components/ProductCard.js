// src/components/ProductCard.js
export default function ProductCard({ name, price, image }) {
  // Mensaje que se enviará por WhatsApp
  const mensaje = encodeURIComponent(`¡Hola! 💐 Quiero encargar el ${name} por Gs. ${price}`);
  const whatsapp = `https://wa.me/595987288031?text=${mensaje}`; 

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-64">
      <img src={image} alt={name} className="rounded-xl mb-2" />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600 mb-2">Gs. {price}</p>
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
      >
        Comprar por WhatsApp
      </a>
    </div>
  );
}
