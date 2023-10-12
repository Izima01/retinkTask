import SearchBar from "./SearchBar";
import coin from '../assets/coin.svg'
import { BsCalendar4Week } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";
import avatar from '../assets/avatar.png';

// eslint-disable-next-line react/prop-types
const HeaderDesktop = ({ setShowDialog }) => {
  return (
    <header className='hidden lg:flex shadow-lg w-full'>
        <section className="flex px-3 py-4 items-center w-3/4 justify-between">
            <SearchBar />
            <div className="flex gap-4">
                <button onClick={() => setShowDialog(true)} className="bg-[#754DE8] text-white rounded-3xl py-1.5 px-6">Create Content</button>
                <button className="bg-[#F1EDFD] flex gap-2 py-1.5 px-3 rounded-3xl text-lg font-semibold">
                    <img src={coin} alt="" />
                    20
                </button>
            </div>
        </section>

        <section className="flex items-center justify-between w-1/4 bg-[#F1EDFD] px-3">
            <div className='hover:bg-[#EAE4FC] focus:bg-[#5e3eba] px-2 rounded-[10px]'>
                <BsCalendar4Week size={28} />
            </div>
            <div className='hover:bg-[#EAE4FC] focus:bg-[#5e3eba] px-2 rounded-[10px]'>
                <GrNotification size={28} />
            </div>
            <img src={avatar} className='rounded-xl' alt="" />
        </section>
    </header>
  )
}

export default HeaderDesktop