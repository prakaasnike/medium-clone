import Image from 'next/image';
import Link from 'next/link';

function Header() {
    return (
        <header className='border-b-2 border-shadow-sm'>
            <div className='flex items-center space-x-5 justify-between p-5 max-w-6xl mx-auto'>
                <Link href="/" passHref>
                    <Image className='w-40 object-contain cursor-pointer' src="/medium.svg" alt="Medium Logo" width={161} height={24} />
                </Link>
                <div className='flex items-center space-x-5'>
                    <div className='hidden md:inline-flex items-center space-x-5 text-sm cursor-pointer'>
                        <h3 className='cursor-pointer'>Our story</h3>
                        <h3 className='cursor-pointer'>Membership</h3>
                        <h3 className='cursor-pointer'>Write</h3>
                    </div>
                    <div className='flex space-x-5 items-center text-sm'>
                        <h3 className='cursor-pointer'>Sign In</h3>
                        <h3 className='cursor-pointer bg-black text-white rounded-full px-5 py-2 flex items-center justify-center'>Get started</h3>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
