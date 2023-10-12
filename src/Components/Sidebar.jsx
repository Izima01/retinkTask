import logo from '../assets/Logo.svg';
import { GoHomeFill } from 'react-icons/go';
import { BiBookContent } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import { IoLogOutOutline } from 'react-icons/io5';

const Sidebar = () => {
  return (
    <aside className="py-5 px-3 bg-[#F1EDFD] flex flex-col justify-between h-full items-center">
        <div className='flex flex-col gap-8 items-center'>
            <img src={logo} className='w-9' alt="" />
            <button className='hover:bg-[#EAE4FC] focus:bg-[#5e3eba] px-3 py-4 rounded-[10px]'>
                <GoHomeFill size={20} />
            </button>
            <button className='hover:bg-[#EAE4FC] focus:bg-[#5e3eba] px-3 py-4 rounded-[10px]'>
                <BiBookContent size={20} />
            </button>
        </div>

        <div className='flex flex-col gap-8 items-center'>
            <button className='hover:bg-[#EAE4FC] focus:bg-[#5e3eba] px-3 py-4 rounded-[10px]'>
                <AiOutlineSetting size={20} />
            </button>
            <button className='hover:bg-[#EAE4FC] focus:bg-[#5e3eba] px-3 py-4 rounded-[10px]'>
                <IoLogOutOutline size={20} />
            </button>
        </div>
    </aside>
  )
}

export default Sidebar