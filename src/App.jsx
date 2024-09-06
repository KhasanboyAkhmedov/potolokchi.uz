import { Routes, Route, Navigate} from "react-router-dom";
import routes, { useRoutes } from "@/routes";
import { Home } from "./pages";
import DetailsPage from "./pages/DetailsPage";


function App() {
  const routes = useRoutes();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:itemName" element={<DetailsPage/>} />
        {routes.map(
          ({ path, element }, key) =>
            element ? <Route key={key} exact path={path} element={element} />
            : <Route key={key} exact path={path} />
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
