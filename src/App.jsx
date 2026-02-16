import { Route,Routes } from "react-router-dom";
import Player from "./components/Player";
import { UploadPage } from "./components/uploadPage";
import "./index.css";
import PlayList from "./components/PlayList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Player/>}/>
        <Route path="/upload" element={<UploadPage/>}/>
        <Route path="/playlists" element={<PlayList/>}/>
      </Routes>
    </div>
  );
}

export default App;
