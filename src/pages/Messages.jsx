
import { useState } from "react"

import {
    Search,
    Send,
    MoreHorizontal,
    ArrowLeft,
    Phone,
    Video,
    Info
} from "lucide-react"

function Messages() {

    const [selectedUser, setSelectedUser] = useState(null)
    const [message, setMessage] = useState("")
    const [search, setSearch] = useState("")

    const [messages, setMessages] = useState({
        1: [
            {
                id: 1,
                text: "Hey! How are you?",
                sender: "them"
            },
            {
                id: 2,
                text: "I'm good! How about you?",
                sender: "me"
            }
        ],
        2: [
            {
                id: 1,
                text: "Did you see my latest post?",
                sender: "them"
            }
        ],
        3: [
            {
                id: 1,
                text: "Are you free this weekend?",
                sender: "them"
            }
        ],
        4: []
    })

    const users = [
        {
            id: 1,
            username: "rahul",
            name: "Rahul"
        },
        {
            id: 2,
            username: "priya",
            name: "Priya"
        },
        {
            id: 3,
            username: "ananya",
            name: "Ananya"
        },
        {
            id: 4,
            username: "megha",
            name: "Megha"
        }
    ]

    const filteredUsers = users.filter((user) =>
        user.username
            .toLowerCase()
            .includes(search.toLowerCase()) ||
        user.name
            .toLowerCase()
            .includes(search.toLowerCase())
    )

    function handleSendMessage() {

        const trimmedMessage = message.trim()

        if (!trimmedMessage || !selectedUser) {
            return
        }

        const newMessage = {
            id: Date.now(),
            text: trimmedMessage,
            sender: "me"
        }

        setMessages((current) => ({
            ...current,
            [selectedUser.id]: [
                ...(current[selectedUser.id] || []),
                newMessage
            ]
        }))

        setMessage("")
    }

    function handleSelectUser(user) {
        setSelectedUser(user)
    }

    function handleBack() {
        setSelectedUser(null)
    }

    function getLastMessage(userId) {

        const userMessages = messages[userId] || []

        if (userMessages.length === 0) {
            return "Start a conversation"
        }

        return userMessages[userMessages.length - 1].text
    }

    return (
        <main className="min-h-screen bg-white pb-20 md:ml-64 md:pb-0">

            <div className="flex h-screen">

                <aside
                    className={`w-full border-r border-gray-200 md:flex md:w-80 md:shrink-0 ${
                        selectedUser ? "hidden md:flex" : "flex"
                    }`}
                >

                    <div className="flex w-full flex-col">

                        <div className="border-b border-gray-200 p-5">

                            <div className="flex items-center justify-between">

                                <h1 className="text-xl font-semibold">
                                    Messages
                                </h1>

                                <button
                                    type="button"
                                    aria-label="New message"
                                    className="rounded-lg p-2 transition hover:bg-gray-100"
                                >
                                    <Send size={21} />
                                </button>

                            </div>

                            <div className="relative mt-5">

                                <Search
                                    size={17}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                />

                                <input
                                    type="text"
                                    value={search}
                                    onChange={(event) =>
                                        setSearch(event.target.value)
                                    }
                                    placeholder="Search"
                                    className="w-full rounded-lg bg-gray-100 py-2.5 pl-9 pr-3 text-sm outline-none transition focus:bg-gray-200"
                                />

                            </div>

                        </div>

                        <div className="flex-1 overflow-y-auto p-2">

                            {filteredUsers.length > 0 ? (

                                filteredUsers.map((user) => {

                                    const lastMessage =
                                        getLastMessage(user.id)

                                    return (
                                        <button
                                            key={user.id}
                                            type="button"
                                            onClick={() =>
                                                handleSelectUser(user)
                                            }
                                            className={`flex w-full items-center gap-3 rounded-lg p-3 text-left transition ${
                                                selectedUser?.id === user.id
                                                    ? "bg-gray-100"
                                                    : "hover:bg-gray-50"
                                            }`}
                                        >

                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">

                                                <div className="flex h-full w-full items-center justify-center rounded-full bg-white font-semibold">
                                                    {user.username
                                                        .charAt(0)
                                                        .toUpperCase()}
                                                </div>

                                            </div>

                                            <div className="min-w-0 flex-1">

                                                <p className="text-sm font-semibold">
                                                    {user.username}
                                                </p>

                                                <p className="mt-1 truncate text-xs text-gray-400">
                                                    {lastMessage}
                                                </p>

                                            </div>

                                        </button>
                                    )
                                })

                            ) : (

                                <div className="px-4 py-12 text-center">

                                    <Search
                                        size={35}
                                        strokeWidth={1.5}
                                        className="mx-auto text-gray-300"
                                    />

                                    <p className="mt-4 text-sm font-semibold">
                                        No users found
                                    </p>

                                </div>

                            )}

                        </div>

                    </div>

                </aside>

                <section
                    className={`flex-1 ${
                        selectedUser
                            ? "flex"
                            : "hidden md:flex"
                    }`}
                >

                    {selectedUser ? (

                        <div className="flex w-full flex-col">

                            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4 md:px-6">

                                <div className="flex items-center gap-3">

                                    <button
                                        type="button"
                                        onClick={handleBack}
                                        className="rounded-full p-2 transition hover:bg-gray-100 md:hidden"
                                        aria-label="Back"
                                    >
                                        <ArrowLeft size={21} />
                                    </button>

                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 font-semibold">
                                        {selectedUser.username
                                            .charAt(0)
                                            .toUpperCase()}
                                    </div>

                                    <div>

                                        <p className="text-sm font-semibold">
                                            {selectedUser.username}
                                        </p>

                                        <p className="text-xs text-gray-400">
                                            Active now
                                        </p>

                                    </div>

                                </div>

                                <div className="flex items-center gap-1">

                                    <button
                                        type="button"
                                        aria-label="Call"
                                        className="rounded-full p-2 transition hover:bg-gray-100"
                                    >
                                        <Phone size={20} />
                                    </button>

                                    <button
                                        type="button"
                                        aria-label="Video call"
                                        className="rounded-full p-2 transition hover:bg-gray-100"
                                    >
                                        <Video size={21} />
                                    </button>

                                    <button
                                        type="button"
                                        aria-label="Information"
                                        className="rounded-full p-2 transition hover:bg-gray-100"
                                    >
                                        <Info size={21} />
                                    </button>

                                    <button
                                        type="button"
                                        aria-label="More options"
                                        className="rounded-full p-2 transition hover:bg-gray-100"
                                    >
                                        <MoreHorizontal size={21} />
                                    </button>

                                </div>

                            </div>

                            <div className="flex flex-1 flex-col overflow-y-auto px-4 py-6 md:px-8">

                                <div className="mt-auto space-y-3">

                                    <div className="mb-8 text-center">

                                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">

                                            <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-2xl font-semibold">
                                                {selectedUser.username
                                                    .charAt(0)
                                                    .toUpperCase()}
                                            </div>

                                        </div>

                                        <h2 className="mt-3 font-semibold">
                                            {selectedUser.username}
                                        </h2>

                                        <p className="mt-1 text-sm text-gray-400">
                                            {selectedUser.name}
                                        </p>

                                        <p className="mt-1 text-xs text-gray-400">
                                            Instagram
                                        </p>

                                    </div>

                                    {(messages[selectedUser.id] || [])
                                        .map((item) => (

                                            <div
                                                key={item.id}
                                                className={`flex ${
                                                    item.sender === "me"
                                                        ? "justify-end"
                                                        : "justify-start"
                                                }`}
                                            >

                                                <div
                                                    className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
                                                        item.sender === "me"
                                                            ? "bg-black text-white"
                                                            : "bg-gray-100 text-black"
                                                    }`}
                                                >
                                                    {item.text}
                                                </div>

                                            </div>

                                        ))}

                                </div>

                            </div>

                            <div className="p-4 md:p-5">

                                <div className="flex items-center gap-3 rounded-full border border-gray-300 px-4 py-2.5">

                                    <input
                                        type="text"
                                        value={message}
                                        onChange={(event) =>
                                            setMessage(event.target.value)
                                        }
                                        onKeyDown={(event) => {
                                            if (event.key === "Enter") {
                                                handleSendMessage()
                                            }
                                        }}
                                        placeholder="Message..."
                                        className="flex-1 bg-transparent text-sm outline-none"
                                    />

                                    <button
                                        type="button"
                                        onClick={handleSendMessage}
                                        disabled={!message.trim()}
                                        className="text-sm font-semibold text-blue-500 transition disabled:cursor-default disabled:opacity-40"
                                    >
                                        Send
                                    </button>

                                </div>

                            </div>

                        </div>

                    ) : (

                        <div className="flex flex-1 items-center justify-center text-center">

                            <div>

                                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-black">

                                    <Send
                                        size={36}
                                        strokeWidth={1.5}
                                    />

                                </div>

                                <h2 className="mt-5 text-xl font-semibold">
                                    Your messages
                                </h2>

                                <p className="mt-2 text-sm text-gray-400">
                                    Send private photos and messages to friends.
                                </p>

                                <button
                                    type="button"
                                    className="mt-5 rounded-lg bg-blue-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
                                >
                                    Send message
                                </button>

                            </div>

                        </div>

                    )}

                </section>

            </div>

        </main>
    )
}

export default Messages

