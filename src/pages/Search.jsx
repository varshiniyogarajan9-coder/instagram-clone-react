import { useState } from "react"

import {
    Search as SearchIcon,
    X
} from "lucide-react"

function Search() {

    const [search, setSearch] = useState("")

    const users = [
        {
            id: 1,
            username: "varshini",
            name: "Varshini"
        },
        {
            id: 2,
            username: "rahul",
            name: "Rahul Kumar"
        },
        {
            id: 3,
            username: "priya",
            name: "Priya"
        },
        {
            id: 4,
            username: "ananya",
            name: "Ananya"
        },
        {
            id: 5,
            username: "megha",
            name: "Megha"
        },
        {
            id: 6,
            username: "arjun",
            name: "Arjun"
        }
    ]

    const filteredUsers = users.filter((user) =>
        user.username.toLowerCase().includes(search.toLowerCase()) ||
        user.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <main className="min-h-screen bg-white pb-20 md:ml-64 md:pb-0">

            <div className="mx-auto w-full max-w-3xl px-5 py-8">

                <h1 className="mb-6 text-2xl font-semibold">
                    Search
                </h1>

                <div className="relative">

                    <SearchIcon
                        size={20}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />

                    <input
                        type="text"
                        value={search}
                        onChange={(event) =>
                            setSearch(event.target.value)
                        }
                        placeholder="Search"
                        className="w-full rounded-xl bg-gray-100 py-3 pl-11 pr-11 text-sm outline-none focus:bg-gray-200"
                    />

                    {search && (

                        <button
                            type="button"
                            onClick={() => setSearch("")}
                            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-gray-400 p-0.5 text-white"
                            aria-label="Clear search"
                        >

                            <X size={13} />

                        </button>

                    )}

                </div>

                <div className="mt-8">

                    {search ? (

                        filteredUsers.length > 0 ? (

                            <div className="space-y-2">

                                {filteredUsers.map((user) => (

                                    <button
                                        key={user.id}
                                        type="button"
                                        className="flex w-full items-center gap-4 rounded-xl px-3 py-3 text-left transition hover:bg-gray-50"
                                    >

                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">

                                            <div className="flex h-full w-full items-center justify-center rounded-full bg-white font-semibold">
                                                {user.username
                                                    .charAt(0)
                                                    .toUpperCase()}
                                            </div>

                                        </div>

                                        <div>

                                            <p className="text-sm font-semibold">
                                                {user.username}
                                            </p>

                                            <p className="text-sm text-gray-500">
                                                {user.name}
                                            </p>

                                        </div>

                                    </button>

                                ))}

                            </div>

                        ) : (

                            <div className="py-16 text-center">

                                <p className="text-sm font-semibold">
                                    No results found
                                </p>

                                <p className="mt-1 text-sm text-gray-400">
                                    Try searching for another username.
                                </p>

                            </div>

                        )

                    ) : (

                        <div className="py-16 text-center">

                            <SearchIcon
                                size={42}
                                strokeWidth={1.5}
                                className="mx-auto text-gray-300"
                            />

                            <p className="mt-4 text-sm font-semibold">
                                Search for people
                            </p>

                            <p className="mt-1 text-sm text-gray-400">
                                Find people and accounts you may know.
                            </p>

                        </div>

                    )}

                </div>

            </div>

        </main>
    )
}

export default Search

