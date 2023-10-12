import { HiOutlinePencil } from "react-icons/hi";
import { FaRegPenToSquare } from "react-icons/fa6";
import bullet from './assets/Bullet.svg';

const toolsArray = [
    {
        icon: <HiOutlinePencil strokeWidth={1} size={24} stroke='#ea7e00' />,
        title: 'Blog writing',
        description: 'Generate the best blog post to fit your audience with just few clicks of a button'
    },
    {
        icon: <FaRegPenToSquare strokeWidth={1} size={24} stroke='#00C48C' />,
        title: 'Product description',
        description: 'Instantly generate engaging product descriptions that sell'
    },
    {
        icon: <img src={bullet} width={24} />,
        title: 'Product description',
        description: 'Instantly generate engaging product descriptions that sell'
    },
    {
        icon: <HiOutlinePencil strokeWidth={1} size={24} stroke='#ea7e00' />,
        title: 'Blog writing',
        description: 'Generate the best blog post to fit your audience with just few clicks of a button'
    },
    {
        icon: <FaRegPenToSquare strokeWidth={1} size={24} stroke='#00C48C' />,
        title: 'Product description',
        description: 'Instantly generate engaging product descriptions that sell'
    },
    {
        icon: <img src={bullet} width={24} />,
        title: 'Product description',
        description: 'Instantly generate engaging product descriptions that sell'
    }
];

export default toolsArray;
