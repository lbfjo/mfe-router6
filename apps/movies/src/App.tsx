import React from "react";
import { AppShell } from "ui/dist/src";
import { MoviesContent } from "movies-content";
import { PlaylistContent } from "playlist-content";

function App() {
  return (
    <AppShell
      routes={[
        { path: "/", element: MoviesContent },
        { path: "/playlist", element: PlaylistContent },
      ]}
      title="Movies"
      colorScheme="light"
      navLinks={[
        { label: "Home", path: "/" },
        { label: "Playlist", path: "/Playlist" },
      ]}
    />
  );
}

export default App;
