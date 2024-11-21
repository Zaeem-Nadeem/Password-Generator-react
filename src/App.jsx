import React from "react";
import Provider from "./store/stateHandle";
import Field from "./components/passarea";
import Select from "./components/Select";
function App() {
  return (
    <div class="background">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className="container">
        <Provider>
            <Field/>
           <div className="SelectionArea">
             <Select/>
           </div>
        </Provider>
      </div>
    </div>
  );
}

export default App;
