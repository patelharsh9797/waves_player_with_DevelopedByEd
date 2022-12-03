export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    let playPromise = audioRef.current.play();

    if (playPromise !== undefined || playPromise !== null) {
      playPromise
        .then((audio) => {
          audioRef.current.play();
        })
        .catch((error) => console.log(error));
    }
  }
};
