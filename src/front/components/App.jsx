
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactProvider } from "./context/ContactContext";
import ContactList from "./views/ContactList";
import AddContact from "./views/AddContact";

export default function App() {
return (
<ContactProvider>
<BrowserRouter>
<Routes>
<Route path="/" element={<ContactList />} />
<Route path="/add" element={<AddContact />} />
<Route path="/edit/:id" element={<AddContact />} />
</Routes>
</BrowserRouter>
</ContactProvider>
);
}