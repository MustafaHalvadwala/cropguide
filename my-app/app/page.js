'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

  }, []);

  return (
    <main className="">

      <div className="bg-amber-100 grid grid-flow-col min-h-screen max-w-[100vw]" id="home">

        <div data-aos="fade-right" className="flex flex-col justify-center gap-5 min-w-[50vw] pl-20 text-balance">
          <p className="text-sm uppercase">Take Farming To The Next Level</p>
          <h1 className="text-5xl font-bold">Crop Guide:  Smart Farming, Smarter Choices</h1>

          <p className="text-lg">Empowering farmers with AI-driven insights to make informed decisions on crop selection. Maximize your yield, optimize your soil, and stay ahead with real-time recommendations tailored to your land and climate.</p>
          <p className="text-base font-semibold">✅Boost Yield &nbsp; &nbsp; &nbsp; 📈Optimize Resources &nbsp; &nbsp; &nbsp; 🌍Sustainable & Profitable Farming</p>

          <div className="flex gap-10">
            <button className="border border-black rounded-xl bg-lime-500 px-4 py-2 hover:-translate-y-1 hover:shadow-xl w-40">Sign Up</button>
            <button className="btn bg-orange-500 w-40">Log In</button>
          </div>
        </div>

        <div data-aos="fade-down" className="flex justify-center items-center min-w-[50vw]">
          <Image className="" src="/vegetable9.png" width="400" height="400" alt="Vegetable" priority={true} />
          <Image className="absolute translate-x-36 translate-y-16" src="/vegetable8.png" width="300" height="300" alt="Vegetable" />
          <Image className="absolute translate-x-40 translate-y-32" src="/vegetable11.png" width="100" height="100" alt="Vegetable" />
          <Image className="absolute -translate-x-36 translate-y-24" src="/vegetable4.png" width="150" height="150" alt="Vegetable" />
        </div>

      </div>

      <div className="grid grid-flow-col bg-lime-300 min-h-screen max-w-[100vw]" id="purpose">
        <div data-aos="fade-right" className="min-w-[50vw] flex justify-center items-center">
          <Image src="/farmer.jpg" className="border border-black rounded-3xl" width="500" height="500" alt="A farmer standing in a green field using a web app on his smartphone." />

        </div>

        <div data-aos="fade-left" className="flex flex-col justify-center gap-5 pr-20 min-w-[50vw] text-balance">
          <p className="text-sm uppercase">Transforme Agriculture with AI</p>
          <h2 className="text-5xl font-bold">Our Purpose: Empowering Change for a Sustainable Future</h2>
          <p className="text-lg">At the heart of every thriving community is a farmer. Our goal is to provide them with cutting-edge AI-powered crop recommendations, helping them adapt to climate changes, optimize resources, and meet market demands. Together, we’re building a stronger, more resilient agricultural ecosystem.</p>
          <p className="text-base font-semibold">🤝 For Farmers, By Innovation &nbsp; | &nbsp; Smarter Decisions &nbsp; | &nbsp; Stronger Communities 💪</p>
          <Image src="/vegetable12.png" className="absolute translate-x-96 -translate-y-44" width="150" height="150" alt="Vegetable" />
        </div>
      </div>

      <div className="bg-amber-100 min-h-screen max-w-[100vw] flex flex-col justify-center items-center text-center text-balance gap-3" id="features">
        <p className="text-sm uppercase">Use AI to Empower Agriculture with Insights, Predictions, and Smarter Decisions</p>

        <h2 className="text-5xl font-bold z-10">Our Features: Revolutionizing Farming with Smart Technology</h2>

        <div data-aos="fade-up" className="flex gap-10 mt-10">

          <Image src="/group4.png" className="absolute -translate-x-32 -translate-y-16 -z-10" width="175" height="175" alt="Vegetables" />

          <div className="flex flex-col items-center w-[25vw] gap-2">
            <Image src="/recommendation.jpg" className="border-2 border-black rounded-3xl" width="400" height="400" alt="A close-up of rich, fertile soil with AI-based crop suggestions appearing as holographic projections." />
            <h3 className="text-lg font-semibold">🌾 Grow the Right Crop</h3>
            <p className="text-base">Our AI analyzes soil and weather to help you grow the most sustainable crops for your land to cultivate.</p>
            <Link href="/recommendation">
              <button className="btn bg-lime-500 w-60 mt-5">Get Recommendation</button>
            </Link>
          </div>

          <div className="flex flex-col items-center w-[25vw] gap-2">
            <Image src="/prediction.jpg" className="border-2 border-black rounded-3xl" width="400" height="400" alt="A simple graph predicting crop prices displayed on a tablet or holographic screen." />
            <h3 className="text-lg font-semibold">💰 Maximize Your Profit</h3>
            <p className="text-base">Get AI-powered forecasts on crop prices so you can sell at the right amount and maximize your earnings.</p>
            <Link href="/predict">
              <button className="btn bg-orange-500 w-60 mt-5">Check Prices</button>
            </Link>
          </div>

          <div className="flex flex-col items-center w-[25vw] gap-2">
            <Image src="/insight.jpg" className="border-2 border-black rounded-3xl" width="400" height="400" alt="A magnified view of soil structure revealing its detailed composition. The image shows cross-sections of soil layers with visible roots, organic matter, and moisture." />
            <h3 className="text-lg font-semibold z-10">📢 Stay Ahead with Smart Insights</h3>
            <p className="text-base">Understand soil conditions, climate impact, and best farming practices to boost your yield.</p>
            <Link href="crop">
              <button className="btn bg-lime-500 w-60 mt-5">Explore Insights</button>
            </Link>
          </div>

          <Image src="/group3.png" className="absolute translate-x-[71rem] translate-y-[11rem] -z-10" width="225" height="225" alt="Vegetables" />

        </div>
      </div>

      <div className="bg-orange-300 min-h-screen max-w-[100vw]" id="benefits">
      </div>

      <div className="bg-amber-100 min-h-screen max-w-[100vw]" id="whether">
      </div>

    </main>
  );
}
