import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getInvitation } from '../services/api'
import CoverGate from '../components/CoverGate'
import MusicPlayer from '../components/MusicPlayer'
import Sambutan from '../components/Sambutan'
import QuoteVerse from '../components/QuoteVerse'
import CoupleProfile from '../components/CoupleProfile'
import EventDetail from '../components/EventDetail'
import Gallery from '../components/Gallery'
import GuestbookForm from '../components/GuestbookForm'
import GiftModal from '../components/GiftModal'
import Penutup from '../components/Penutup'

export default function Invitation() {
  const { slug } = useParams()
  const [data, setData] = useState(null)
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    getInvitation(slug)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err))
  }, [slug])

  if (!data) return <p className="text-center mt-10">Memuat undangan...</p>

  return (
    <>
      {!opened && <CoverGate invitation={data} onOpen={() => setOpened(true)} />}

      {opened && (
        <div className="max-w-md mx-auto bg-krem">
          <h1 className="font-display text-3xl text-center mt-8 text-hijau">
            {data.groom_name}
            <span className="text-emas mx-2">&</span>
            {data.bride_name}
          </h1>

          <Sambutan invitation={data} />
          <QuoteVerse invitation={data} />
          <CoupleProfile invitation={data} />
          <EventDetail events={data.events} />
          <Gallery photos={data.gallery} />
          <GuestbookForm invitationId={data.id} />

          {data.gifts?.length > 0 && (
            <div className="text-center py-6">
              <GiftModal gifts={data.gifts} />
            </div>
          )}

          <Penutup invitation={data} />

          {data.music_url && <MusicPlayer src={data.music_url} />}
        </div>
      )}
    </>
  )
}