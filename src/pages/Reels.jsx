import { useState } from "react"

import {
    Heart,
    MessageCircle,
    Send,
    Bookmark,
    Volume2,
    VolumeX
} from "lucide-react"

function Reels() {

    const [likedReels, setLikedReels] = useState([])
    const [savedReels, setSavedReels] = useState([])
    const [muted, setMuted] = useState(false)

    const reels = [
        {
            id: 1,
            username: "varshini",
            image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
            caption: "A little escape 🌿"
        },
        {
            id: 2,
            username: "rahul",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            caption: "Weekend mood ✨"
        },
        {
            id: 3,
            username: "priya",
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            caption: "Nature never gets old."
        }
    ]

    function toggleLike(id) {

        setLikedReels((current) =>
            current.includes(id)
                ? current.filter((item) => item !== id)
                : [...current, id]
        )

    }

    function toggleSave(id) {

        setSavedReels((current) =>
            current.includes(id)
                ? current.filter((item) => item !== id)
                : [...current, id]
        )

    }

    return (
        <main className="min-h-screen bg-black pb-20 md:ml-64 md:pb-0">

            <div className="mx-auto flex w-full max-w-xl flex-col">

                {reels.map((reel) => {

                    const liked = likedReels.includes(reel.id)
                    const saved = savedReels.includes(reel.id)

                    return (
                        <article
                            key={reel.id}
                            className="relative h-[calc(100vh-80px)] min-h-[600px] max-h-[900px] overflow-hidden border-b border-gray-800"
                        >

                            <img
                                src={reel.image}
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                            <button
                                type="button"
                                onClick={() => setMuted(!muted)}
                                className="absolute right-4 top-4 z-10 rounded-full bg-black/40 p-2 text-white"
                                aria-label="Toggle sound"
                            >

                                {muted ? (
                                    <VolumeX size={20} />
                                ) : (
                                    <Volume2 size={20} />
                                )}

                            </button>

                            <div className="absolute bottom-6 left-4 right-16 z-10 text-white">

                                <p className="mb-2 text-sm font-semibold">
                                    {reel.username}
                                </p>

                                <p className="text-sm">
                                    {reel.caption}
                                </p>

                            </div>

                            <div className="absolute bottom-6 right-3 z-10 flex flex-col items-center gap-5 text-white">

                                <button
                                    type="button"
                                    onClick={() => toggleLike(reel.id)}
                                    className="flex flex-col items-center gap-1 active:scale-90"
                                >

                                    <Heart
                                        size={28}
                                        fill={liked ? "currentColor" : "none"}
                                        className={liked ? "text-red-500" : ""}
                                    />

                                    <span className="text-xs">
                                        {liked ? "1.2K" : "1.1K"}
                                    </span>

                                </button>

                                <button
                                    type="button"
                                    className="flex flex-col items-center gap-1 active:scale-90"
                                >

                                    <MessageCircle size={28} />

                                    <span className="text-xs">
                                        128
                                    </span>

                                </button>

                                <button
                                    type="button"
                                    className="active:scale-90"
                                >

                                    <Send size={28} />

                                </button>

                                <button
                                    type="button"
                                    onClick={() => toggleSave(reel.id)}
                                    className="active:scale-90"
                                >

                                    <Bookmark
                                        size={28}
                                        fill={saved ? "currentColor" : "none"}
                                    />

                                </button>

                            </div>

                        </article>
                    )
                })}

            </div>

        </main>
    )
}

export default Reels

