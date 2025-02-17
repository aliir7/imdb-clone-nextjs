import Link from "next/link";

function HeaderItem({ title, Icon, address }) {
  return (
    <ul className="flex gap-4">
      <li className="mx-5 hidden hover:text-amber-600 sm:block">
        <Link href={address}>{title}</Link>
      </li>
    </ul>
  );
}

export default HeaderItem;
