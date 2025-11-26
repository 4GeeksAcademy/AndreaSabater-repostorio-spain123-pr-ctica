// ==========================
// INITIAL STORE
// ==========================
export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      },
    ],

    // Añadido para gestionar contactos
    contacts: [],
  };
};

// ==========================
// REDUCER
// ==========================
export default function storeReducer(store, action = {}) {
  switch (action.type) {
    // Manejo de mensaje de prueba
    case "set_hello":
      return {
        ...store,
        message: action.payload,
      };

    // Actualizar color de un todo (tu código original)
    case "add_task":
      const { id, color } = action.payload;

      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === id ? { ...todo, background: color } : todo
        ),
      };

    // ==========================
    // CONTACT ACTIONS
    // ==========================

    // Guarda la lista completa de contactos desde el backend
    case "set_contacts":
      return {
        ...store,
        contacts: action.payload,
      };

    // Agregar un contacto nuevo
    case "add_contact":
      return {
        ...store,
        contacts: [...store.contacts, action.payload],
      };

    // Editar contacto
    case "update_contact":
      return {
        ...store,
        contacts: store.contacts.map((c) =>
          c.id === action.payload.id ? action.payload : c
        ),
      };

    // Eliminar contacto
    case "delete_contact":
      return {
        ...store,
        contacts: store.contacts.filter((c) => c.id !== action.payload),
      };

    default:
      throw Error(" No encontrada la action.");
  }
}
