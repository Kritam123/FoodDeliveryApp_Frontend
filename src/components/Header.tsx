import { Link } from "react-router-dom";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import { useGetMyUser } from "@/api/MyUserApi";

const Header = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
    <div className="container mx-auto flex justify-between items-center">
      <Link
        to="/"
        className="text-3xl font-bold tracking-tight text-orange-500"
      >
        MernEats.com
      </Link>
      <div className="md:hidden">
        <MobileNav  currentUser={currentUser}/>
      </div>
      <div className="max-[780px]:hidden block">
        <MainNav currentUser={currentUser}/>
      </div>
    </div>
  </div>
  )
}

export default Header