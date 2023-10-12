import { HiOutlineTrendingUp } from 'react-icons/hi';

// eslint-disable-next-line react/prop-types
const ToolBox = ({ icon, title, description }) => {
  return (
    <article className="toolsCard transition-transform duration-100 p-1.5 lg:px-5 lg:pt-4 lg:pb-7 rounded-lg bg-white flex flex-col gap-4">
        <div className="flex w-full justify-between items-center">
            {icon}
            <HiOutlineTrendingUp />
        </div>
        <div>
            <h4 className='font-semibold text-sm mb-3 text-[#1D1437]'>{title}</h4>
            <p className='text-[#77737F] text-xs font-semibold'>{description}</p>
        </div>
    </article>
  )
}

export default ToolBox