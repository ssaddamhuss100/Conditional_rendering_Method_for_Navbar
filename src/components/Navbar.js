// Navbar component accepts `setPage` as a prop, which is a function to change the current page.
function Navbar({ setPage }) {
  return (
    <>
      {/* Main container for the navigation bar */}
      <div className="nav">
        
        {/* Navigation item for the 'Home' page */}
        <h4 
          onClick={() => { 
            setPage('Home');  // Calls the `setPage` function with the argument 'Home' to switch the page
          }}
        >
          HOME
        </h4>
        
        {/* Navigation item for the 'About' page */}
        <h4 
          onClick={() => { 
            setPage('About');  // Calls the `setPage` function with the argument 'About' to switch the page
          }}
        >
          ABOUT
        </h4>
        
        {/* Navigation item for the 'Items' page */}
        <h4 
          onClick={() => { 
            setPage('Items');  // Calls the `setPage` function with the argument 'Items' to switch the page
          }}
        >
          ITEMS
        </h4>
        
      </div>
    </>
  );
}

// Export the Navbar component so it can be used in other parts of the application.
export default Navbar;
