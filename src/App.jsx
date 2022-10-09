import { Container } from "react-bootstrap";
import AppRoutes from "./AppRoutes/";

import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4 containerApp">
        <AppRoutes />
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
