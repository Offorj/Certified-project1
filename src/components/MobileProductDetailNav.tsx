import Link from 'next/link';
import { FaRegHeart, FaRegUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import Image from 'next/image';
import { FaBars } from "react-icons/fa";
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext'; 

const MobileProductDetailNav = ({ isMenuOpen, toggleMenu }: any) => {
    const { cart } = useCart(); 
    const { wishlist } = useWishlist();

    const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    const wishlistQuantity = wishlist.length; 

    return (
        <nav className='md:hidden font-sans'>
            <div className='flex justify-between items-start px-[32px] py-[24px]'>
                <div>
                    <Link href="/">
                        <Image src={"/images/Bandage.png"} height={32} width={108} alt='logo' className='max-w-[70px] md:max-w-full' />
                    </Link>
                </div>
                <div className="flex items-center gap-[15px]">
                    <button onClick={toggleMenu}>
                        <FaBars height={24} width={24}  />
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className='w-full bg-[#FFFFFF] flex flex-col items-center space-y-4 text-[#737373] text-[30px] font-normal pt-4'>
                    <ul className="flex-1 flex flex-col items-center gap-[10px]">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Shop</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/pages">Pages</Link></li>
                    </ul>
                    <ul className="flex flex-col items-center text-[#23A6F0] text-[30px] space-y-4 pt-4">
                        <div className='flex items-center'>
                            <div className='flex items-center'>
                                <FaRegUser className='mr-1' />
                                <li><Link href="/Login">Login</Link></li>
                            </div>
                            /
                            <li><Link href="/Signup">Register</Link></li>
                        </div>
                        <li><FaSearch className='m-auto' /></li>
                        <li className='flex items-center gap-[2px]'><Link href="/cart" className="text-[#23A6F0] hover:text-blue-700">
                        <FaShoppingCart />
                    </Link>
                    {cartQuantity > 0 && (
                        <span className=" text-[#23A6F0] text-[20px]  py-1">
                            {cartQuantity}
                        </span>
                    )}</li>
                        <li className='flex items-center gap-[2px]'>
                    <Link href="/wishlist" className="text-[#23A6F0] hover:text-blue-700">
                        <FaRegHeart className='text-[#23A6F0] hover:text-blue-700' />
                    </Link>
                    {wishlistQuantity > 0 && (
                        
                        <span className="text-[#23A6F0] text-[20px] py-1">
                            {wishlistQuantity}
                        </span>
                    )}
                </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default MobileProductDetailNav;
