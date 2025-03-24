import Image from 'next/image';
import Link from 'next/link';

const crops = [
  { name: 'Apple', image: '/pic/apple.jpeg', description: 'Apples are rich in fiber and antioxidants.' },
  { name: 'Banana', image: '/pic/banana.jpeg', description: 'Bananas are a great source of potassium and vitamins.' },
  { name: 'Watermelon', image: '/pic/watermelon.jpeg', description: 'Watermelons are hydrating and rich in vitamins.' },
  { name: 'Orange', image: '/pic/orange.jpeg', description: 'Oranges are packed with vitamin C and fiber.' },
  { name: 'Mango', image: '/pic/yellow-mango.jpeg', description: 'Mangoes are high in vitamin A and fiber.' },
  { name: 'Chickpea', image: '/pic/chickpea.jpeg', description: 'Chickpeas are protein-rich legumes.' },
  { name: 'Maize', image: '/pic/maize.jpeg', description: 'Maize is a staple crop rich in carbohydrates.' },
  { name: 'Muskmelon', image: '/pic/muskmelon.jpeg', description: 'Muskmelons are hydrating fruits.' },
  { name: 'Pigeonpea', image: '/pic/pigeonpea.jpeg', description: 'Pigeonpeas are protein-packed legumes.' },
  { name: 'Blackgram', image: '/pic/blackgram.jpeg', description: 'Blackgram is a protein-rich pulse crop.' },
  { name: 'Coconut', image: '/pic/coconut.jpeg', description: 'Coconuts provide water, oil, and fiber.' },
  { name: 'Coffee', image: '/pic/coffee.jpeg', description: 'Coffee beans are rich in antioxidants.' },
  { name: 'Cotton', image: '/pic/cotton.jpeg', description: 'Cotton is a key fiber crop used in textiles.' },
  { name: 'Grapes', image: '/pic/grapes.jpeg', description: 'Grapes are rich in antioxidants and vitamins.' },
  { name: 'Jute', image: '/pic/jute.jpeg', description: 'Jute is a natural fiber crop used in textiles.' },
  { name: 'Kidneybean', image: '/pic/kidneybean.jpeg', description: 'Kidney beans are high in protein and fiber.' },
  { name: 'Lentil', image: '/pic/lentil.jpeg', description: 'Lentils are protein-packed legumes.' },
  { name: 'Mothbean', image: '/pic/mothbean.jpeg', description: 'Mothbeans are drought-resistant legumes.' },
  { name: 'Mungbean', image: '/pic/mungbean.jpeg', description: 'Mungbeans are rich in protein and fiber.' },
  { name: 'Papaya', image: '/pic/papaya.jpeg', description: 'Papayas are rich in vitamin C and enzymes.' },
  { name: 'Pomegranate', image: '/pic/pomegranate.jpeg', description: 'Pomegranates are antioxidant-rich fruits.' },
  { name: 'Rice', image: '/pic/rice.jpeg', description: 'Rice is a staple food providing energy.' }
];

export default function CropCards() {
  return (
    <div className="bg-amber-100 min-h-screen py-40">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center m-5">Crop Information</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {crops.map((crop, index) => (
            <Link key={index} href={`/crop/${crop.name.toLowerCase()}`} passHref>
              <div className="bg-orange-300 rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl transition h-96">
                <div className="w-full h-60 relative rounded-lg overflow-hidden">
                  <Image src={crop.image} alt={crop.name} layout="fill" objectFit="cover" />
                </div>
                <h2 className="text-xl font-semibold mt-4">{crop.name}</h2>
                <p className="text-gray-700">{crop.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
