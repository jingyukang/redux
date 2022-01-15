import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import People from "./components/People";
import AddingNumber from "./components/AddingNumber";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <People />
        <AddingNumber />
      </div>
    </Provider>
  );
}

export default App;
