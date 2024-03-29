import { ContactLinks } from ".";

export default function Footer() {
  return (
    <div className="gray-border mt-10 flex h-[50px] items-center justify-between border-t-[1px] px-1 sm:mt-auto md:px-10">
      <p className="subtle-text text-[10px] italic md:text-sm">
        © 2023 sqsung devlog. All Rights Reserved.
      </p>
      <ContactLinks />
    </div>
  );
}
