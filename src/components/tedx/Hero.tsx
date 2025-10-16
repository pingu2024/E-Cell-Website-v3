import React from "react";

export function Hero() {
  return (
    <section className="relative flex h-[93vh] items-center justify-center overflow-hidden text-center text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0">
          <iframe
            id="tedx-video"
            src="https://www.youtube.com/embed/F4Zu5ZZAG7I?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=F4Zu5ZZAG7I"
            className="absolute left-1/2 top-1/2 min-h-[100vh] min-w-[177.77vh] h-[56.25vw] w-[100vw] -translate-x-1/2 -translate-y-1/2"
            frameBorder={0}
            allowFullScreen
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-3xl px-8 text-white">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
          <span className="text-[#EB0028] font-semibold">TEDx</span> BITS-Pilani Dubai
        </h1>
        <p className="mb-8 text-xl font-light text-white">Ideas worth spreading</p>
        <div className="flex items-center justify-center gap-4">
          <a href="#about" className="inline-block border-2 border-white px-6 py-2 uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black">
            Learn More
          </a>
          <a href="#events" className="inline-block border-2 border-white px-6 py-2 uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black">
            Upcoming Events
          </a>
        </div>
      </div>
    </section>
  );
}


