"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Home() {
  const btnArr = [
    "black",
    "red",
    "orange",
    "pink",
    "green",
    "violet",
    "purple",
    "fuchsia",
    "yellow",
    "lime",
    "aqua",
    "beige",
    "teal",
  ];
  const [color, setColor] = useState("");

  useEffect(() => {
    document.body.style.backgroundColor = color;
  });

  return (
    <main className="max-w-7xl h-screen m-auto dark">
      {btnArr.map((clr, i) => (
        <Button key={i} onClick={() => setColor(clr)} variant={"outline"}>
          {clr.toUpperCase()}
        </Button>
      ))}
    </main>
  );
}
