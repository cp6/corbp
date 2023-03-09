import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import NavLink from "@/Components/NavLink";
import {useState} from "react";
import Dropdown from "@/Components/Dropdown";

export default function NavBar({auth, type = 'submit', className = '', processing, children, onClick}) {

    const user = auth;
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    function processThemeChange(themeToggleDarkIcon, themeToggleLightIcon) {
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    }

    function switchTheme() {
        var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            themeToggleLightIcon.classList.remove('hidden');
        } else {
            themeToggleDarkIcon.classList.remove('hidden');
        }

        var themeToggleBtn = document.getElementById('theme-toggle');

        themeToggleBtn.addEventListener('click', function () {
            processThemeChange(themeToggleDarkIcon, themeToggleLightIcon);
        });
    }

    return (
        <nav className="bg-gray-100 dark:bg-slate-800 border-b border-gray-300 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-1 sm:px-2">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="hidden space-x-8 sm:-my-px sm:flex">
                            <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                Home
                            </NavLink>
                            <NavLink href={route('locations.index')} active={route().current('locations.*')}>
                                Locations
                            </NavLink>
                            <NavLink href={route('device.index')} active={route().current('device.*')}>
                                Devices
                            </NavLink>
                            <NavLink href={route('lense.index')} active={route().current('lense.*')}>
                                Lenses
                            </NavLink>
                            {
                                (() => {
                                    if (user.user === null) {
                                        return (<>
                                            <NavLink href={route('login')} active={route().current('login')} className={'dark:text-blue-400'}>
                                                Login
                                            </NavLink>
                                        </>);
                                    }
                                })()
                            }
                        </div>
                    </div>
                    {
                        (() => {
                            if (user.user !== null) {

                                return (<>
                                    <div className="hidden sm:flex sm:items-center sm:ml-6">
                                        <div className="ml-3 relative">
                                            <Dropdown>
                                                <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-slate-800 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                                </Dropdown.Trigger>

                                                <Dropdown.Content>
                                                    <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                                    <Dropdown.Link href={route('logout')} method="post" as="button">
                                                        Log Out
                                                    </Dropdown.Link>
                                                </Dropdown.Content>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </>);
                            }
                        })()
                    }
                    <button id="theme-toggle" onClick={switchTheme} type="button"
                            className="text-gray-900 hover:text-gray-700 hover:dark:text-gray-200 focus:outline-none rounded-lg text-sm p-1 themeToggle">
                        <svg id="theme-toggle-dark-icon" className="w-5 h-5 hidden" fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                        </svg>
                        <svg id="theme-toggle-light-icon" className="w-5 h-5 dark:text-white" fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                fillRule="evenodd" clipRule="evenodd"></path>
                        </svg>
                    </button>
                    <div className="mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:dark:bg-gray-400 focus:text-gray-500 focus:dark:text-gray-700 transition duration-150 ease-in-out"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none"
                                 viewBox="0 0 24 24">
                                <path
                                    className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                <div className="pt-2 pb-3 space-y-1">
                    <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                        YABSdb
                    </ResponsiveNavLink>
                </div>
                {
                    (() => {
                        if (user.user !== null) {

                            return (<>
                                <div className="pt-4 pb-1 border-t border-gray-200">
                                    <div className="px-4">
                                        <div className="font-medium text-base text-gray-800">
                                            {auth.user.name}
                                        </div>
                                        <div className="font-medium text-sm text-gray-500">{auth.user.email}</div>
                                    </div>

                                    <div className="mt-3 space-y-1">
                                        <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                                        <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                            Log Out
                                        </ResponsiveNavLink>
                                    </div>
                                </div>
                            </>);
                        }
                    })()
                }
            </div>
        </nav>
    );
}
