import Banner from "./Banner/Banner";
import NavbarPage from "./Navbar/NavbarPAge";
import Presentation from "./Presentation/Presentation";

export default function App() {
  return (
    <div className="wrapper">
      <NavbarPage />
      <Banner />
      <Presentation />
    </div>
  );
}
