"use client";
import "@google/model-viewer";

type Props = App.Work;

export function Gallery({ name, url }: Props) {
  return (
    <div className="relative">
      <h1>{name}</h1>
      <model-viewer
        style={{ width: "100vw", height: "100dvh" }}
        src={url}
        alt="A 3D model of an astronaut"
        auto-rotate
        camera-controls
      ></model-viewer>
    </div>
  );
}
