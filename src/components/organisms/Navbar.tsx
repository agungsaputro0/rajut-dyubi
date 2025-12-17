import { Disclosure } from '@headlessui/react';
import { UseScroll } from '../hooks/UseScroll';
import { Link, useLocation } from 'react-router-dom';
import useIsMobile from '../hooks/UseIsMobile';
import UseSizeSpecific from '../hooks/UseSizeSpecific';

const mainNav = [
  { name: 'Beranda', to: '/Welcome' },
  { name: 'Tentang', to: '/About-us' },
  { name: 'Katalog', to: '/Katalog' },
  { name: 'Blog', to: '/Blog' },
  { name: 'Kontak', to: '/Contact' },
];

const rightNav = [
  { name: 'Login', to: '/Login', variant: 'outline' },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const isScrolled = UseScroll();
  const location = useLocation();
  const isMobile = useIsMobile();
  const isSpecific = UseSizeSpecific();
  return (
    <Disclosure
      as="nav"
      className={`fixed w-full py-1 z-50 transition duration-500 ${
        isScrolled
          ? 'backdrop-blur-xl bg-thirdColor/80 border-b border-white/20 shadow-md'
          : 'backdrop-blur-lg bg-footeruplist/20'
      }`}
    >
      {() => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`relative flex h-16 items-center ${
                isMobile ? 'justify-center' : 'justify-between'
              }`}
            >
              {/* LOGO */}
             <Link to="/" className="flex items-center mt-[-3px] space-x-2">
                  <img
                    src="/assets/img/rajut-dyubi-icon-purple.png"
                    alt="Rajut Dyubi Logo"
                    className="h-10 w-15"
                  />
                  <div className="flex font-spring flex-col leading-tight text-mainColor">
                    <span className="text-[1.4em]  font-dancingScript font-bold">
                      Rajut Dyubi
                    </span>
                    <small className="text-[0.7em]">
                       Dirajut dengan penuh cinta
                    </small>
                  </div>
               </Link>

              {/* MAIN NAV CENTER */}
              <div className="hidden smweb:flex absolute left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-4 px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-inner">
                  {mainNav.map((item) => {
                    const isActive =
                      location.pathname.toLowerCase() ===
                      item.to.toLowerCase();

                    return (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          'relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300',
                          isActive
                            ? 'bg-gradient-to-r from-mainColor to-secondColor text-white shadow-md'
                            : isScrolled ? 'text-mainColor hover:text-appPink hover:bg-appPink/10' : 'text-gray-700 hover:text-appPink hover:bg-appPink/10'
                        )}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT NAV */}
              <div className="hidden smweb:flex items-center justify-between gap-4">
              {/* 🔍 Ikon kiri (Search + Cart) */}
              {!isSpecific && (
                <div className="flex items-center gap-3">
                </div>
              )}

      {/* 🌸 Menu Navigasi */}
      <div className="flex items-center px-2 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-inner">
        {rightNav.map((item) => {
          const isActive =
            location.pathname.toLowerCase() === item.to.toLowerCase();
          const baseStyle =
            "relative w-[140px] text-center px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300";

          return (
            <Link
              key={item.name}
              to={item.to}
              className={classNames(
                baseStyle,
                isActive ? "text-white" : isScrolled ? "text-mainColor" : "text-gray-700",
                isActive && item.variant === "outline"
                  ? "border-white bg-white/10 bg-gradient-to-r from-mainColor to-secondColor"
                  : "",
                isActive && item.variant === "filled" ? "brightness-110" : ""
              )}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>

            </div>
          </div>

          {/* MOBILE MENU */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {[...mainNav, ...rightNav].map((item) => {
                const isActive =
                  location.pathname.toLowerCase() === item.to.toLowerCase();
                return (
                  <Link key={item.name} to={item.to}>
                    <Disclosure.Button
                      className={classNames(
                        isActive
                          ? 'text-appPink underline underline-offset-4 decoration-2'
                          : 'text-gray-300 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                    >
                      {item.name}
                    </Disclosure.Button>
                  </Link>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
