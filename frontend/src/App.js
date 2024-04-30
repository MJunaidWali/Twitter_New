import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.js";
import Signin from "./pages/Signin.js";
import Flow from "./pages/Flow.js";
import Create from "./pages/Create.js";
import Home from "./pages/Home.js";
import Nopage from "./pages/Nopage.js";
import Tweet from "./pages/Tweet.js";
import Comments from "./pages/Comments.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/signflow" element={<Flow />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/create" element={<Create />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nopage" element={<Nopage />} />
        <Route path="/tweet" element={<Tweet />} />
        <Route path="/comments" element={<Comments/>} />
      </Routes>
    </div>
  );
}

export default App;
