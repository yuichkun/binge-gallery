"use client";
import "@google/model-viewer";
import Link from "next/link";

export default function Preview({ work }: { work: App.Work }) {
  const speed = getRandomRange(1000, 2000);
  return (
    <div className="">
      <Link className="relative" href={`/works/${work.slug}`}>
        {/* overlay */}
        <div className="absolute z-10 w-full h-full bg-black opacity-40" />
        <div className="absolute z-10 w-full h-full text-white font-bold grid place-content-center">
          {work.name}
        </div>
        <model-viewer
          style={{
            width: "100%",
          }}
          src={work.url}
          autoplay
          auto-rotate
          rotation-per-second={`${speed}%`}
          auto-rotate-delay={0}
        />
      </Link>
    </div>
  );
}

function getRandomRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
