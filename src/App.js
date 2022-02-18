import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { PostsList } from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AddPostForm />
                <PostsList />
              </>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
