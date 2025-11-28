import { createContext, useEffect, useState, createElement } from "react";

export const ContactContext = createContext();

const API_URL = "https://playground.4geeks.com/contact";

export function ContactProvider({ children }) {
  const [contacts, setContacts] = useState([]);

  // READ
  const loadContacts = async () => {
    const res = await fetch(`${API_URL}`);
    const data = await res.json();
    setContacts(data);
  };

  // CREATE
  const createContact = async (contact) => {
    await fetch(`${API_URL}`, {
      method: "POST",
      body: JSON.stringify(contact),
      headers: { "Content-Type": "application/json" },
    });
    loadContacts();
  };

  // UPDATE
  const updateContact = async (id, contact) => {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(contact),
      headers: { "Content-Type": "application/json" },
    });
    loadContacts();
  };

  // DELETE
  const deleteContact = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    loadContacts();
  };

  useEffect(() => {
    loadContacts();
  }, []);

  return createElement(
    ContactContext.Provider,
    {
      value: {
        contacts,
        createContact,
        updateContact,
        deleteContact,
      },
    },
    children
  );
}

