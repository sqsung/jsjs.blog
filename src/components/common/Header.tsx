import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="gray-border mb-auto flex h-[50px] items-center gap-5 border-b-[1px] px-1 sm:justify-between md:px-10">
      <Link href="/" className="flex items-center justify-center gap-3">
        <div className="relative h-[30px] w-[30px]">
          <Image src="/logo.png" alt="jsjs devlog logo" fill={true} />
        </div>
        <p className="hidden cursor-pointer font-code text-2xl font-bold italic text-[#5AF] sm:block">
          JSJS BLOG
        </p>
      </Link>
      {/* <nav className="regular-text flex gap-3 font-code text-sm font-bold tracking-wider sm:gap-5">
        <Link href="/categories" className="t-hover-blue">
          CATEGORIES
        </Link>
        <Link href="/resume" className="t-hover-blue">
          ABOUT
        </Link>
      </nav> */}
    </div>
  );
}
