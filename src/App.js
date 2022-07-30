import ContactList from "./components/ContactList";
import ContactsMain from "./components/ContactsMain";


function App() {
  return (
    <div className="App">
      <h2>Contacts</h2>
      <ContactsMain />
      <ContactList />
    </div>
  );
}

export default App;
