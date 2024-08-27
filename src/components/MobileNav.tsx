import Link from 'next/link';
import { FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa';


const MobileHomeNav = ({ isMenuOpen, toggleMenu }: any) => {
    return (
        <nav className='flex justify-between md:hidden items-start px-[32px] py-[24px] font-sans'>
            <div>
                <a href="/">
                    <p className='max-w-[70px] md:max-w-full font-sans font-bold'>Bandage</p>
                </a>
            </div>
            {isMenuOpen && (
                <ul className="w-full bg-[#FFFFFF] flex flex-col items-center space-y-4 py-[82px] text-[#737373] text-[30px] font-normal gap-[30px]">
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Product</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            )}
            <div className="flex items-center gap-[15px]">
                <FaSearch/>
                <Link href="/cart">
                    <FaShoppingCart/>
                </Link>
                <button onClick={toggleMenu}>
                    <FaBars/>
                </button>
            </div>
        </nav>
    );
};

export default MobileHomeNav;
