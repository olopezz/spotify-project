import React, { useState } from "react";
import SearchForm from "./Form";
import SongCarousel from "./Carousel";

export default function App() {
  const [tracks, setTracks] = useState([]);

  const handleSearch = async (searchTerm, numSongs) => {
    const baseURL = "https://www.apitutor.org/spotify/simple/v1/search";
    const url = `${baseURL}?q=${searchTerm}&type=track&limit=${numSongs}`;
    const request = await fetch(url);
    const data = await request.json();
    console.log(data);
    setTracks(data);
  };

  return (
    <div style={{ backgroundColor: "#1ED760", minHeight: "100vh" }}>
      <header>
        <h1>Spotify Demo</h1>
      </header>
      <main>
        <SearchForm onSearch={handleSearch} />
        <SongCarousel tracks={tracks} />
      </main>
    </div>
  );
}
