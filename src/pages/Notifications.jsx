import { useState } from "react"

import {
    Heart,
    UserPlus,
    MessageCircle,
    AtSign,
    X
} from "lucide-react"

function Notifications() {

    const [notifications, setNotifications] = useState([
        {
            id: 1,
            username: "rahul",
            text: "liked your photo.",
            type: "like",
            time: "2h",
            action: "none"
        },
        {
            id: 2,
            username: "priya",
            text: "started following you.",
            type: "follow",
            time: "5h",
            action: "follow"
        },
        {
            id: 3,
            username: "ananya",
            text: "liked your photo.",
            type: "like",
            time: "1d",
            action: "none"
        },
        {
            id: 4,
            username: "megha",
            text: "mentioned you in a comment.",
            type: "mention",
            time: "1d",
            action: "none"
        },
        {
            id: 5,
            username: "arjun",
            text: "sent you a message.",
            type: "message",
            time: "2d",
            action: "message"
        }
    ])

    const [following, setFollowing] = useState([])

    function toggleFollow(id) {

        setFollowing((current) =>
            current.includes(id)
                ? current.filter((item) => item !== id)
                : [...current, id]
        )
    }

    function removeNotification(id) {

        setNotifications((current) =>
            current.filter((item) => item.id !== id)
        )
    }

    function clearAllNotifications() {
        setNotifications([])
    }

    function getIcon(type) {

        if (type === "like") {
            return (
                <Heart
                    size={21}
                    fill="currentColor"
                />
            )
        }

        if (type === "follow") {
            return <UserPlus size={21} />
        }

        if (type === "message") {
            return <MessageCircle size={21} />
        }

        return <AtSign size={21} />
    }

    return (
        <main className="min-h-screen bg-white pb-20 md:ml-64 md:pb-0">

            <div className="mx-auto max-w-2xl px-5 py-8">

                {/* Header */}

                <div className="mb-8 flex items-center justify-between">

                    <div>

                        <h1 className="text-2xl font-semibold">
                            Notifications
                        </h1>

                        <p className="mt-1 text-sm text-gray-400">
                            Recent activity from your account
                        </p>

                    </div>

                    {notifications.length > 0 && (

                        <button
                            type="button"
                            onClick={clearAllNotifications}
                            className="text-sm font-semibold text-blue-500 transition hover:text-blue-600"
                        >
                            Clear all
                        </button>

                    )}

                </div>

                {/* Notifications */}

                {notifications.length > 0 ? (

                    <div className="space-y-1">

                        {notifications.map((notification) => {

                            const isFollowing =
                                following.includes(notification.id)

                            return (
                                <div
                                    key={notification.id}
                                    className="group flex items-center gap-4 rounded-xl p-3 transition hover:bg-gray-50"
                                >

                                    {/* Avatar */}

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">

                                        <div className="flex h-full w-full items-center justify-center rounded-full bg-white font-semibold">

                                            {notification.username
                                                .charAt(0)
                                                .toUpperCase()}

                                        </div>

                                    </div>

                                    {/* Notification Icon */}

                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100">

                                        {getIcon(notification.type)}

                                    </div>

                                    {/* Notification Content */}

                                    <div className="min-w-0 flex-1">

                                        <p className="text-sm leading-5">

                                            <span className="font-semibold">
                                                {notification.username}
                                            </span>{" "}

                                            {notification.text}

                                        </p>

                                        <p className="mt-1 text-xs text-gray-400">
                                            {notification.time}
                                        </p>

                                    </div>

                                    {/* Action */}

                                    {notification.action === "follow" && (

                                        <button
                                            type="button"
                                            onClick={() =>
                                                toggleFollow(
                                                    notification.id
                                                )
                                            }
                                            className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                                                isFollowing
                                                    ? "bg-gray-100 text-black"
                                                    : "bg-blue-500 text-white hover:bg-blue-600"
                                            }`}
                                        >
                                            {isFollowing
                                                ? "Following"
                                                : "Follow"
                                            }
                                        </button>

                                    )}

                                    {notification.action === "message" && (

                                        <button
                                            type="button"
                                            className="rounded-lg bg-blue-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-600"
                                        >
                                            Message
                                        </button>

                                    )}

                                    {/* Clear */}

                                    <button
                                        type="button"
                                        onClick={() =>
                                            removeNotification(
                                                notification.id
                                            )
                                        }
                                        aria-label={`Remove ${notification.username} notification`}
                                        className="rounded-full p-1.5 text-gray-300 opacity-0 transition hover:bg-gray-100 hover:text-gray-600 group-hover:opacity-100"
                                    >
                                        <X size={16} />
                                    </button>

                                </div>
                            )
                        })}

                    </div>

                ) : (

                    <div className="py-24 text-center">

                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-black">

                            <Heart
                                size={38}
                                strokeWidth={1.5}
                            />

                        </div>

                        <p className="mt-5 text-base font-semibold">
                            No notifications
                        </p>

                        <p className="mt-2 text-sm text-gray-400">
                            When people interact with you, you'll see it here.
                        </p>

                    </div>

                )}

            </div>

        </main>
    )
}

export default Notifications
