import { useState } from "react"

import {
    Settings,
    Grid3X3,
    Bookmark,
    UserSquare2,
    MoreHorizontal
} from "lucide-react"

function Profile() {

    const [activeTab, setActiveTab] = useState("posts")
    const [showEditProfile, setShowEditProfile] = useState(false)

    const [username, setUsername] = useState("varshini")
    const [name, setName] = useState("Varshini")
    const [bio, setBio] = useState(
        "Creating little moments ✨"
    )

    const posts = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        },
        {
            id: 9,
            image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e"
        }
    ]

    const savedPosts = [
        posts[2],
        posts[4],
        posts[7]
    ]

    const displayedPosts =
        activeTab === "posts"
            ? posts
            : activeTab === "saved"
            ? savedPosts
            : []

    function handleSaveProfile() {
        setShowEditProfile(false)
    }

    return (
        <main className="min-h-screen bg-white pb-20 md:ml-64 md:pb-0">

            <div className="mx-auto max-w-5xl px-4 py-6 md:px-8 md:py-10">

                {/* Profile Header */}

                <section className="border-b border-gray-200 pb-8">

                    <div className="flex items-start gap-6 md:gap-10">

                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[3px] md:h-36 md:w-36">

                            <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-3xl font-semibold md:text-5xl">
                                V
                            </div>

                        </div>

                        <div className="min-w-0 flex-1">

                            <div className="flex flex-wrap items-center gap-3">

                                <h1 className="text-xl font-normal">
                                    {username}
                                </h1>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowEditProfile(true)
                                    }
                                    className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold transition hover:bg-gray-200"
                                >
                                    Edit profile
                                </button>

                                <button
                                    type="button"
                                    aria-label="Settings"
                                    className="rounded-lg p-2 transition hover:bg-gray-100"
                                >
                                    <Settings size={22} />
                                </button>

                            </div>

                            <div className="mt-6 hidden gap-10 md:flex">

                                <p className="text-sm">
                                    <span className="font-semibold">
                                        9
                                    </span>{" "}
                                    posts
                                </p>

                                <p className="text-sm">
                                    <span className="font-semibold">
                                        1,234
                                    </span>{" "}
                                    followers
                                </p>

                                <p className="text-sm">
                                    <span className="font-semibold">
                                        456
                                    </span>{" "}
                                    following
                                </p>

                            </div>

                            <div className="mt-4">

                                <p className="font-semibold">
                                    {name}
                                </p>

                                <p className="mt-1 max-w-md whitespace-pre-line text-sm leading-5">
                                    {bio}
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Mobile Stats */}

                    <div className="mt-7 grid grid-cols-3 border-y border-gray-200 py-4 md:hidden">

                        <div className="text-center">

                            <p className="font-semibold">
                                9
                            </p>

                            <p className="text-xs text-gray-500">
                                posts
                            </p>

                        </div>

                        <div className="text-center">

                            <p className="font-semibold">
                                1,234
                            </p>

                            <p className="text-xs text-gray-500">
                                followers
                            </p>

                        </div>

                        <div className="text-center">

                            <p className="font-semibold">
                                456
                            </p>

                            <p className="text-xs text-gray-500">
                                following
                            </p>

                        </div>

                    </div>

                </section>

                {/* Story Highlights */}

                <section className="flex gap-6 overflow-x-auto py-6">

                    {[
                        "Travel",
                        "Friends",
                        "Life",
                        "Food"
                    ].map((highlight) => (

                        <button
                            key={highlight}
                            type="button"
                            className="flex min-w-[65px] flex-col items-center gap-2"
                        >

                            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-300 bg-gray-50 text-xs font-semibold">
                                {highlight.charAt(0)}
                            </div>

                            <span className="text-xs">
                                {highlight}
                            </span>

                        </button>

                    ))}

                </section>

                {/* Tabs */}

                <div className="flex border-t border-gray-200">

                    <button
                        type="button"
                        onClick={() => setActiveTab("posts")}
                        className={`flex flex-1 items-center justify-center gap-2 border-t-2 py-4 text-xs font-semibold tracking-wider transition ${
                            activeTab === "posts"
                                ? "border-black text-black"
                                : "border-transparent text-gray-400"
                        }`}
                    >
                        <Grid3X3 size={16} />

                        <span className="hidden sm:block">
                            POSTS
                        </span>

                    </button>

                    <button
                        type="button"
                        onClick={() => setActiveTab("saved")}
                        className={`flex flex-1 items-center justify-center gap-2 border-t-2 py-4 text-xs font-semibold tracking-wider transition ${
                            activeTab === "saved"
                                ? "border-black text-black"
                                : "border-transparent text-gray-400"
                        }`}
                    >
                        <Bookmark size={16} />

                        <span className="hidden sm:block">
                            SAVED
                        </span>

                    </button>

                    <button
                        type="button"
                        onClick={() => setActiveTab("tagged")}
                        className={`flex flex-1 items-center justify-center gap-2 border-t-2 py-4 text-xs font-semibold tracking-wider transition ${
                            activeTab === "tagged"
                                ? "border-black text-black"
                                : "border-transparent text-gray-400"
                        }`}
                    >
                        <UserSquare2 size={16} />

                        <span className="hidden sm:block">
                            TAGGED
                        </span>

                    </button>

                </div>

                {/* Posts */}

                {activeTab === "tagged" ? (

                    <div className="flex min-h-[300px] flex-col items-center justify-center text-center">

                        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-black">

                            <UserSquare2
                                size={30}
                                strokeWidth={1.5}
                            />

                        </div>

                        <h2 className="mt-4 text-lg font-semibold">
                            Photos of you
                        </h2>

                        <p className="mt-1 text-sm text-gray-400">
                            When people tag you, those photos will appear here.
                        </p>

                    </div>

                ) : displayedPosts.length > 0 ? (

                    <div className="grid grid-cols-3 gap-1 md:gap-4">

                        {displayedPosts.map((post) => (

                            <button
                                key={post.id}
                                type="button"
                                className="group relative overflow-hidden"
                            >

                                <img
                                    src={post.image}
                                    alt=""
                                    className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 flex items-center justify-center bg-black/0 text-white transition group-hover:bg-black/30">

                                    <MoreHorizontal
                                        className="opacity-0 transition group-hover:opacity-100"
                                    />

                                </div>

                            </button>

                        ))}

                    </div>

                ) : (

                    <div className="py-20 text-center">

                        <Bookmark
                            size={42}
                            strokeWidth={1.5}
                            className="mx-auto text-gray-300"
                        />

                        <p className="mt-4 text-sm font-semibold">
                            No saved posts
                        </p>

                    </div>

                )}

            </div>

            {/* Edit Profile Modal */}

            {showEditProfile && (

                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4"
                    onClick={() => setShowEditProfile(false)}
                >

                    <div
                        className="w-full max-w-md rounded-2xl bg-white p-6"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >

                        <div className="flex items-center justify-between">

                            <h2 className="text-lg font-semibold">
                                Edit profile
                            </h2>

                            <button
                                type="button"
                                onClick={() =>
                                    setShowEditProfile(false)
                                }
                                className="text-xl"
                            >
                                ×
                            </button>

                        </div>

                        <div className="mt-6 space-y-5">

                            <div>

                                <label className="mb-2 block text-sm font-semibold">
                                    Username
                                </label>

                                <input
                                    type="text"
                                    value={username}
                                    onChange={(event) =>
                                        setUsername(
                                            event.target.value
                                        )
                                    }
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black"
                                />

                            </div>

                            <div>

                                <label className="mb-2 block text-sm font-semibold">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    value={name}
                                    onChange={(event) =>
                                        setName(
                                            event.target.value
                                        )
                                    }
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black"
                                />

                            </div>

                            <div>

                                <label className="mb-2 block text-sm font-semibold">
                                    Bio
                                </label>

                                <textarea
                                    value={bio}
                                    onChange={(event) =>
                                        setBio(
                                            event.target.value
                                        )
                                    }
                                    maxLength={150}
                                    rows={4}
                                    className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black"
                                />

                            </div>

                        </div>

                        <div className="mt-7 flex justify-end gap-3">

                            <button
                                type="button"
                                onClick={() =>
                                    setShowEditProfile(false)
                                }
                                className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold transition hover:bg-gray-50"
                            >
                                Cancel
                            </button>

                            <button
                                type="button"
                                onClick={handleSaveProfile}
                                className="rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
                            >
                                Save
                            </button>

                        </div>

                    </div>

                </div>

            )}

        </main>
    )
}

export default Profile

