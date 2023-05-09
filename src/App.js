import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { ACTIONS, ORIGINALS } from "./Constants/Constants";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title="Netflix Originals" url={ORIGINALS} />
      <RowPost title="Actions" url={ACTIONS} isSmall />
    </div>
  );
}

export default App;
