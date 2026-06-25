import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { submitGuestbook } from '../services/api'
import BatikDivider from './BatikDivider'

export default function GuestbookForm({ invitationId, onSubmitted }) {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('to')
  const [form, setForm] = useState({
    guest_name: '', attendance: 'hadir', guest_count: 1, message: '',
  })
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await submitGuestbook(invitationId, { ...form, guest_token: token })
      setStatus('success')
      onSubmitted?.()
    } catch {
      setStatus('error')
    }
  }

  const fieldClass =
    'w-full border border-hijau/30 rounded-md p-3 font-body text-sm bg-krem focus:outline-none focus:border-emas'

  return (
    <div className="px-6 pb-6">
      <BatikDivider/>
        <p className="font-display text-xl text-center text-hijau mb-4">Ucapan & Doa</p>
        <p className="font-body text-sm text-tinta/70 text-center leading-relaxed mb-5">
            Dengan penuh hormat, kami mohon kesediaan Bapak/Ibu/Saudara/i untuk memberikan
            konfirmasi kehadiran serta doa dan ucapan kepada kedua mempelai.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
        <h1>Nama</h1>
        <input
          name="guest_name"
          className={fieldClass}
          placeholder="Nama kamu"
          value={form.guest_name}
          onChange={(e) => setForm({ ...form, guest_name: e.target.value })}
          required
        />
        <h1>Konfirmasi Kehadiran</h1>
        <select
          name="attendance"
          className={fieldClass}
          value={form.attendance}
          onChange={(e) => setForm({ ...form, attendance: e.target.value })}
        >
          <option value="hadir">Hadir</option>
          <option value="tidak_hadir">Tidak Hadir</option>
          <option value="ragu">Ragu-ragu</option>
        </select>
        <h1>Jumlah Tamu</h1>
        <select
          name="guest_count"
          className={fieldClass}
          value={form.guest_count}
          onChange={(e) => setForm({ ...form, guest_count: Number(e.target.value) })}
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
        <h1>Ucapan & Doa</h1>
        <textarea
          name="message"
          className={fieldClass}
          placeholder="Tulis ucapan & doa..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button className="w-full bg-hijau text-krem rounded-md p-3 font-body text-sm tracking-wide uppercase hover:bg-emas transition-colors">
          Kirim
        </button>
        {status === 'success' && (
          <p className="text-hijau text-sm text-center font-body">Terima kasih atas ucapannya!</p>
        )}
        {status === 'error' && (
          <p className="text-red-700 text-sm text-center font-body">Gagal mengirim, coba lagi.</p>
        )}
      </form>
    </div>
  )
}