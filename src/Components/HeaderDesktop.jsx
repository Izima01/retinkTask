import SearchBar from "./SearchBar";
import coin from '../assets/coin.svg'
import { BsCalendar4Week } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";
import avatar from '../assets/avatar.png';
import { auth } from "../firebaseConfig";

// eslint-disable-next-line react/prop-types
const HeaderDesktop = ({ setShowDialog }) => {
  return (
    <header className='hidden lg:flex shadow-lg w-full'>
        <section className="flex px-3 py-4 items-center w-8/12 justify-between">
            <SearchBar />
            <div className="flex gap-3.5">
                <button onClick={() => setShowDialog(true)} className="bg-[#754DE8] text-white rounded-3xl py-1.5 px-4">Create Content</button>
                <button className="bg-[#F1EDFD] flex gap-2 py-1.5 px-3 rounded-3xl text-lg font-semibold">
                    <img src={coin} alt="" />
                    20
                </button>
            </div>
        </section>

        <section className="flex items-center justify-between w-4/12 bg-[#F1EDFD] px-2">
            <button className='hover:bg-[#EAE4FC] focus:bg-[#5e3eba] p-2 rounded-[10px]'>
                <BsCalendar4Week size={28} />
            </button>
            <button className='hover:bg-[#EAE4FC] focus:bg-[#5e3eba] p-2 rounded-[10px]'>
                <GrNotification size={28} />
            </button>
            <h3 className="text-[#754de8] font-semibold px-1">{auth.currentUser?.displayName || "John Joanna"}</h3>
            <img src={auth.currentUser?.photoURL || avatar} className='rounded-xl w-10' alt="" />
        </section>
    </header>
  )
}

export default HeaderDesktop