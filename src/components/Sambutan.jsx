export default function Sambutan({ invitation }) {
  return (
    <div className="px-8 pt-10 text-center">
      <p className="font-display text-2xl text-hijau">Bismillahirrahmanirrahim</p>
      <p className="font-body text-sm italic text-tinta/70 mt-2">
        Assalamualaikum Warahmatullahi Wabarakatuh
      </p>
      <p className="font-body text-sm text-tinta/80 leading-relaxed mt-4">
        Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, kami mengundang
        Bapak/Ibu/Saudara/i untuk hadir pada acara pernikahan kami.
      </p>

      {invitation.cover_photo && (
        <img
          src={invitation.cover_photo}
          alt="Pasangan"
          className="w-full h-44 object-cover rounded-full mx-auto border-2 border-emas mt-6"
        />
      )}
    </div>
  )
}