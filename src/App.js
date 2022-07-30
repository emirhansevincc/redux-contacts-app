import ContactsMain from "./components/ContactsMain";
import EditContact from "./components/EditContact";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>Contacts</h2>
        <Routes>
          <Route path="/" element={<ContactsMain />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
