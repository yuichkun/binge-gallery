"use client";
import "@google/model-viewer";
import Link from "next/link";

export function Preview({ work }: { work: App.Work }) {
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
          auto-rotate
          rotation-per-second="2000%"
          auto-rotate-delay={0}
        />
      </Link>
    </div>
  );
}
