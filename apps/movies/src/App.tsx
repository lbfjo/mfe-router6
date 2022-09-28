import React from "react";
import { AppShell } from "ui";
import { MoviesContent } from "./MoviesContent";
function App() {
  return (
    <AppShell
      routes={[
        { path: "/", element: MoviesContent },
        { path: "/playlist", element: () => <div>Playlist</div> },
      ]}
      title="Movies"
      colorScheme="light"
      navLinks={[
        { label: "Home", path: "/home" },
        { label: "Playlist", path: "/Playlist" },
      ]}
    />
  );
}

export default App;
