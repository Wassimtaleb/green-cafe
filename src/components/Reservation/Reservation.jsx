import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation du formulaire avec Yup
const reservationSchema = yup.object().shape({
  name: yup.string().required("Le nom est obligatoire."),
  email: yup.string().email("Email invalide.").required("L'email est obligatoire."),
  date: yup.date().required("La date est obligatoire."),
  time: yup.string().required("L'heure est obligatoire."),
  guests: yup.number().min(1, "Au moins 1 invité.").max(10, "Maximum 10 invités."),
});

const Reservation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(reservationSchema),
  });

  // Fonction appelée lors de l'envoi du formulaire
  const onSubmit = (data) => {
    console.log("Données de réservation:", data);
    alert("Réservation réussie !");
  };

  return (
    <div className="container mx-auto p-6">
      <div
        className="reservation-form"
        style={{
          backgroundImage: `url('/src/assets/website/coffee-footer.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "500px", // Ajustez la hauteur du fond selon vos besoins
        }}
      >
        <h1 className="text-center text-4xl font-bold font-cursive text-white">Réservez votre table</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-white bg-opacity-80 p-6 rounded-lg"
        >
          {/* Champ Nom */}
          <div>
            <label className="text-center text-4xl font-bold font-cursive text-black">Nom complet</label>
            <input
              type="text"
              {...register("name")}
              className={`w-full p-3 border rounded ${errors.name ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Champ Email */}
          <div>
            <label className="text-center text-4xl font-bold font-cursive text-black">Email</label>
            <input
              type="email"
              {...register("email")}
              className={`w-full p-3 border rounded ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Champ Date */}
          <div>
            <label className="text-center text-4xl font-bold font-cursive text-black">Date</label>
            <input
              type="date"
              {...register("date")}
              className={`w-full p-3 border rounded ${errors.date ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
          </div>

          {/* Champ Heure */}
          <div>
            <label className="text-center text-4xl font-bold font-cursive text-black">Heure</label>
            <input
              type="time"
              {...register("time")}
              className={`w-full p-3 border rounded ${errors.time ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}
          </div>

          {/* Champ Nombre d'invités */}
          <div>
            <label className="text-center text-4xl font-bold font-cursive text-black">Nombre d'invités</label>
            <input
              type="number"
              {...register("guests")}
              className={`w-full p-3 border rounded ${errors.guests ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.guests && <p className="text-red-500 text-sm">{errors.guests.message}</p>}
          </div>

          {/* Bouton de soumission */}
          <button
            type="submit"
            className="bg-bleu-500 text-center text-4xl font-bold font-cursive hover:bg-blue-600"
          >
            Confirmer la réservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
