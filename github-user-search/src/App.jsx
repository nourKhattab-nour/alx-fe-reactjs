import React from "react";
import Search from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="font-sans">
      <h1 className="text-2xl font-bold text-center my-6">
        GitHub User Search
      </h1>
      <Search />
    </div>
  );
}

export default App;
