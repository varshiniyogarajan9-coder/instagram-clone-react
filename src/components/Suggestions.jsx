function Suggestions() {

    const suggestions = [
        {
            id: 1,
            username: "ananya",
            name: "Ananya"
        },
        {
            id: 2,
            username: "megha",
            name: "Megha"
        },
        {
            id: 3,
            username: "arjun",
            name: "Arjun"
        },
        {
            id: 4,
            username: "karthik",
            name: "Karthik"
        },
        {
            id: 5,
            username: "diya",
            name: "Diya"
        }
    ]

    return (
        <aside className="hidden w-72 xl:block">

            <div className="mb-6 flex items-center justify-between">

                <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 font-semibold">
                        V
                    </div>

                    <div>
                        <p className="text-sm font-semibold">
                            varshini
                        </p>

                        <p className="text-sm text-gray-500">
                            Varshini
                        </p>
                    </div>

                </div>

                <button
                    type="button"
                    className="text-xs font-semibold text-blue-500"
                >
                    Switch
                </button>

            </div>

            <div className="mb-4 flex items-center justify-between">

                <p className="text-sm font-semibold text-gray-500">
                    Suggested for you
                </p>

                <button
                    type="button"
                    className="text-xs font-semibold"
                >
                    See All
                </button>

            </div>

            <div className="space-y-4">

                {suggestions.map((user) => (

                    <div
                        key={user.id}
                        className="flex items-center justify-between"
                    >

                        <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold">
                                {user.username.charAt(0).toUpperCase()}
                            </div>

                            <div>

                                <p className="text-sm font-semibold">
                                    {user.username}
                                </p>

                                <p className="text-xs text-gray-400">
                                    Suggested for you
                                </p>

                            </div>

                        </div>

                        <button
                            type="button"
                            className="text-xs font-semibold text-blue-500"
                        >
                            Follow
                        </button>

                    </div>

                ))}

            </div>

            <p className="mt-10 text-xs leading-5 text-gray-400">
                About · Help · Press · API · Jobs · Privacy · Terms
            </p>

            <p className="mt-4 text-xs text-gray-400">
                © 2026 Social
            </p>

        </aside>
    )
}

export default Suggestions