import { useRef, useState } from 'react'

export default function MusicPlayer({ src }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    if (playing) audioRef.current.pause()
    else audioRef.current.play()
    setPlaying(!playing)
  }

  // dipanggil dari CoverGate via ref/forwardRef saat tombol "Buka Undangan" diklik
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} src={src} loop />
      <button onClick={toggle} className="bg-white shadow rounded-full p-2">
        {playing ? '🔊' : '🔇'}
      </button>
    </div>
  )
}