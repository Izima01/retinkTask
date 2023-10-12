import { AiOutlineSearch } from 'react-icons/ai';
import { GiSettingsKnobs } from 'react-icons/gi';
import { IoCloseCircle } from 'react-icons/io5';

const SearchBar = () => {
  return (
    <div className="shadow-md shadow-[#EBEAEF] rounded-lg min-w-[360px] relative">
        <input type="search" className="w-full border-[#EBEAEF] border bg-white py-3 pr-3 pl-10 placeholder:text-retink-grey text-retink-grey placeholder:text-xs text-sm rounded-lg outline-none" placeholder="Search for templates, projects, etc" />
        <AiOutlineSearch className="absolute left-3 top-3" size={24} />
        <GiSettingsKnobs className="absolute right-10 top-3 text-[#d2d1d6]" size={20} />
        <IoCloseCircle className="absolute right-3 top-3.5 text-[#d2d1d6]" size={18} />
    </div>
  )
}

export default SearchBar