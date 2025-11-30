import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'  // Global styles for your application
import { RouterProvider } from "react-router-dom";  // Import RouterProvider to use the router
import { router } from "./routes";  // Import the router configuration
import { StoreProvider } from './hooks/useGlobalReducer';  // Import the StoreProvider for global state management
import { BackendURL } from './components/BackendURL';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import AddContact from "./pages/AddContact";
import { ContactProvider } from './store/ContactContext';
import AddAgenda from './components/AddAgendas';
const Main = () => {
    
    if(! import.meta.env.VITE_BACKEND_URL ||  import.meta.env.VITE_BACKEND_URL == "") return (
        <React.StrictMode>
              <BackendURL/ >
        </React.StrictMode>
        );
    return (
        <React.StrictMode>
            <ContactProvider>
                <BrowserRouter>
            <Routes>
              <Route path="/" element={<Contact />} />
              <Route path="/add" element={<AddContact />} />
              <Route path="/edit/:id" element={<AddContact />} />
              <Route path="/addagendas" element={<AddAgenda />} />

            </Routes>
          </BrowserRouter>
            </ContactProvider>
        </React.StrictMode>
    );
}

// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
