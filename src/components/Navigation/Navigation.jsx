import LogoNav from "../../assets/LogoNav.png";

const Navigation = () => {
  return (
    <nav className="w-full flex justify-between bg-primaryColor py-6 pr-16 pl-20 text-white">
      <img src={LogoNav} alt="logo" />
      <ul className="flex items-center gap-6">
        <li>SUCURSAL 1</li>
        <div className="w-[1px] h-full bg-white"></div>
        <li className="w-10 h-10 rounded-full bg-white">
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
