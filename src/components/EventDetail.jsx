import BatikDivider from './BatikDivider'

export default function EventDetail({ events }) {
  const formatTime = (datetime) =>
    new Date(datetime).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })

  return (
    <div className="px-6">
      <BatikDivider />
      <div className="space-y-6">
        {events.map((event) => (
          <div key={event.name} className="bg-hijau-lembut rounded-lg py-6 px-4 text-center">
            <p className="font-display text-xl text-hijau">{event.name}</p>
            {event.notes && <p className="text-xs italic text-tinta/60 mt-1">({event.notes})</p>}
            <p className="font-body text-sm text-tinta/80 mt-3">
              {new Date(event.start_time).toLocaleDateString('id-ID', {
                weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
              })}
            </p>
            <p className="font-body text-sm text-tinta/70">
              {formatTime(event.start_time)}
              {event.end_time && ` - ${formatTime(event.end_time)}`} WIB
            </p>
            <p className="font-body text-sm text-tinta/70 mt-2">{event.location_name}</p>
            {event.map_url && (
              <a href={event.map_url} target="_blank" rel="noreferrer" className="inline-block mt-3 font-body text-xs tracking-wide uppercase text-emas border-b border-emas/50 pb-0.5">
                Buka Google Maps
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}