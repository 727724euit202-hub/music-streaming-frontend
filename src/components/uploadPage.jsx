import { useState } from "react";
import axios from "axios";
export const UploadPage=()=>{
    const[title,setTitle]=useState("");
    const[artist,setArtist]=useState("");
    const[file,setFile]=useState(null);
    const[message,setMessage]=useState("");

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(!file){
            setMessage("Please select an audio file");
            return;
        }
        if(!artist || !file){
            setMessage("Please fill all fields and select a file");
            return;
        }
        const formData = new FormData();
        formData.append("title",title);
        formData.append("artist",artist);
        formData.append("file",file);
        try{
            const response = await axios.post("http://localhost:8080/api/songs/upload",formData);
            console.log(response.data);
            if(response.status==200){
                setMessage("Song uploaded successfully!");
                setTitle("");
                setArtist("");
                setFile(null);
            }
        }
    catch(error){
        console.error("Error uploading song:",error);
        setMessage("Error uploading song. Please try again.");
    }
}
    return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Upload Song</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Song Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <br />

        <div>
          <input
            type="text"
            placeholder="Artist Name"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>

        <br />

        <div>
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <br />

        <button type="submit">Upload</button>
      </form>

      <p>{message}</p>
    </div>
  );
}
