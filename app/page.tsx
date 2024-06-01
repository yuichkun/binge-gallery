import { WORKS } from "@/constants";
import dynamic from "next/dynamic";

const DynamicPreview = dynamic(() => import("./components/Preview"), {
  ssr: false,
});

export default function Home() {
  const gradient = "bg-gradient-to-bl from-slate-900 to-slate-700";
  const size = "min-h-screen min-w-screen";
  return (
    <main className={`${gradient} ${size} text-lightGray`}>
      <h1 className="text-2xl md:text-6xl font-bold text-center pt-4 md:pt-8">
        BINGE&apos;s 3D Portfolio
      </h1>
      <ul className="flex flex-wrap justify-between mt-16">
        {WORKS.map((work) => (
          <li key={work.slug} className="md:w-1/3 w-full">
            <DynamicPreview work={work} />
          </li>
        ))}
      </ul>
    </main>
  );
}
