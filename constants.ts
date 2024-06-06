const _WORKS = [
  {
    name: "Dancing Murasaki",
    url: "/dancing_murasaki.glb",
    slug: "dancing-murasaki",
  },
  // tmp
  {
    name: "Astronaut",
    url: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
    slug: "astronaut",
  },
  {
    name: "Chair",
    url: "/chair.glb",
    slug: "chair",
  },
] satisfies App.Work[];

// copy _WORKS 100 times
export const WORKS = Array.from({ length: 100 }, () => _WORKS).flat();
