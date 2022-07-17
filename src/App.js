import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddMhs from "./components/AddMhs";
import EditMhs from "./components/EditMhs";
import MhsList from "./components/MhsList";

 
function App() {
  return (
    <BrowserRouter>
     <div className="App">
    
      <Routes>
        <Route path="/" element={<MhsList/>}/>
        <Route path="add" element={<AddMhs/>}/>
        <Route path="edit/:id" element={<EditMhs/>}/>
      </Routes>
      
      </div>
    </BrowserRouter>
   
  );
}
 
export default App;