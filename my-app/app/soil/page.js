import Image from 'next/image';
import Link from 'next/link';

const soils = [
  { name: 'Red Soil', image: '/pic/redsoil.jpeg', description: 'Rich in iron, best for crops like groundnut, cotton, and pulses.' },
  { name: 'Black Soil', image: '/pic/blacksoil.jpeg', description: 'High moisture retention, ideal for cotton, wheat, and oilseeds.' },
  { name: 'Alluvial Soil', image: '/pic/alluvialsoil.jpeg', description: 'Highly fertile, supports rice, wheat, and sugarcane cultivation.' },
  { name: 'Clay Soil', image: '/pic/claysoil.jpeg', description: 'Retains water well, best for paddy, vegetables, and wetland crops.' }
];

export default function SoilCards() {
  return (
    <div className="bg-amber-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Soil Types</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {soils.map((soil, index) => (
            <Link key={index} href={`/soil/${soil.name.toLowerCase().split(' ', 1)}`}>
              <div className="bg-orange-300 rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl transition w-full h-96 flex flex-col">
                <div className="w-full h-[240px] relative rounded-lg overflow-hidden">
                  <Image src={soil.image} alt={soil.name} layout="fill" objectFit="cover" />
                </div>
                <h2 className="text-xl font-semibold mt-4">{soil.name}</h2>
                <p className="text-gray-700 flex-grow">{soil.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
