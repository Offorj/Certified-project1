
import { FaInstagram, FaPhone, FaYoutube, FaEnvelope, FaTwitter, FaFacebook } from 'react-icons/fa6';

const Contactnav = () => {
    return (
        <nav className='custom-md:block bg-[#136313] text-white hidden font-sans'>
            <div className='max-w-full lg:max-w-[1439px] flex text-[8px] items-center justify-between h-auto m-auto px-4 sm:px-8 lg:px-[32px] py-2 sm:py-4 lg:py-[24px] text-xs lg:text-sm'>
                <span className='flex justify-center items-center gap-4 sm:gap-6 lg:gap-[29.5px]'>
                    <span className='flex items-center gap-2 sm:gap-4 lg:gap-[5px] hover:text-[#5ab145] transition-colors duration-300'>
                        <FaPhone size={10} className='w-1 h-1 sm:w-4 sm:h-4' />
                        <p> (225) 555-0118 </p>
                    </span>
                    <span className='flex items-center gap-2 sm:gap-4 lg:gap-[5px] hover:text-[#5ab145] transition-colors duration-300'>
                        <FaEnvelope size={10} className='w-2 h-2 sm:w-4 sm:h-4' />
                        <p> michelle.rivera@example.com </p>
                    </span>
                </span>
                <p className='hover:text-[#5ab145]'> Follow Us and get a chance to win 80% off </p>
                <div className='flex justify-center items-center gap-3 sm:gap-5 lg:gap-[15.5px]'>
                    <span className='text-sm transition-colors duration-300'>
                        <p className='hover:text-[#5ab145]'> Follow Us : </p>
                    </span>
                    <span className='hover:text-[#5ab145] transition-colors duration-300'>
                        <a href="#"><FaInstagram size={10} className='w-2 h-2 sm:w-4 sm:h-4' /></a>
                    </span>
                    <span className='hover:text-[#5ab145] transition-colors duration-300'>
                        <a href="#"><FaYoutube size={10} className='w-2 h-2 sm:w-4 sm:h-4' /></a>
                    </span>
                    <span className='hover:text-[#5ab145] transition-colors duration-300'>
                        <a href="#"><FaFacebook size={10} className='w-2 h-2 sm:w-4 sm:h-4' /></a>
                    </span>
                    <span className='hover:text-[#5ab145] transition-colors duration-300'>
                        <a href="#"><FaTwitter size={10} className='w-2 h-2 sm:w-4 sm:h-4' /></a>
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Contactnav;
