import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({
  song,
  songs,
  setSongs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
}) => {
  // event Handlers
  const setSongHandler = async () => {
    // console.log(song.id);
    // const selectedSong = songs.filter((state) => state.id === id);
    // await setCurrentSong(selectedSong[0]);

    await setCurrentSong(song);
    // audioRef.current.play();

    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    console.log("Song Selected");
    setSongs(newSongs);

    // if (isPlaying) audioRef.current.play();
    playAudio(isPlaying, audioRef);
  };

  return (
    <div
      onClick={setSongHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />

      <div className="song-des">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
