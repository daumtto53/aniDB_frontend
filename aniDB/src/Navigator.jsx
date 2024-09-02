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
import Discover, { discoverAction, discoverLoader } from "./Discover/Discover";
import PublicationInfo, { publicationInfoLoader } from "./Info/PublicationInfo";
import PublisherInfo, { publisherInfoLoader } from "./Info/PublisherInfo";
import BoardWrite from "./Board/BoardWrite/BoardWrite";
import BoardRead from "./Board/BoardRead/BoardRead";
import Profile from "./Profile/Profile";
import ModifyProfile from "./Profile/ModifyProfile";
import BoardMain from "./Board/BoardMain/BoardMain";
import AdvancedSearch, { advancedSearchAction, advancedSearchLoader } from "./AdvancedSearch/advancedSearch";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="search" loader={advancedSearchLoader} action={advancedSearchAction} element={<AdvancedSearch />} />
        <Route path="explorer" element={<Explorer />} />
        <Route path="discover" element={<Discover />} />
        {/* subject == [publication?type=manga.lightnovel | anime |  publisher | artist] */}
        <Route
          path="discover/:subject"
          loader={discoverLoader}
          action={discoverAction}
          element={<Discover />}
        />
        {/* <Route path="manga" element={<Manga />} /> */}
        {/* <Route path="lightnovel" element={<LightNovel />} /> */}
        {/* <Route path="anime" element={<Anime />} /> */}
        {/* <Route path="artist" element={<Artist />} /> */}
        <Route path="publisher" element={<PublisherInfo />} />
        {/* <Route path="profile" element={<Profile />} /> */}

        {/* <Route path="manga" element={<Manga />} /> */}
        {/* <Route path="lightnovel" element={<LightNovel />} /> */}
        {/* <Route path="anime" element={<Anime />} /> */}

        <Route path="article/:id" element={<BoardMain />} />
        {/* <Route path="anime" element={<Anime />} /> */}
        {/* <Route path="anime" element={<Anime />} /> */}

        <Route path="info/publication/:publicationId" loader={publicationInfoLoader} element={<PublicationInfo />} />
        <Route path="info/publisher/:publisherId" loader={publisherInfoLoader} element={<PublisherInfo/>} />
        <Route path="boardwrite" element={<BoardWrite />} />
        <Route path="boardread" element={<BoardRead />} />
        <Route path="profile" element={<Profile />} />
        <Route path="modifyprofile" element={<ModifyProfile />} />
        <Route path="board" element={<BoardMain />} />
      </Route>
    </>
  )
);

export default function Navigator() {
  return <RouterProvider router={router} />;
}
