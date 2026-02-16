import { useState,useEffect } from "react"
import axios from "axios";

const PlayList = () => {
    const[playLists,setPlayLists]=useState([]);
    const[name,setName]=useState("");   

    useEffect(()=>{
        fetchPlayLists();
    },[]);

    const fetchPlayLists = async () => {
  const res = await fetch("http://localhost:8080/api/playlists");
  const data = await res.json();
  setPlayLists(data);
};


    const createPlayLists = async () =>{
        await axios.post(`http://localhost:8080/api/playlists?name=${name}`);
        setName("");
        fetchPlayLists();
    }

    return (
        <div>
            <h2>Play Lists</h2>
            <input type="text" value={name}
            onChange={(e)=>setName(e.target.value)} placeholder="Type PlayList Name"></input>

            <button onClick={createPlayLists}>Create PlayList</button>

            <ul>
                {playLists.map((playList)=>{
                    return <li key={playList.id}>{playList.name}</li>
                })}
            </ul>
        </div>
    )
}

export default PlayList;