import BatikDivider from './BatikDivider'

export default function QuoteVerse({ invitation }) {
  const text = invitation.quote_text ||
    'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً'
  const translation = invitation.quote_translation ||
    '"Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."'
  const source = invitation.quote_source || 'QS. Ar-Rum: 21'

  return (
    <div className="bg-hijau text-krem py-12 px-8 text-center">
      <BatikDivider />
      <p className="font-display text-xl leading-loose" dir="rtl">{text}</p>
      <p className="font-body text-sm text-krem/80 leading-relaxed mt-6 italic">{translation}</p>
      <p className="font-body text-xs tracking-widest uppercase text-emas mt-4">({source})</p>
    </div>
  )
}