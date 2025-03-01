import Image from "next/image";

export default function Home() {
  return (
    <main className="">

      <div className="bg-amber-100 grid grid-flow-col min-h-screen max-w-[100vw]">

        <div className="flex flex-col justify-center gap-5 min-w-[50vw] pl-20">
          <p className="text-lg">TAKE FARMING TO A NEXT LEVEL</p>
          <h1 className="text-8xl">Crop Guide</h1>

          <p className="text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis omnis libero dignissimos totam voluptates itaque perferendis! Qui blanditiis saepe dolorem. Explicabo necessitatibus vel qui atque fuga ut laudantium eius ea?</p>

          <div className="flex gap-10">
            <button className="border border-black rounded-xl bg-lime-500 px-4 py-2 hover:-translate-y-1 hover:shadow-xl w-40">Recommendation</button>
            <button className="btn bg-orange-500 w-40">Predict</button>
          </div>
        </div>

        <div className="flex justify-center items-center min-w-[50vw] pr-20">
          <Image className="" src="/vegetable9.png" width="400" height="400" alt="Vegetable" />
          <Image className="absolute bottom-44 right-16" src="/vegetable8.png" width="350" height="350" alt="Vegetable" />
          <Image className="absolute bottom-36 right-36" src="/vegetable11.png" width="125" height="125" alt="Vegetable" />
          <Image className="absolute bottom-36 right-96" src="/vegetable4.png" width="200" height="200" alt="Vegetable" />


        </div>

      </div>

      <div className="grid grid-flow-col bg-lime-300 min-h-screen max-w-[100vw]">
        <div className="min-w-[50vw] flex justify-center items-center">
          <Image src="/none" className="border border-black" width="500" height="500" alt="Recomendation" />

        </div>

        <div className="flex flex-col justify-center gap-5 pr-20 min-w-[50vw]">
          <p className="text-lg">ABOUT US</p>
          <h2 className="text-8xl">Meet the Minds</h2>
          <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sed laboriosam facere, non delectus ullam placeat dolorum debitis eveniet sint atque officia. Doloremque dolore magnam.</p>
        </div>
      </div>

      <div className="bg-amber-100 min-h-screen max-w-[100vw] flex flex-col justify-center items-center gap-5">
        <p className="text-lg">OUR STORY</p>

        <h2 className="text-5xl">Showing the Seeds of an Organic Revolution</h2>

        <div className="flex gap-10 text-center">

          <div className="flex flex-col items-center w-[25vw] gap-5">
            <Image src="/after.jpg" className="border-2 border-black rounded-3xl" width="500" height="500" alt="After" />
            <h3 className="text-3xl">Growing Together: Evolution and Expansion</h3>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quisquam repellendus accusamus eum qui suscipit error possimus?</p>
            <button className="btn bg-lime-500 w-40">Predict</button>
          </div>
          
          <div className="flex flex-col items-center w-[25vw] gap-5">
            <Image src="/before.jpg" className="border-2 border-black rounded-3xl" width="500" height="500" alt="Before" />
            <h3 className="text-3xl">Rooted in Tradition: The Early Years of Our Farm</h3>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur labore, aperiam perferendis eius nobis, adipisicing elit rkop.</p>
            <button className="btn bg-orange-500 w-40">Predict</button>
          </div>

          <div className="flex flex-col items-center w-[25vw] gap-5">
            <Image src="/after.jpg" className="border-2 border-black rounded-3xl" width="500" height="500" alt="After" />
            <h3 className="text-3xl">Growing Together: Evolution and Expansion</h3>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quisquam repellendus accusamus eum qui suscipit error possimus?</p>
            <button className="btn bg-lime-500 w-40">Predict</button>
          </div>

        </div>
      </div>

    </main>
  );
}
