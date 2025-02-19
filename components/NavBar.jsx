import NavBarItem from "./NavBarItem";

function NavBar() {
  return (
    <div className="flex justify-center gap-6 bg-amber-100 p-4 lg:text-lg dark:bg-gray-600">
      <NavBarItem title="Trending" param="trending" />
      <NavBarItem title="TopRated" param="rated" />
    </div>
  );
}

export default NavBar;
