import { AiFillAppstore } from 'react-icons/ai';
import avatar from '../assets/avatar.png';

// eslint-disable-next-line react/prop-types
const HeaderMobile = ({ setShowNav }) => {
  return (
    <header className='lg:hidden flex justify-between w-11/12 mx-auto pt-3 items-center'>
        <button onClick={() => setShowNav(prev => !prev)} className='bg-[#e2e2e27f] rounded-xl p-1.5'>
          <AiFillAppstore size={28} />
        </button>
        <select name="" id="" className='px-4 py-2 round text-sm font-medium rounded-lg bg-white'>
          <option value="zara">Zara ventures</option>
        </select>
        <img src={avatar} className='rounded-xl' alt="" />
    </header>
  )
}

export default HeaderMobile
