import React from 'react';
import showcase1 from "../assets/img/showcase-1.jpeg"; 
import product1 from "../assets/img/showcase-2.jpeg"; 
import product2 from "../assets/img/showcase-3.jpeg"; 
import product3 from "../assets/img/showcase-4.jpeg"; 

const Showcase = () => {
  return (
    <section className="min-h-screen bg-black flex justify-center items-center p-6 md:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6 max-w-7xl w-full">
        {/* Left Showcase Image - takes 3/5 of the grid on large screens */}
        <div className="lg:col-span-3 bg-zinc-800/50 rounded-3xl overflow-hidden p-3 h-[500px] md:h-[600px]">
          <div className="w-full h-full rounded-2xl overflow-hidden">
            <img src={showcase1} alt="Showcase" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right Side - 2/5 of the grid with nested grid for the 3 images */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4 md:gap-6 h-[500px] md:h-[600px]">
          {/* Top Two Images */}
          <div className="bg-zinc-800/50 rounded-3xl overflow-hidden p-3">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <img src={product1} alt="Product 1" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="bg-zinc-800/50 rounded-3xl overflow-hidden p-3">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <img src={product2} alt="Product 2" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Bottom Larger Image */}
          <div className="col-span-2 bg-zinc-800/50 rounded-3xl overflow-hidden p-3">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <img src={product3} alt="Product 3" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
