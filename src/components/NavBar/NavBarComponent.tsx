'use client';

import Link from 'next/link';
import Image from 'next/image';
import KingLogo from '@/../assets/image/crown.svg';

export const NavBarComponent = () => {
  return (
    <>
      <div className="h-20 w-full mb-6 flex items-center justify-between">
        <Link className="p-6" href="/">
          <Image
            src={KingLogo}
            alt="king clothing logo"
            width={50}
            height={50}
          />
        </Link>
        <nav className="w-1/2 flex items-center justify-end">
          <Link className="uppercase py-2.5 px-3.5" href="/shop">
            Shop
          </Link>
          <Link className="uppercase py-2.5 px-3.5" href="/sign-in">
            Sign In
          </Link>
        </nav>
      </div>
    </>
  );
};
