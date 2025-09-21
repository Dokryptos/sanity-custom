import Link from "next/link";

interface MenuItem {
  label: string;
  href: string;
  sub: {
    label: string;
    href: string;
  }[];
}

interface NavbarMarqueeProps {
  menuData: MenuItem[];
}

export default function NavbarMarquee({ menuData }: NavbarMarqueeProps) {
  return (
    <div
      role="navigation"
      className="w-full fixed flex top-10 tablet:top-14 z-40 bg-white shadow-md select-none gap-10 overflow-x-auto whitespace-nowrap pl-5"
    >
      {menuData.map((menuTitle, index) => (
        <div key={index}>
          <Link
            className="text-center font-medium text-sm "
            href={menuTitle.href || "#"}
          >
            <p className="hover:opacity-60 duration-400 transition-transform ease-in-out">
              {menuTitle.label}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
