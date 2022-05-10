import { Suspense } from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutesHome } from "./routes";

function App() {
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <BrowserRouter>
        <Switch>
          {renderRoutesHome()}
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
