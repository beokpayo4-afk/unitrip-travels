export default function AnnouncementBar() {
  const items = [
    '✈️ Best Travel Deals',
    '🛡️ Trusted Travel Partners',
    '💳 Secure Booking',
    '📞 24/7 Support',
  ]
  return (
    <div className="bg-navy text-white text-xs sm:text-sm py-2 overflow-hidden">
      <div className="container-x flex items-center justify-center gap-6 flex-wrap">
        {items.map((item, i) => (
          <span key={i} className="whitespace-nowrap opacity-90">{item}</span>
        ))}
      </div>
    </div>
  )
}
