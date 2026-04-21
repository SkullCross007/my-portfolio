import Image from 'next/image'

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/subham-sahoo-426915202/", src: "/linkedin.png" },
  { name: "Instagram", href: "https://www.instagram.com/skull_cross_", src: "/instagram.png" },
  { name: "Behance", href: "https://www.behance.net/subhamsahoo2", src: "/behance.png" },
  { name: "YouTube", href: "https://www.youtube.com/channel/UCWpi8UIuwQjYqsw86If5Ppw/videos", src: "/youtube.png" },
]

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-900 bg-black py-16 mt-20">
      {/* This 'grid' ensures that everything inside is forced to the dead center of the screen */}
      <div className="grid place-content-center w-full px-6">
        
        <div className="flex flex-col items-center justify-center gap-10">
          
          {/* Icons Row */}
          <div className="flex items-center justify-center gap-10">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative w-5 h-5 invert brightness-200 opacity-50 hover:opacity-100 transition-all duration-300 transform hover:scale-125"
              >
                <Image 
                  src={link.src}
                  alt={link.name}
                  fill
                  className="object-contain"
                />
              </a>
            ))}
          </div>

          {/* Text Section */}
          <div className="flex flex-col items-center text-center">
            <p className="text-[10px] text-zinc-600 uppercase font-bold mb-3">
              Built by Subham Sahoo <span className="text-red-600">.</span>
            </p>
            <p className="text-[8px] tracking-[0.2em] text-zinc-800 uppercase">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}