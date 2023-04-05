import React, { Fragment } from 'react'

import { Popover, Transition } from '@headlessui/react'
import { Menu } from '@styled-icons/entypo/Menu'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { Link } from 'react-scroll'
import { random, getImagePath } from 'utils/generic'

import info from 'info'

const Navbar = () => {
  const { navigation, company, socialMedia } = info
  const { name, url, logo } = company

  return (
    <>
      <svg
        className={`hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-background transform translate-x-1/2`}
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      <Popover>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href={url}>
                  <span className="sr-only">{name}</span>
                  <img
                    alt={name}
                    className="h-16 w-auto sm:h-16"
                    src={getImagePath(logo)}
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button
                    className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                  >
                    <span className="sr-only">Open Menu</span>
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              {navigation.map(({ name, type, href }) => (
                <>
                  {type === 'internal' ? (
                    <Link
                      spy={true}
                      active="active"
                      smooth={true}
                      duration={1000}
                      key={random()}
                      to={href}
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      {name}
                    </Link>
                  ) : (
                    <a
                      key={random()}
                      href={href}
                      className={`font-medium text-gray-500 hover:text-gray-900`}
                      rel="noreferrer"
                    >
                      {name}
                    </a>
                  )}
                </>
              ))}
              {socialMedia.map(({ label, url }) => (
                <a
                  key={random()}
                  href={url}
                  className={`font-medium text-primary hover:text-secondary`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div
              className={`rounded-lg shadow-md bg-background ring-1 ring-black ring-opacity-5 overflow-hidden`}
            >
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={logo} alt={name} />
                </div>
                <div className="-mr-2">
                  <Popover.Button
                    className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                  >
                    <span className="sr-only">Fechar menu</span>
                    <CloseOutline className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1" id="top">
                {navigation.map(({ name, type, href }) => (
                  <div key={random()}>
                    {type === 'internal' ? (
                      <Link
                        spy={true}
                        active="active"
                        smooth={true}
                        duration={1000}
                        key={random()}
                        to={href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {name}
                      </Link>
                    ) : (
                      <a
                        key={random()}
                        href={href}
                        className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50`}
                        rel="noreferrer"
                      >
                        {name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  )
}

export default Navbar
