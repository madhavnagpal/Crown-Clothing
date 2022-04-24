import { Route, Routes } from "react-router-dom";

import Navigation from "./routes/navigation";
import Home from "./routes/home";
import Authentication from "./routes/authentication";
import Shop from "./routes/shop";
import Checkout from "./routes/checkout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
