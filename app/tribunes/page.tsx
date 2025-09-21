"use client";
import Grid from "@/components/ui/grid";
import { useState } from "react";

export default function ArticlePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (res.ok) {
        setMessage("✅ Merci ! Ton article est en attente de validation.");
        setTitle("");
        setContent("");
      } else {
        const err = await res.json();
        setMessage("❌ Erreur: " + err.error);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setMessage("❌ Erreur réseau: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Soumettre un article</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white shadow p-4 rounded"
      >
        <input
          type="text"
          placeholder="Titre de l'article"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full border border-gray-300 p-2 rounded"
        />

        <textarea
          placeholder="Contenu..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={6}
          className="w-full border border-gray-300 p-2 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Envoi..." : "Envoyer"}
        </button>
      </form>

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
