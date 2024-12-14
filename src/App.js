// Import necessary hooks and components
import { useState } from "react";
import Navbar from "./components/Navbar";  // Navbar component for navigation
import Home from "./pages/Home";          // Home page component
import About from "./pages/About";        // About page component
import Items from "./pages/Items";        // Items page component

function App() {
  // Declare state to track the current page. Initial page is 'home'.
  const [page, setPage] = useState('home'); 

  return (
    <>
      {/* Render the Navbar component, passing `setPage` to update the page state */}
      <Navbar setPage={setPage} />

      {/* Conditionally render components based on the value of `page` state */}
      {page === "home" && <Home />}     {/* If the page is 'home', render the Home component */}
      {page === "About" && <About />}   {/* If the page is 'About', render the About component */}
      {page === "Items" && <Items />}   {/* If the page is 'Items', render the Items component */}
    </>
  );
}

// Export the App component so it can be used in other parts of the application.
export default App;
