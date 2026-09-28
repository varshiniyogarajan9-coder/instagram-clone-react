import { useState } from "react"

import {
    Heart,
    MessageCircle,
    Send,
    Bookmark
} from "lucide-react"

function PostCard({ post }) {

    const [liked, setLiked] = useState(false)
    const [showComments, setShowComments] = useState(false)
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])
    const [saved, setSaved] = useState(false)
    const [showLikeAnimation, setShowLikeAnimation] = useState(false)

    function handleLike() {

        setLiked(!liked)

    }

    function handleImageDoubleClick() {

        if (!liked) {
            setLiked(true)
        }

        setShowLikeAnimation(true)

        setTimeout(() => {
            setShowLikeAnimation(false)
        }, 700)

    }

    function handleAddComment() {

        if (comment.trim() === "") {
            return
        }

        setComments([
            ...comments,
            comment
        ])

        setComment("")

    }

    function handleSave() {

        setSaved(!saved)

    }

    async function handleShare() {

        const shareData = {
            title: `${post.username}'s post`,
            text: post.caption,
            url: window.location.href
        }

        if (navigator.share) {

            try {

                await navigator.share(shareData)

            } catch (error) {

                console.log("Share cancelled")

            }

        } else {

            alert("Sharing is not supported in this browser.")

        }

    }

    return (
        <article className="bg-white">

            <div className="flex items-center justify-between px-1 py-3">

                <div className="flex items-center gap-3">

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">

                        <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-xs font-semibold">

                            {post.username.charAt(0).toUpperCase()}

                        </div>

                    </div>

                    <span className="text-sm font-semibold">
                        {post.username}
                    </span>

                </div>

                <button
                    type="button"
                    className="px-2 text-xl font-semibold leading-none"
                    aria-label="More options"
                >
                    ···
                </button>

            </div>

            <div
                className="relative cursor-pointer overflow-hidden"
                onDoubleClick={handleImageDoubleClick}
            >

                <img
                    src={post.image}
                    alt=""
                    className="aspect-square w-full object-cover"
                />

                {showLikeAnimation && (

                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">

                        <Heart
                            size={96}
                            strokeWidth={1.5}
                            fill="white"
                            className="animate-ping text-white"
                        />

                    </div>

                )}

            </div>

            <div className="px-1 pt-3">

                <div className="flex items-center">

                    <div className="flex items-center gap-4">

                        <button
                            type="button"
                            onClick={handleLike}
                            aria-label={liked ? "Unlike" : "Like"}
                            className={`transition-transform duration-150 active:scale-75 ${
                                liked
                                    ? "text-red-500"
                                    : "text-black"
                            }`}
                        >

                            <Heart
                                size={25}
                                strokeWidth={2}
                                fill={liked ? "currentColor" : "none"}
                            />

                        </button>

                        <button
                            type="button"
                            onClick={() => setShowComments(!showComments)}
                            aria-label="Comment"
                            className="transition-transform duration-150 active:scale-75"
                        >

                            <MessageCircle
                                size={25}
                                strokeWidth={2}
                            />

                        </button>

                        <button
                            type="button"
                            onClick={handleShare}
                            aria-label="Share"
                            className="transition-transform duration-150 active:scale-75"
                        >

                            <Send
                                size={25}
                                strokeWidth={2}
                            />

                        </button>

                    </div>

                    <button
                        type="button"
                        onClick={handleSave}
                        aria-label={saved ? "Unsave" : "Save"}
                        className="ml-auto transition-transform duration-150 active:scale-75"
                    >

                        <Bookmark
                            size={25}
                            strokeWidth={2}
                            fill={saved ? "currentColor" : "none"}
                        />

                    </button>

                </div>

                <p className="mt-3 text-sm font-semibold">

                    {liked
                        ? "1,235 likes"
                        : "1,234 likes"
                    }

                </p>

                <p className="mt-2 text-sm leading-5">

                    <span className="font-semibold">
                        {post.username}
                    </span>{" "}

                    {post.caption}

                </p>

                <button
                    type="button"
                    onClick={() => setShowComments(!showComments)}
                    className="mt-2 text-sm text-gray-400"
                >
                    {comments.length > 0
                        ? `View all ${comments.length} comments`
                        : "View all comments"
                    }
                </button>

                {showComments && (

                    <div className="mt-4 border-t border-gray-100 pt-4">

                        <div className="flex items-center gap-2">

                            <input
                                type="text"
                                value={comment}
                                onChange={(event) =>
                                    setComment(event.target.value)
                                }
                                onKeyDown={(event) => {

                                    if (event.key === "Enter") {
                                        handleAddComment()
                                    }

                                }}
                                placeholder="Add a comment..."
                                className="flex-1 bg-transparent px-1 py-2 text-sm outline-none placeholder:text-gray-400"
                            />

                            <button
                                type="button"
                                onClick={handleAddComment}
                                disabled={!comment.trim()}
                                className="text-sm font-semibold text-blue-500 disabled:cursor-default disabled:opacity-40"
                            >
                                Post
                            </button>

                        </div>

                        {comments.length > 0 && (

                            <div className="mt-3 space-y-3">

                                {comments.map((item, index) => (

                                    <p
                                        key={index}
                                        className="text-sm"
                                    >

                                        <span className="font-semibold">
                                            You
                                        </span>{" "}

                                        {item}

                                    </p>

                                ))}

                            </div>

                        )}

                    </div>

                )}

            </div>

        </article>
    )
}

export default PostCard

