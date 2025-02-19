"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBarItem({ title, param }) {
  const genre = usePathname().split("/").at(2);

  return (
    <div>
      <Link
        className={`font-semibold hover:text-amber-600 ${genre === param ? "rounded-lg underline decoration-amber-500 decoration-4 underline-offset-8" : ""}`}
        href={`/top/${param}`}
      >
        {title}
      </Link>
    </div>
  );
}

export default NavBarItem;
