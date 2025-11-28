import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./views/Contact";
import AddContact from "./views/AddContact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<AddContact />} />
      </Routes>
    </BrowserRouter>
  );
}
