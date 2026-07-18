import Image from "next/image";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <Image
        src="/background.jpg"
        alt=""
        fill
        priority
        quality={100}
        unoptimized
        className="object-cover object-center md:object-right"
        sizes="100vw"
      />
    </div>
  );
}
