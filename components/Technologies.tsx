import Image from "next/image";
import { technologies } from "@/lib/data";

export default function Technologies() {
  const loop = [...technologies, ...technologies];

  return (
    <section id="technologies" className="section overflow-hidden">
      <div className="section-inner text-center">
        <p className="eyebrow">Ma boîte à outils</p>
        <h2 className="section-title">Technologies</h2>
        <p className="section-lead mx-auto">
          Découvrez les technologies que j&apos;utilise dans mes projets.
        </p>
      </div>

      <div className="relative mt-14 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max gap-4 animate-marquee">
          {loop.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="card flex flex-col items-center justify-center gap-3 px-8 py-6 min-w-[140px]"
            >
              <div className="relative h-10 w-10">
                <Image src={tech.img} alt={tech.name} fill className="object-contain" sizes="40px" />
              </div>
              <span className="text-sm text-zinc-300 whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
