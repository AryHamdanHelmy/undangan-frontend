import BatikDivider from './BatikDivider'

export default function Gallery({ photos }) {
  if (!photos || photos.length === 0) return null

  return (
    <div className="px-6 py-12">
      <BatikDivider />
      <p className="font-display text-2xl text-hijau text-center mb-6">Our Story</p>
      <div className="grid grid-cols-2 gap-3">
        {photos.map((photo) => (
          <div key={photo.id} className="aspect-square overflow-hidden rounded-lg">
            <img
              src={photo.photo_url}
              alt={photo.caption || ''}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}