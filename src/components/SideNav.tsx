import { sidenav } from "../temp";

const SideNav = () => {
    return (
        <div className="bg-white md:col-span-1 shadow-md rounded-xl pr-4">
          <span className="pt-3 text-2xl text-green-500 font-bold flex justify-center">
            QwikSlot
          </span>
            <ul className="flex flex-col gap-3 pt-6 flex-grow overflow-auto">
                {sidenav.map((menu, index) => (
                    <li key={index} className="flex justify-center items-center rounded-xl bg-green-100 pb-3 pt-2 transition-colors duration-300 hover:bg-green-200 cursor-pointer">
                        {menu}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideNav;
