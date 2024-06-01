import { Gallery } from "@/app/components/Gallery";
import { WORKS } from "@/constants";

export default function WorkPage({ params }: { params: { slug: string } }) {
  const work = WORKS.find((w) => w.slug === params.slug);
  if (!work) return <div>Work named &quot;{params.slug}&quot; not found</div>;
  return (
    <div>
      <Gallery {...work} />
    </div>
  );
}
