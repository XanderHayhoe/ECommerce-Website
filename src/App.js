import Categories from "./components/categories/Categories";
import {} from "react-router-dom";
import Home from "./routes/home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";
import Authentication from "./routes/Authentication/Authentication";

const Shop = () => {
  return <div>I am shop her der</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
