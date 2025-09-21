"use client";

import { useState } from "react";

export default function ArticlesPage() {
  const [title, setTitle] = useState("");
  const [gallery, setGallery] = useState(""); // url(s) séparées par des virgules
  const [auteur, setAuteur] = useState("");
  const [Infoauteur, setInfoauteur] = useState("");
  const [tempsDeLecture, setTempsDeLecture] = useState("");
  const [texte, setTexte] = useState("");
  const [chapeau, setChapeau] = useState("");
  const [citation, setCitation] = useState("");
  const [intertitre, setIntertitre] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          gallery: gallery.split(",").map((g) => g.trim()),
          auteur,
          Infoauteur,
          tempsDeLecture,
          texte,
          chapeau,
          citation,
          intertitre,
        }),
      });

      if (res.ok) {
        setMessage("✅ Article envoyé, en attente de validation !");
        setTitle("");
        setGallery("");
        setAuteur("");
        setInfoauteur("");
        setTempsDeLecture("");
        setTexte("");
        setChapeau("");
        setCitation("");
        setIntertitre("");
      } else {
        const err = await res.json();
        setMessage("❌ Erreur: " + err.error);
      }
    } catch (error: any) {
      setMessage("❌ Erreur réseau: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Soumettre un article</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-full max-w-md"
      >
        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Galerie (URL séparées par virgule)"
          value={gallery}
          onChange={(e) => setGallery(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Auteur"
          value={auteur}
          onChange={(e) => setAuteur(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Info Auteur"
          value={Infoauteur}
          onChange={(e) => setInfoauteur(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Temps de lecture"
          value={tempsDeLecture}
          onChange={(e) => setTempsDeLecture(e.target.value)}
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Texte"
          value={texte}
          onChange={(e) => setTexte(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <textarea
          placeholder="Chapeau"
          value={chapeau}
          onChange={(e) => setChapeau(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Citation"
          value={citation}
          onChange={(e) => setCitation(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Intertitre"
          value={intertitre}
          onChange={(e) => setIntertitre(e.target.value)}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Envoi..." : "Envoyer"}
        </button>
      </form>

      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}
