import React from "react";
import { AppShell } from "ui";
function App() {
  return (
    <AppShell
      routes={[
        { path: "/", element: () => <div>Is this really Home</div> },
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
