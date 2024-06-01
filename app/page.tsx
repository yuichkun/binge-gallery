export default function Home() {
  const gradient = "bg-gradient-to-bl from-slate-900 to-slate-700";
  const size = "min-h-screen min-w-screen";
  return (
    <main className={`${gradient} ${size} text-lightGray`}>
      <h1 className="text-2xl md:text-6xl font-bold text-center pt-4 md:pt-8">
        BINGE&apos;s 3D Portfolio
      </h1>
    </main>
  );
}
