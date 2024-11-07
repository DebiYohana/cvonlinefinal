// CVonline.tsx (halaman utama)
import Hero from "./components/hero";
import PersonalInfo from "./components/personalinfo";
import RiwayatPekerjaan from "./components/riwayatpekerjaan";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import SkillsList from "./components/skill";
import ContactForm from "./components/contactform";
import RatingStars from "./components/ratingstars";  // Pastikan nama komponen sesuai dengan file
import "./debi-style.css";  // Pastikan file CSS ada di tempat yang benar
import HobbiesGallery from "./components/mygallery";

// Fungsi utama untuk render halaman CV online
export default function CVonline() {
  return (   
    <section>
      <Hero />
      <PersonalInfo />
      <RiwayatPekerjaan />
      <RiwayatPendidikan />
      <SkillsList />
      <HobbiesGallery/>
      <ContactForm />
      <RatingStars/>
    </section>
  );
}
