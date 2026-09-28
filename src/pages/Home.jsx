import { useState } from "react"

import {
    ChevronLeft,
    ChevronRight,
    X
} from "lucide-react"

import PostCard from "../components/PostCard"
import Suggestions from "../components/Suggestions"

function Home() {

    const [selectedStory, setSelectedStory] = useState(null)

    const stories = [
        {
            id: 1,
            username: "varshini",
            image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
        },
        {
            id: 2,
            username: "rahul",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        },
        {
            id: 3,
            username: "priya",
            image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659"
        },
        {
            id: 4,
            username: "ananya",
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
        },
        {
            id: 5,
            username: "megha",
            image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df"
        },
        {
            id: 6,
            username: "arjun",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
        },
        {
            id: 7,
            username: "diya",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
        }
    ]

    const posts = [
        {
            id: 1,
            username: "varshini",
            image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
            caption: "A little bit of sunshine 🌸"
        },
        {
            id: 2,
            username: "rahul",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            caption: "Weekend escape 🌿"
        },
        {
            id: 3,
            username: "priya",
            image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
            caption: "Good days, good people ✨"
        }
    ]

    function handleStoryClick(story) {
        setSelectedStory(story)
    }

    function handleCloseStory() {
        setSelectedStory(null)
    }

    function handlePreviousStory() {

        if (!selectedStory) {
            return
        }

        const currentIndex = stories.findIndex(
            (story) => story.id === selectedStory.id
        )

        if (currentIndex > 0) {
            setSelectedStory(stories[currentIndex - 1])
        }
    }

    function handleNextStory() {

        if (!selectedStory) {
            return
        }

        const currentIndex = stories.findIndex(
            (story) => story.id === selectedStory.id
        )

        if (currentIndex < stories.length - 1) {
            setSelectedStory(stories[currentIndex + 1])
        }
    }

    return (
        <main className="min-h-screen bg-white px-4 py-6 pb-24 md:ml-64 md:px-8 md:py-8 md:pb-8">

            <div className="mx-auto flex w-full max-w-6xl gap-10">

                <div className="w-full max-w-xl">

                    <section className="mb-8 border-b border-gray-200 pb-6">

                        <div className="flex gap-5 overflow-x-auto scrollbar-hide">

                            {stories.map((story, index) => (

                                <button
                                    key={story.id}
                                    type="button"
                                    onClick={() => handleStoryClick(story)}
                                    className="flex min-w-[68px] flex-col items-center gap-2 outline-none"
                                >

                                    <div
                                        className={`h-[68px] w-[68px] rounded-full p-[3px] ${
                                            index === 0
                                                ? "bg-gray-200"
                                                : "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
                                        }`}
                                    >

                                        <div className="h-full w-full rounded-full bg-white p-[2px]">

                                            <img
                                                src={story.image}
                                                alt={story.username}
                                                className="h-full w-full rounded-full object-cover"
                                            />

                                        </div>

                                    </div>

                                    <span className="w-16 truncate text-xs text-gray-700">
                                        {index === 0
                                            ? "Your story"
                                            : story.username
                                        }
                                    </span>

                                </button>

                            ))}

                        </div>

                    </section>

                    <section className="space-y-8">

                        {posts.map((post) => (

                            <PostCard
                                key={post.id}
                                post={post}
                            />

                        ))}

                    </section>

                </div>

                <Suggestions />

            </div>

            {selectedStory && (

                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
                    onClick={handleCloseStory}
                >

                    <button
                        type="button"
                        onClick={handleCloseStory}
                        aria-label="Close story"
                        className="absolute right-5 top-5 z-20 text-white"
                    >

                        <X
                            size={30}
                            strokeWidth={2}
                        />

                    </button>

                    <div
                        className="relative h-full w-full max-w-md bg-black"
                        onClick={(event) => event.stopPropagation()}
                    >

                        <div className="absolute left-0 right-0 top-0 z-10 p-4">

                            <div className="mb-4 h-1 w-full overflow-hidden rounded-full bg-white/30">

                                <div className="h-full w-1/2 rounded-full bg-white" />

                            </div>

                            <div className="flex items-center gap-3">

                                <img
                                    src={selectedStory.image}
                                    alt={selectedStory.username}
                                    className="h-9 w-9 rounded-full object-cover"
                                />

                                <span className="text-sm font-semibold text-white">
                                    {selectedStory.username}
                                </span>

                            </div>

                        </div>

                        <img
                            src={selectedStory.image}
                            alt={`${selectedStory.username}'s story`}
                            className="h-full w-full object-cover"
                        />

                        <button
                            type="button"
                            onClick={handlePreviousStory}
                            disabled={selectedStory.id === stories[0].id}
                            aria-label="Previous story"
                            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition disabled:hidden"
                        >

                            <ChevronLeft
                                size={28}
                            />

                        </button>

                        <button
                            type="button"
                            onClick={handleNextStory}
                            disabled={
                                selectedStory.id ===
                                stories[stories.length - 1].id
                            }
                            aria-label="Next story"
                            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition disabled:hidden"
                        >

                            <ChevronRight
                                size={28}
                            />

                        </button>

                    </div>

                </div>

            )}

        </main>
    )
}

export default Home

