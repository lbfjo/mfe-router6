import React from "react";
import { AppShell } from "ui";
import { MoviesContent } from "./MoviesContent";
import { PlaylistContent } from "./PlaylistContent";
function App() {
  return (
    <AppShell
      routes={[
        { path: "/", element: () => <div>Should be the movies Route </div> },
        { path: "/playlist", element: PlaylistContent },
      ]}
      title="Playlist"
      colorScheme="dark"
      navLinks={[
        { label: "Home", path: "/home" },
        { label: "Playlist", path: "/Playlist" },
      ]}
    />
  );
}

export default App;
