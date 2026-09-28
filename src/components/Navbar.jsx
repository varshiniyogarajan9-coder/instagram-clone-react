import {
    Home,
    Search,
    Compass,
    Clapperboard,
    MessageCircle,
    Heart,
    PlusSquare,
    UserCircle
} from "lucide-react"

import {
    NavLink,
    Link
} from "react-router-dom"

import instagramLogo from "../assets/instagram-logo.png"

function Navbar() {

    const navigationItems = [
        {
            name: "Home",
            path: "/",
            icon: Home
        },
        {
            name: "Search",
            path: "/search",
            icon: Search
        },
        {
            name: "Explore",
            path: "/explore",
            icon: Compass
        },
        {
            name: "Reels",
            path: "/reels",
            icon: Clapperboard
        },
        {
            name: "Messages",
            path: "/messages",
            icon: MessageCircle
        },
        {
            name: "Notifications",
            path: "/notifications",
            icon: Heart
        },
        {
            name: "Create",
            path: "/create",
            icon: PlusSquare
        },
        {
            name: "Profile",
            path: "/profile",
            icon: UserCircle
        }
    ]

    return (
        <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-gray-200 bg-white md:bottom-auto md:top-0 md:h-screen md:w-64 md:border-r md:border-t-0">

            <div className="flex h-full flex-col px-2 py-2 md:px-3 md:py-8">

                <Link
                    to="/"
                    className="mb-10 hidden items-center px-3 md:flex"
                >

                    <img
                        src={instagramLogo}
                        alt="Instagram"
                        className="h-auto w-44 object-contain"
                    />

                </Link>

                <div className="flex w-full items-center justify-around md:flex-col md:items-stretch md:gap-1">

                    {navigationItems.map((item) => {

                        const Icon = item.icon

                        return (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                end={item.path === "/"}
                                className={({ isActive }) =>
                                    `group flex items-center justify-center rounded-lg px-3 py-3 transition-all duration-200 md:justify-start md:gap-4 ${
                                        isActive
                                            ? "font-bold"
                                            : "font-normal hover:bg-gray-100"
                                    }`
                                }
                            >

                                {({ isActive }) => (

                                    <>

                                        <Icon
                                            size={25}
                                            strokeWidth={isActive ? 2.5 : 2}
                                            fill={
                                                isActive &&
                                                item.name === "Home"
                                                    ? "currentColor"
                                                    : "none"
                                            }
                                            className="transition-transform duration-150 group-active:scale-90"
                                        />

                                        <span className="hidden text-sm md:block">
                                            {item.name}
                                        </span>

                                    </>

                                )}

                            </NavLink>
                        )

                    })}

                </div>

                <div className="mt-auto hidden md:block">

                    <button
                        type="button"
                        className="flex w-full items-center gap-4 rounded-lg px-3 py-3 text-left text-sm transition hover:bg-gray-100"
                    >

                        <div className="flex h-6 w-6 flex-col justify-center gap-1">

                            <span className="block h-[2px] w-5 bg-black" />
                            <span className="block h-[2px] w-5 bg-black" />
                            <span className="block h-[2px] w-5 bg-black" />

                        </div>

                        <span>
                            More
                        </span>

                    </button>

                </div>

            </div>

        </nav>
    )
}

export default Navbar

