import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Search from "./pages/Search"
import Explore from "./pages/Explore"
import Reels from "./pages/Reels"
import Messages from "./pages/Messages"
import Notifications from "./pages/Notifications"
import CreatePost from "./pages/CreatePost"
import Profile from "./pages/Profile"

function App() {

    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/search"
                    element={<Search />}
                />

                <Route
                    path="/explore"
                    element={<Explore />}
                />

                <Route
                    path="/reels"
                    element={<Reels />}
                />

                <Route
                    path="/messages"
                    element={<Messages />}
                />

                <Route
                    path="/notifications"
                    element={<Notifications />}
                />

                <Route
                    path="/create"
                    element={<CreatePost />}
                />

                <Route
                    path="/profile"
                    element={<Profile />}
                />

            </Routes>

        </BrowserRouter>
    )
}

export default App