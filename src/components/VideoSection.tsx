import React from "react";

export default function VideoSection() {
  const videos = [
    { id: "1183918183" },
    { id: "1183920165" },
    { id: "1183924661" },
    { id: "1183919769" }
  ];

  return (
    <section className="relative bg-white pt-12 pb-24 overflow-hidden">
      <div className="w-full space-y-8">
        <h2 className="text-3xl font-extrabold tracking-tight font-display text-center leading-tight px-6">
          Videos del inflador inteligente
        </h2>

        <div className="relative w-full px-1">
          <div className="grid grid-cols-2 gap-1 w-full">
            {videos.map((video) => (
              <div 
                key={video.id} 
                className="relative aspect-[9/16] bg-black overflow-hidden"
              >
                <iframe
                  src={`https://player.vimeo.com/video/${video.id}?background=1&badge=0&autopause=0&player_id=0&app_id=58479`}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  title={`Vimeo video ${video.id}`}
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.83C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-primary"></path>
        </svg>
      </div>
    </section>
  );
}
