import { useState } from 'react'

export default function GiftModal({ gifts }) {
  const [open, setOpen] = useState(false)

  const copy = (number) => navigator.clipboard.writeText(number)

  return (
    <>
      <button onClick={() => setOpen(true)} className="bg-rose-600 text-white px-4 py-2 rounded-full">
        Beri Kado
      </button>
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded p-6 w-80">
            {gifts.map((g) => (
              <div key={g.account_number} className="mb-3 border-b pb-2">
                <p className="font-semibold">{g.provider_name}</p>
                <p>{g.account_number} — {g.account_holder}</p>
                <button onClick={() => copy(g.account_number)} className="text-sm text-blue-600">
                  Salin Rekening
                </button>
              </div>
            ))}
            <button onClick={() => setOpen(false)} className="mt-2 text-sm text-gray-500">Tutup</button>
          </div>
        </div>
      )}
    </>
  )
}