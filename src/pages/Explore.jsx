import { useState } from "react"

import {
    X
} from "lucide-react"

function Explore() {

    const [selectedPost, setSelectedPost] = useState(null)

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
        },
        {
            id: 10,
            image: "https://images.unsplash.com/photo-1500534623283-312aade485b7"
        },
        {
            id: 11,
            image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec"
        },
        {
            id: 12,
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        }
    ]

    return (
        <main className="min-h-screen bg-white pb-20 md:ml-64 md:pb-0">

            <div className="mx-auto max-w-5xl px-2 py-4 md:px-4 md:py-8">

                <h1 className="mb-6 px-2 text-2xl font-semibold md:hidden">
                    Explore
                </h1>

                <div className="grid grid-cols-3 gap-1 md:gap-2">

                    {posts.map((post, index) => (

                        <button
                            key={post.id}
                            type="button"
                            onClick={() => setSelectedPost(post)}
                            className={`group relative overflow-hidden ${
                                index === 3
                                    ? "col-span-2 row-span-2"
                                    : ""
                            }`}
                        >

                            <img
                                src={post.image}
                                alt=""
                                className="aspect-square h-full w-full object-cover transition duration-300 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />

                        </button>

                    ))}

                </div>

            </div>

            {selectedPost && (

                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
                    onClick={() => setSelectedPost(null)}
                >

                    <button
                        type="button"
                        onClick={() => setSelectedPost(null)}
                        className="absolute right-5 top-5 text-white"
                        aria-label="Close"
                    >

                        <X size={30} />

                    </button>

                    <div
                        className="max-h-[90vh] max-w-2xl overflow-hidden"
                        onClick={(event) => event.stopPropagation()}
                    >

                        <img
                            src={selectedPost.image}
                            alt=""
                            className="max-h-[90vh] max-w-full object-contain"
                        />

                    </div>

                </div>

            )}

        </main>
    )
}

export default Explore

