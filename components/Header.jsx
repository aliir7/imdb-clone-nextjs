import Link from "next/link";

function Header() {
  return (
    <div className="mx-2 flex max-w-6xl items-center justify-between py-6 sm:mx-auto">
      <div className="flex">HeaderItem home HeaderItem about</div>
      <div className="flex items-center space-x-5">
        darkMode
        <Link href="/">
          <h2 className="text-2xl">
            <span className="me-1 rounded-lg bg-amber-500 px-2 py-1 font-bold">
              Imdb
            </span>
            <span className="hidden text-xl sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
