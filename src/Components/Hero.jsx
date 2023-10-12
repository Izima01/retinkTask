import HeaderMobile from "./HeaderMobile";
import bg from '../assets/bg-hero.png';
import bgBig from '../assets/bg-hero-big.png';
import { AiOutlineSearch } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
const Hero = ({ setShowNav, setShowDialog }) => {
  return (
    <section className="w-full h-64 relative">
        <img src={bg} className="absolute top left-0 right-0 w-full -z-10 rounded-3xl lg:rounded-2xl h-64 lg:hidden" />
        <img src={bgBig} className="absolute top left-0 right-0 w-full -z-10 rounded-3xl lg:rounded-2xl hidden lg:block h-64" />
        <HeaderMobile setShowNav={setShowNav} />
        <div className="w-11/12 mx-auto lg:ml-7 lg:mr-12">
          <h1 className="text-3xl lg:text-5xl text-retink-grey font-semibold pt-8">Hey James!</h1>
          <p className="mt-1 lg:mt-2 font-medium lg:text-xl text-retink-grey mb-14 lg:mb-10">Lets create something awesome today <span>✨💫</span></p>

          <button onClick={() => setShowDialog(true)} className="border border-[#754DE8] text-[#754DE8] bg-white rounded-3xl py-1.5 px-6 hidden lg:block">Start Creating</button>

          <div className="w-full relative top-5 shadow-md shadow-[#EBEAEF] rounded-xl lg:hidden">
            <input type="search" className="w-full border-none bg-white py-3 pr-3 pl-10 placeholder:text-retink-grey text-retink-grey placeholder:text-xs text-sm rounded-xl outline-none" placeholder="Search for templates, projects, etc" />
            <AiOutlineSearch className="absolute left-3 top-3" size={20} />
          </div>
        </div>
    </section>
  )
}

export default Hero