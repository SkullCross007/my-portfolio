import Link from 'next/link'
import Image from 'next/image' // 1. Add this import

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 py-4 md:py-6 flex justify-between items-center">
        
        {/* LOGO: Swapped text for an Image component */}
        <div className="relative">
          <Link href="/">
            <Image 
              src="/logop.png" // 2. Ensure this matches your filename in /public
              alt="Subham Logo"
              width={70}      // 3. Adjust width to your liking
              height={70}     // 4. Adjust height to your liking
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>

        {/* NAV ITEMS */}
        <div className="flex gap-6 md:gap-10 text-[12px] md:text-xs font-bold tracking-widest uppercase">
          <Link href="/work" className="hover:text-red-600 transition-colors">WORK</Link>
          <Link href="/about" className="hover:text-red-600 transition-colors">ABOUT</Link>
          <Link href="/contact" className="hover:text-red-600 transition-colors">CONTACT</Link>
        </div>
      </div>
    </nav>
  )
}