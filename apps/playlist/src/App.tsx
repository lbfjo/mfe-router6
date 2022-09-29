import React from "react";
import { AppShell } from "ui";
import { PlaylistContent } from "playlist-content";
import { MoviesContent } from "movies-content";

function App() {
  return (
    <AppShell
      routes={[
        { path: "/", element: MoviesContent },
        { path: "/playlist", element: PlaylistContent },
      ]}
      title="Playlist"
      colorScheme="dark"
      navLinks={[
        { label: "Home", path: "/" },
        { label: "Playlist", path: "/Playlist" },
      ]}
    />
  );
}

export default App;
