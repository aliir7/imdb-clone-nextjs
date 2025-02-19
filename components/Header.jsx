import Link from "next/link";
import HeaderItem from "./HeaderItem";
import DarkModeSwitch from "./ThemeProvider/DarkModeSwitch";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function Header() {
  return (
    <div className="mx-2 flex max-w-6xl items-center justify-between py-6 sm:mx-auto">
      <div className="flex">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <HeaderItem title="Sign in" address={"/sign-in"} />
        </SignedOut>
        <HeaderItem title="Home" address={"/"} />
        <HeaderItem title="About" address={"/About"} />
      </div>
      <div className="flex items-center space-x-6">
        <DarkModeSwitch />
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
