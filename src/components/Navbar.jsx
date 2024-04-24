import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/image/01.png";

const Navbar = () => {
  const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "Project", href: "#projects", current: false },
    { name: "Contact", href: "#contact", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <Disclosure as="nav" className="bg-dark-primary">
        {({ open }) => (
          <>
            <div
              id="home"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1500"
            >
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-sm p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-start md:justify-between ">
                  <div className="flex flex-shrink-0 items-end">
                    <a href="#home">
                      <img className="block h-8 w-auto" src={logo} alt="logo" />
                    </a>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex justify-end space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white font-Kanit"
                              : "hover:text-white",
                            "text-white font-Kanit px-3 py-2 rounded-sm text-[16px] font-medium  hover:bg-primary hover:no-underline active:text-white focus:text-white focus:no-underline"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* mobile */}
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "hover:bg-primary hover:text-white",
                      "text-white block px-3 py-2 rounded-md text-base font-medium text-center hover:no-underline active:text-white focus:text-white"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;
