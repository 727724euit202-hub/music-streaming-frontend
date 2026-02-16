import { useEffect, useRef, useState } from "react";
import SongCard from "./SongCard";
const Player = () => {
    const [songs, setSongs] = useState([]);
  const [currentIndex,setCurrentIndex]=useState(0);

  const audioRef=useRef(null);

  const playNext=()=>{
    if(currentIndex<songs.length-1){
      setCurrentIndex(currentIndex+1);
    }
    else{
      setCurrentIndex(0);
    }
  }

  const playPrevious=()=>{
    if(currentIndex>0){
      setCurrentIndex(currentIndex-1);
    }
    else{
      setCurrentIndex(songs.length-1);
    }
  }
  const replay=()=>{
    audioRef.current.currentTime=0;
    audioRef.current.play();
  }


  useEffect(() => {
    fetch("http://localhost:8080/api/songs")
      .then((res) => res.json())
      .then((data) => setSongs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="page">
    <div className="app-container">
      <h2 className="app-title">🎵 My Music App</h2>
      {songs.length==0 && <p>No Songs Available</p>}
      <div className="songCard">{songs.length > 0 && <SongCard song={songs[currentIndex]} onSongEnd={playNext} audioRef={audioRef}></SongCard>}</div>
      <div className="controls"><button onClick={playPrevious}>Previous</button>      
      <button onClick={playNext}>Next</button>
      <button onClick={replay}>Replay</button>
      </div>
    </div>
    </div>
  );
};

export default Player;