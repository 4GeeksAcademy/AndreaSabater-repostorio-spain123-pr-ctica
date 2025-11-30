// src/store/ContactContext.js
import { createContext, useState, useEffect } from "react";
import axios from "axios";
 
export const ContactContext = createContext();
 
export const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);

    const[ agendas , setAgendas ]= useState([]);

 
    useEffect(() => {
        fetchContacts();
        fetchAgendas ();
    }, []);
 
    const fetchContacts = async () => {
        try {
            const res = await axios.get("/api/contacts"); // tu endpoint
            setContacts(res.data);
        } catch (err) {
            console.error(err);
        }
    };
 
    const createContact = async (contact) => {
        try {
            const res = await axios.post("/api/contacts", contact);
            setContacts([...contacts, res.data]);
        } catch (err) {
            console.error(err);
        }
    };
 
    const updateContact = async (id, updated) => {
        try {
            const res = await axios.put(`/api/contacts/${id}`, updated);
            setContacts(contacts.map(c => c.id === id ? res.data : c));
        } catch (err) {
            console.error(err);
        }
    };
 
    const deleteContact = async (id) => {
        try {
            await axios.delete(`/api/contacts/${id}`);
            setContacts(contacts.filter(c => c.id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    const fetchAgendas = async () => {
    try {
        const res = await axios.get("https://playground.4geeks.com/contact/agendas");
       setAgendas(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
        console.error(err);
        setAgendas([]); // opcional
    }
};

    const createAgenda = async (agenda) => {
        try {
            const res = await axios.post("https://playground.4geeks.com/contact/agendas", agenda);
            setAgendas([...agendas, res.data]);
        } catch (err) {
            console.error(err);
        }
    };
 
    return (
        <ContactContext.Provider value={{ contacts,agendas,createAgenda, createContact, updateContact, deleteContact }}>
            {children}
        </ContactContext.Provider>
    );
};