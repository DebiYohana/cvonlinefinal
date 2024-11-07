import foto from "../foto.jpg";

function Profile() {
    return (
    <img src={foto.src} alt="Debi Yohana" className="fotoku" />
    );
    
}

export default function Hero() {
    return (
        <div className="container mx-auto p-2 text-center">
          <h1 className="text-gray-400 font-bold ">CV ONLINE</h1>
          <h2 className="text-3xl">Debi Yohana</h2>
          <Profile />
        <p>Saya adalah seorang mahasiswa aktif di universitas Ma'soem, hobi Saya
          bernyanyi dan mendengarkan musik!
        </p>
        </div>
    );
}
 
      