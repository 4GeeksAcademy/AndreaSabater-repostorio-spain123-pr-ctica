
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const Contact = () => {
 
   const { store, dispatch } = useGlobalReducer()
  
    const loadMessage = async () => {
      try {
        const backendUrl = "https://playground.4geeks.com/contact"
  
        if (!backendUrl) throw new Error("VITE_BACKEND_URL is not defined in .env file")
  
        const response = await fetch(backendUrl + "/agendas")
        const data = await response.json()
  
        if (response.ok) dispatch({ type: "add_contact", payload:data.agendas})
  
        return data
  
      } catch (error) {
        if (error.message) throw new Error(
          `Could not fetch the message from the backend.
          Please check if the backend is running and the backend port is public.`
        );
      }
  
    }
  
    useEffect(() => {
      loadMessage()
    }, [])


  return (
    <div className="container">
     <p> { store.Contact} </p>
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
