import { useState } from "react"

import {
    ImagePlus,
    X,
    MapPin,
    Smile,
    ChevronLeft
} from "lucide-react"

function CreatePost() {

    const [selectedImage, setSelectedImage] = useState(null)
    const [caption, setCaption] = useState("")
    const [location, setLocation] = useState("")
    const [showPreview, setShowPreview] = useState(false)
    const [posted, setPosted] = useState(false)

    function handleImageChange(event) {

        const file = event.target.files?.[0]

        if (!file) {
            return
        }

        const imageUrl = URL.createObjectURL(file)

        setSelectedImage(imageUrl)
        setShowPreview(false)
        setPosted(false)
    }

    function handleRemoveImage() {
        setSelectedImage(null)
        setCaption("")
        setLocation("")
        setShowPreview(false)
        setPosted(false)
    }

    function handleNext() {

        if (!selectedImage) {
            return
        }

        setShowPreview(true)
    }

    function handleBack() {
        setShowPreview(false)
    }

    function handleCreatePost() {

        if (!selectedImage) {
            return
        }

        setPosted(true)
    }

    function handleCreateAnother() {

        setSelectedImage(null)
        setCaption("")
        setLocation("")
        setShowPreview(false)
        setPosted(false)
    }

    return (
        <main className="min-h-screen bg-white pb-20 md:ml-64 md:pb-0">

            <div className="mx-auto max-w-4xl px-4 py-6 md:px-8 md:py-10">

                <div className="mb-8">

                    <h1 className="text-2xl font-semibold">
                        Create new post
                    </h1>

                    <p className="mt-1 text-sm text-gray-400">
                        Share a photo with your followers
                    </p>

                </div>

                {posted ? (

                    <div className="flex min-h-[500px] flex-col items-center justify-center rounded-2xl border border-gray-200 px-6 text-center">

                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-600">

                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-10 w-10"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    d="M5 12.5l4 4L19 7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                        </div>

                        <h2 className="mt-5 text-xl font-semibold">
                            Your post has been shared
                        </h2>

                        <p className="mt-2 max-w-sm text-sm text-gray-400">
                            Your photo and caption are ready to be shared
                            with your followers.
                        </p>

                        <button
                            type="button"
                            onClick={handleCreateAnother}
                            className="mt-6 rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
                        >
                            Create another post
                        </button>

                    </div>

                ) : !selectedImage ? (

                    <div className="flex min-h-[500px] flex-col items-center justify-center rounded-2xl border border-gray-200 px-6 text-center">

                        <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-black">

                            <ImagePlus
                                size={42}
                                strokeWidth={1.5}
                            />

                        </div>

                        <h2 className="mt-6 text-xl font-semibold">
                            Drag photos and videos here
                        </h2>

                        <p className="mt-2 text-sm text-gray-400">
                            Choose a photo from your device to create a post.
                        </p>

                        <label className="mt-6 cursor-pointer rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600">

                            Select from computer

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />

                        </label>

                    </div>

                ) : !showPreview ? (

                    <div className="overflow-hidden rounded-2xl border border-gray-200">

                        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">

                            <div>

                                <p className="text-sm font-semibold">
                                    New post
                                </p>

                                <p className="text-xs text-gray-400">
                                    Preview your photo
                                </p>

                            </div>

                            <button
                                type="button"
                                onClick={handleRemoveImage}
                                className="rounded-full p-2 transition hover:bg-gray-100"
                                aria-label="Remove image"
                            >
                                <X size={20} />
                            </button>

                        </div>

                        <div className="flex min-h-[450px] items-center justify-center bg-black">

                            <img
                                src={selectedImage}
                                alt="Post preview"
                                className="max-h-[650px] max-w-full object-contain"
                            />

                        </div>

                        <div className="flex justify-end border-t border-gray-200 p-4">

                            <button
                                type="button"
                                onClick={handleNext}
                                className="rounded-lg bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
                            >
                                Next
                            </button>

                        </div>

                    </div>

                ) : (

                    <div className="overflow-hidden rounded-2xl border border-gray-200">

                        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">

                            <div className="flex items-center gap-3">

                                <button
                                    type="button"
                                    onClick={handleBack}
                                    className="rounded-full p-1.5 transition hover:bg-gray-100"
                                    aria-label="Back"
                                >
                                    <ChevronLeft size={22} />
                                </button>

                                <p className="text-sm font-semibold">
                                    Create new post
                                </p>

                            </div>

                            <button
                                type="button"
                                onClick={handleCreatePost}
                                className="text-sm font-semibold text-blue-500 hover:text-blue-600"
                            >
                                Share
                            </button>

                        </div>

                        <div className="grid md:grid-cols-2">

                            <div className="flex min-h-[450px] items-center justify-center bg-black">

                                <img
                                    src={selectedImage}
                                    alt="Post preview"
                                    className="max-h-[600px] max-w-full object-contain"
                                />

                            </div>

                            <div className="p-5">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">

                                        <div className="flex h-full w-full items-center justify-center rounded-full bg-white font-semibold">
                                            V
                                        </div>

                                    </div>

                                    <span className="text-sm font-semibold">
                                        varshini
                                    </span>

                                </div>

                                <textarea
                                    value={caption}
                                    onChange={(event) =>
                                        setCaption(event.target.value)
                                    }
                                    maxLength={2200}
                                    placeholder="Write a caption..."
                                    className="mt-5 min-h-40 w-full resize-none text-sm outline-none placeholder:text-gray-400"
                                />

                                <div className="flex items-center justify-between border-b border-gray-200 pb-4">

                                    <Smile
                                        size={22}
                                        className="text-gray-500"
                                    />

                                    <span className="text-xs text-gray-400">
                                        {caption.length}/2,200
                                    </span>

                                </div>

                                <div className="flex items-center gap-3 border-b border-gray-200 py-4">

                                    <MapPin
                                        size={20}
                                        className="text-gray-500"
                                    />

                                    <input
                                        type="text"
                                        value={location}
                                        onChange={(event) =>
                                            setLocation(event.target.value)
                                        }
                                        placeholder="Add location"
                                        className="flex-1 text-sm outline-none"
                                    />

                                </div>

                                <div className="mt-6 rounded-xl bg-gray-50 p-4">

                                    <p className="text-sm font-semibold">
                                        Post preview
                                    </p>

                                    <p className="mt-1 text-xs leading-5 text-gray-400">
                                        Your caption and location will appear
                                        with your photo when the post is shared.
                                    </p>

                                </div>

                                <button
                                    type="button"
                                    onClick={handleCreatePost}
                                    className="mt-5 w-full rounded-lg bg-blue-500 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
                                >
                                    Share post
                                </button>

                            </div>

                        </div>

                    </div>

                )}

            </div>

        </main>
    )
}

export default CreatePost



