import Link from 'next/link';

export default function Header() {
  return (
    <header className="relative overflow-visible bg-white p-4">
      {/*  
        1. Make this absolutely positioned so it can overflow the header’s box  
        2. text-[12rem] sets the font-size to 12rem (192px) – adjust as you like  
        3. leading-none to remove extra line-height space  
        4. z-10 so the nav (z-20) sits on top  
      */}
      <div className="absolute left-4 top-0 text-[12rem] font-extrabold leading-none z-10 ">
        KJ
      </div>

      {/*  
        1. relative & z-20 to keep nav above the giant initials  
        2. h-16 (4rem) gives the header its own height  
        3. items-center vertically centers the links  
        4. justify-end pushes them to the right  
      */}
      <nav className="relative z-20 flex h-16 w-full items-center justify-end space-x-6 text-lg">
        <Link href="/" className="hover:underline">
          Case Studies
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/art" className="hover:underline">
          Art
        </Link>
      </nav>
    </header>
  );
}
