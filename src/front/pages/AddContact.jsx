
import { useGlobalReducer } from "../store/appContext";

export default function AddContact() {
  const { store, dispatch } = useGlobalReducer();

  const loadContacts = async () => {
    try {
      const backendUrl = "https://playground.4geeks.com/contact";

      if (!backendUrl) {
        throw new Error("VITE_BACKEND_URL is not defined in .env file");
      }

      const response = await fetch(backendUrl + "/agendas");
      const data = await response.json();

      if (response.ok) {
        dispatch({
          type: "add_contact",
          payload: data.agendas,
        });
      }

      return data;
    } catch (error) {
      throw new Error(
        `Could not fetch the contacts.
        Please check if the backend is running and the backend port is public.`
      );
    }
  };

  
   useEffect(() => { loadContacts(); }, []);

  return (
    <div>
      <h1>Add Contact</h1>
      {/* aquí va tu formulario o UI */}
    </div>
  );
}
