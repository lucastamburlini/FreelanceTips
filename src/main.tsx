import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./context/userContext.tsx";
import { PostProvider } from "./context/postContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <DataProvider>
      <PostProvider>
        <App />
      </PostProvider>
    </DataProvider>
  </BrowserRouter>
);
