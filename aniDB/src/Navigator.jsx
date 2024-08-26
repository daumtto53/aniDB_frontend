import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";

import RootLayout from "./Root/RootLayout";
import Home from "./Home/Home";
import Explorer from "./Discover/Explorer";
import Discover from "./Discover/Discover";
import PublicationInfo from "./Info/PublicationInfo";
import PublisherInfo from "./Info/PublisherInfo";
import BoardWrite from "./Board/BoardWrite/BoardWrite";
import BoardRead from "./Board/BoardRead/BoardRead";
import Profile from "./Profile/Profile";
import ModifyProfile from "./Profile/ModifyProfile";
import BoardMain from "./Board/BoardMain/BoardMain";
import AdvancedSearch from "./AdvancedSearch/advancedSearch";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<AdvancedSearch />} />
        <Route path="explorer" element={<Explorer />} />
        <Route path="discover" element={<Discover />} />
        {/* <Route path="manga" element={<Manga />} /> */}
        {/* <Route path="lightnovel" element={<LightNovel />} /> */}
        {/* <Route path="anime" element={<Anime />} /> */}
        {/* <Route path="artist" element={<Artist />} /> */}
        <Route path="publisher" element={<PublisherInfo />} />
        {/* <Route path="profile" element={<Profile />} /> */}

        {/* <Route path="manga" element={<Manga />} /> */}
        {/* <Route path="lightnovel" element={<LightNovel />} /> */}
        {/* <Route path="anime" element={<Anime />} /> */}

        {/* <Route path="board" element={<Anime />} /> */}
        {/* <Route path="anime" element={<Anime />} /> */}
        {/* <Route path="anime" element={<Anime />} /> */}

        <Route path="info" element={<PublicationInfo />} />
        <Route path="boardwrite" element={<BoardWrite />} />
        <Route path="boardread" element={<BoardRead/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="modifyprofile" element={<ModifyProfile />} />
        <Route path="board" element={<BoardMain />} />

      </Route>
    </>
  )
);

export default function Navigator() {
  return <RouterProvider router={router} />;
}
