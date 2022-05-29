import * as React from 'react'
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Shop', href: '#' },
  { name: 'Sell/Trade', href: '#' },
  { name: 'Finance', href: '#' },
  { name: 'Service', href: '#' },
]

export default function Example() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img
                        alt="Workflow"
                        className="h-8 w-auto sm:h-10"
                        src="https://lh3.googleusercontent.com/ftHz7PJYfzNTWhmSM9mrJ0XIknExJNaOdNHGoyfV6-7gRxpOip1XMgu48NCBHINektCeaQQy2s7Y1gLdBmw-hw6VKiE3fYtRSzMf7ms4OWMStNK5stvIs3Mwe8kl1fV4ZfxMDqqn4E6uLr7rnI6W2KdgkLyEZET7VLdk3aFuf5_az5bvgweuzLIGys0whec-nZqgTk_sNxGUzwpc5VGmG6hy7XzZtgotZKcSX_8nyJcuXvW5d6UpssZVIHXJqP4uPm4V2li8-ZZY_vF0__Wwkkr3dSc3bo8PNk9HT1ecA__YQH9oz4sOoDMTvHmMrEFOXkRN-1YD8JFu3L72BAdLOL1-0_o9iTIKnz6NY1rG0G_fEiiGbum0MemLSc6blKvkUP3IxZAeWYRKGq13HKZq45BIg0gnCuU_xqWlyuMhVI-nLAtALI0uTo_yf2ZlBuWdgovcDDttbLfeVFE9FOo9-seAjMPGRJSEOJM3iDb9WmyI1pu_QKcr9G66v_Shtf77rwZo8aJzXOYHLC2lQbQT1_lPncTYwMQafy91ld7w8d3QuudHVhNgsMsn3YYIMoR2nNfTY3jeBed1bJMJAWgfrlRg3rw9_ZPF5BRX_BzdGoiTVRf2_2XBpmhvIkX5k6aFhaMtQXidaR7CDPTEN42Thq6lWIMUYxcYAabuWi_9PnSeZZr9ehkOwR2kUcdGXo1OmeI0qYdWvEwfHneoesgenqnvaNnPele-29RWtaOSaIGxXTPU9s4ekHqPhvL2JtVpjdFFp8SVlAT9CBTNjOOxh0aevxTsI9VgT4ugJ-EX0FWE1u0MzdfzK1BCp4j3Um_W8NS6=w1869-h975-no?authuser=0"
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  ))}
                  <a href="#" className="font-medium text-cyan-600 hover:text-indigo-500">
                    Log in
                  </a>
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
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="block w-full px-5 py-3 text-center font-medium text-cyan-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Log in
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-cyan-600 xl:inline">Sport Automotive</span>{' '}
                <span className="block text-black xl:inline">Dealer Group</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Sport Automotive Group is Florida's #1 automotive dealer group. Online. In-Store. At Your Service. We have been serving the Greater Orlando community for over 
                50 years. 
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-800 md:py-4 md:text-lg md:px-10"
                  >
                    Shop Cars
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-cyan-600 bg-cyan-100 hover:bg-cyan-200 md:py-4 md:text-lg md:px-10"
                  >
                    Sell/Trade
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
    </div>
  )
}
