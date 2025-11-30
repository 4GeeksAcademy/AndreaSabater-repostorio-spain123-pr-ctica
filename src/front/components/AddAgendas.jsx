import { useContext, useEffect, useState } from "react";
import { ContactContext } from "../store/ContactContext";
import { useNavigate, useParams } from "react-router-dom";

export default function AddAgenda() {
  const { agendas, createAgenda } = useContext(ContactContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const editing = Boolean(id);

  const [form, setForm] = useState({
    slug: "",
  });

  useEffect(() => {
    if (editing) {
      const agenda = agendas.find((a) => a.id === parseInt(id));
      if (agenda) setForm({ slug: agenda.slug });
    }
  }, [id, agendas]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.slug.trim()) {
      alert("Slug is required");
      return;
    }

    await createAgenda(form);
    navigate("/");
  };

  return (
    <div className="container">
      <h2>{editing ? "Edit Agenda" : "Create a New Agenda"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          value={form.slug}
          placeholder="Agenda slug"
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
        />

        <button className="btn btn-primary w-100">Save</button>
      </form>

      <button className="btn btn-link mt-3" onClick={() => navigate("/")}>
        or go back to agendas
      </button>
    </div>
  );
}
