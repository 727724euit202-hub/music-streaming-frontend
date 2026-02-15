import { useEffect } from "react";
import "./SongCard.css";
function SongCard({song,onSongEnd,audioRef}){
    useEffect(()=>{
        if(audioRef.current){
            audioRef.current.load();
            audioRef.current.play();
        }},[song]);
    return(
        <div className="song-card">
            <h4>{song.title}</h4>
            <p>{song.artist}</p>
            <audio ref={audioRef} controls src={`http://localhost:8080/${song.audioUrl}`} onEnded={onSongEnd}/>
            <p>Plays : {song.playCount}</p>

        </div>
    );
}

export default SongCard;