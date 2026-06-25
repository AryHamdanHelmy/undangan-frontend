// 
import { useSearchParams } from 'react-router-dom'
import BatikDivider from './BatikDivider'

export default function CoverGate({ invitation, onOpen }) {
  const [searchParams] = useSearchParams()
  const guestName = searchParams.get('to')

  const hasPhoto = Boolean(invitation.cover_photo)

  return (
    <div
      className={`h-screen flex flex-col items-center justify-center text-center px-8 relative ${
        hasPhoto ? 'text-krem' : 'bg-krem text-tinta'
      }`}
      style={
        hasPhoto
          ? {
              backgroundImage: `url(${invitation.cover_photo})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {hasPhoto && <div className="absolute inset-0 bg-hijau/70" />}

      <div className="relative z-10 flex flex-col items-center">
        <BatikDivider />

        <p
          className={`font-body text-xs tracking-[0.25em] uppercase ${
            hasPhoto ? 'text-krem/80' : 'text-hijau/70'
          }`}
        >
          The Wedding of
        </p>

        <h1 className={`font-display text-4xl mt-3 ${hasPhoto ? 'text-krem' : 'text-hijau'}`}>
          {invitation.groom_name}
          <span className="block text-2xl my-1 text-emas">&</span>
          {invitation.bride_name}
        </h1>

        <BatikDivider />

        <p className={`font-body text-sm mt-2 ${hasPhoto ? 'text-krem/80' : 'text-tinta/70'}`}>
          Kepada Yth.
        </p>
        <p className="font-display text-lg">
          {guestName ?? 'Bapak/Ibu/Saudara/i'}
        </p>

        <button
          onClick={onOpen}
          className={`mt-8 w-16 h-16 rounded-full border border-emas flex items-center justify-center font-display text-xs transition-colors ${
            hasPhoto
              ? 'text-krem hover:bg-emas hover:text-hijau'
              : 'text-hijau hover:bg-hijau hover:text-krem'
          }`}
        >
          Buka
        </button>
        <p
          className={`font-body text-[11px] tracking-widest uppercase mt-3 ${
            hasPhoto ? 'text-krem/60' : 'text-tinta/50'
          }`}
        >
          Undangan
        </p>
      </div>
    </div>
  )
}