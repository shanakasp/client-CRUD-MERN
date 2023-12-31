import React from "react";

import ImageGrid from "./ImageGrid";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

function Home() {
  return (
    <div className="bg-dark-subtle" style={{ height: "100vh" }}>
      <Navbar></Navbar>
      <Searchbar></Searchbar>
      <ImageGrid></ImageGrid>

      {/* Add routes for other pain IDs */}
    </div>
  );
}

export default Home;
