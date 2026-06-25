export default function Penutup({ invitation }) {
  return (
    <div className="px-8 py-12 text-center bg-hijau-lembut">
      <p className="font-body text-sm text-tinta/80 leading-relaxed">
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
        berkenan memberikan doa restu kepada kami.
      </p>
      <p className="font-body text-sm text-tinta/70 mt-4">
        Wassalamualaikum Warahmatullahi Wabarakatuh
      </p>
      <p className="font-display text-xl text-hijau mt-6">
        {invitation.groom_name} & {invitation.bride_name}
      </p>
      <p className="font-body text-xs text-tinta/50 mt-8 tracking-wide">
        Dengan hormat kami,<br />Keluarga Kedua Mempelai
      </p>
    </div>
  )
}