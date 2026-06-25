import BatikDivider from './BatikDivider'

function ProfileBlock({ otherParents, photo, name, parents }) {
  return (
    <div className="text-center">
      {otherParents && (
        <p className="font-body text-sm text-tinta/70 leading-relaxed">{otherParents}</p>
      )}
      <p className="font-display text-2xl text-emas my-3">&</p>
      {photo && (
        <img
          src={photo}
          alt={name}
          className="w-32 h-40 object-cover rounded-full mx-auto border-2 border-emas"
        />
      )}
      <p className="font-display text-xl text-hijau mt-4">{name}</p>
      {parents && (
        <p className="font-body text-sm text-tinta/60 mt-1">{parents}</p>
      )}
    </div>
  )
}

export default function CoupleProfile({ invitation }) {
  return (
    <div className="px-8 py-12">
      <p className="font-display text-2xl text-hijau text-center mb-8">Kedua Mempelai</p>

      <div className="space-y-12">
        <div>
          <BatikDivider />
          <ProfileBlock
            otherParents={invitation.bride_parents}
            photo={invitation.groom_photo}
            name={invitation.groom_name}
            parents={invitation.groom_parent}
          />
        </div>

        <div>
          <BatikDivider />
          <ProfileBlock
            otherParents={invitation.groom_parents}
            photo={invitation.bride_photo}
            name={invitation.bride_name}
            parents={invitation.bride_parent}
          />
        </div>
      </div>
    </div>
  )
}