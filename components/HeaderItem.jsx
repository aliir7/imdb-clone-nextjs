import Link from "next/link";

function HeaderItem({ title, address, SignedIn, UserButton }) {
  return (
    <ul className="flex gap-4">
      {SignedIn ? (
        <signedIn>
          <UserButton />
        </signedIn>
      ) : null}
      <li className="mx-5 hidden hover:text-amber-600 sm:block">
        <Link href={address}>{title}</Link>
      </li>
    </ul>
  );
}

export default HeaderItem;
