import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { UseScroll } from '../hooks/UseScroll';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Home', to: '/Welcome' },
  { name: 'About', to: '/About-us' },
  { name: 'Katalog', to: '/Katalog' },
  { name: 'Blog', to: '/Blog' },
  { name: 'Kontak', to: '/Contact' },
  { name: 'Login', to: '/Login' },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const isScrolled = UseScroll();
  const location = useLocation(); // cek path aktif

  return (
    <Disclosure
      as="nav"
      className={`${
        isScrolled ? 'bg-rajutBoldPeach/50' : 'bg-rajutLitepink'
      } transition duration-300 w-full fixed z-50`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto min-w-screen px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo */}
              <div className="flex items-center">
                <Link to="/" className="flex items-center mt-[-3px] space-x-2">
                  <img
                    src="/assets/img/rajut-dyubi-icon.png"
                    alt="Rajut Dyubi Logo"
                    className="h-10 w-15"
                  />
                  <div className="flex flex-col leading-tight text-rajutPink">
                    <span className="text-[1.4em] font-dancingScript font-bold">
                      Rajut Dyubi
                    </span>
                    <small className="text-[0.7em]">
                      Handmade With Love
                    </small>
                  </div>
                </Link>
              </div>

              {/* Navigation desktop */}
              <div className="hidden sm:flex ml-auto">
                <div className="flex space-x-6">
                  {navigation.map((item) => {
                    const isActive = location.pathname.toLowerCase() === item.to.toLowerCase();
                    return (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          isActive
                            ? 'text-rajutPink border-b-2 border-rajutPink decoration-2'
                            : isScrolled
                              ? 'text-white'
                              : 'text-gray-500 hover:text-rajutPink',
                          'px-3 py-1 text-[0.85em] font-medium transition'
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

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link key={item.name} to={item.to}>
                    <Disclosure.Button
                      className={classNames(
                        isActive
                          ? 'text-rajutPink underline underline-offset-4 decoration-2'
                          : 'text-gray-500 hover:text-rajutPink',
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
