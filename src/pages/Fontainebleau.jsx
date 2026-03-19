import { useEffect, useState } from 'react'

const PHONE = '3054047860'
const PH = '(305) 404-7860'
const H = 'Fontainebleau Miami Beach'
const ADDR = '4441 Collins Avenue, Miami Beach, FL, 33140, US'

const PHOTOS = [
    'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80',
    'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&q=80',
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&q=80',
    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&q=80',
]

const ROOMS = [
    { name: 'Deluxe Bay View Guestroom', img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80' },
    { name: 'Ocean View Guestroom with Balcony', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80' },
    { name: 'Oceanfront Guestroom with Balcony', img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&q=80' },
    { name: 'Junior Suite, Bay View', img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&q=80' },
    { name: 'Junior Suite, Ocean View', img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&q=80' },
    { name: 'One Bedroom Suite, Ocean View', img: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=500&q=80' },
    { name: 'Oceanfront One Bedroom Suite', img: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&q=80' },
    { name: 'Presidential Suite', img: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=500&q=80' },
]

const AMENITIES = [
    'Room Service', 'Car Rental', '24 Hour Front Desk', 'Fitness Center', 'Restaurant',
    'Supervised Kids Activities', 'Gift Shop', 'Hot Tub or Spa', 'Concierge',
    'Wheelchair Access', 'Babysitting Services', 'Swimming Pool - Outdoor',
    'In Room Safe', 'Internet Access - Free', 'ATM Machine', 'Game Room',
    'Currency Exchange', 'Parking - Valet', 'Laundry', 'Non-Smoking Facility',
    'Pet Friendly', 'Lounge/Bar', 'Business Center', 'Beach Access',
]

const FAQS = [
    { q: `What is the address of ${H}?`, a: `The property is located at ${ADDR}, on Collins Avenue in the Mid-Beach area, approximately 16 km from Miami International Airport.` },
    { q: 'What time is check-in and check-out?', a: 'Check-in begins at 4:00 PM and check-out is at 11:00 AM. A valid photo ID and credit card are required at check-in.' },
    { q: `Is ${H} pet-friendly?`, a: `Yes, pets are welcome. Additional charges may apply. Call ${PH} for details.` },
    { q: `How many restaurants are at ${H}?`, a: 'The resort features 9 dining establishments including Hakkasan, Mirabella, La Côte, Blade Sushi, Prime 54, and Chez Bon Bon.' },
    { q: `Does ${H} have a spa?`, a: 'Yes. Lapis Spa is a 40,000 sq ft facility offering massages, body treatments, facials, and hydrotherapy.' },
    { q: 'Is there parking available?', a: `Valet parking is available. Contact ${PH} for rates.` },
    { q: `Is this the official website of ${H}?`, a: `No. Front Desk Direct is an independent reservation service specializing exclusively in ${H}, operated by Chill N Go International LLC. We are not affiliated with Fontainebleau Hotels & Resorts.` },
    { q: 'Why book through Front Desk Direct?', a: 'Dedicated focus on this single property. Expert room guidance. Competitive rates from multiple suppliers. Bilingual support. No booking fees.' },
]

const Ico = ({ d, size = 14, color = 'currentColor', sw = 2 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
)
const PhIco = (p) => <Ico {...p} d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
const ChkIco = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="11" fill="#1a6b3c" /><path d="M7 12.5l3 3 7-7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
)
const WifiIco = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a6b3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><circle cx="12" cy="20" r="1" fill="#1a6b3c" /></svg>
)

export default function Fontainebleau() {
    const [faq, setFaq] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = `${H} — Reservations | Front Desk Direct`
    }, [])

    const W = ({ children, className = '', narrow, style: s }) => {
        const base = {
            width: '100%',
            maxWidth: narrow ? 820 : 1140,
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 24,
            paddingRight: 24,
        }
        return <div style={{ ...base, ...s }} className={className}>{children}</div>
    }

    return (
        <div style={{ background: '#fff', color: '#333', fontFamily: "'Libre Franklin',-apple-system,sans-serif", fontSize: 14, lineHeight: 1.6 }} className="min-h-screen">

            {/* Mobile CTA */}
            <a href={`tel:${PHONE}`} className="fixed bottom-0 left-0 right-0 z-[100] md:hidden flex items-center justify-center gap-2 py-4 text-[13px] font-bold tracking-wide uppercase no-underline" style={{ background: '#1a6b3c', color: '#fff', boxShadow: '0 -2px 12px rgba(0,0,0,.1)' }}>
                <PhIco size={16} /> Call — {PH}
            </a>

            {/* Top bar */}
            <div style={{ background: '#1a3a5c' }}>
                <W className="flex items-center justify-between" style={{ color: 'rgba(255,255,255,.6)', fontSize: 12, paddingTop: 10, paddingBottom: 10 }}>
                    <div className="flex items-center gap-2">
                        <span style={{ color: '#fff', fontWeight: 700, fontSize: 13 }}>Front Desk Direct</span>
                        <span style={{ opacity: .3 }}>|</span>
                        <span className="hidden sm:inline">Specialists in {H} reservations</span>
                        <span className="sm:hidden">Specialists in {H}</span>
                    </div>
                    <a href={`tel:${PHONE}`} className="hidden md:flex items-center gap-2 no-underline" style={{ color: '#ffd666', fontWeight: 700, fontSize: 14 }}>
                        <PhIco size={15} color="#ffd666" /> {PH}
                    </a>
                </W>
            </div>

            {/* Nav - BIGGER, more professional */}
            <nav className="sticky top-0 z-50" style={{ background: '#fff', borderBottom: '1px solid #e8e4de', boxShadow: '0 1px 4px rgba(0,0,0,.06)' }}>
                <W className="flex items-center justify-between" style={{ paddingTop: 14, paddingBottom: 14 }}>
                    <a href="/" className="no-underline flex items-center gap-3">
                        <div style={{ width: 40, height: 40, background: '#1a3a5c', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffd666', fontFamily: 'Georgia,serif', fontWeight: 'bold', fontSize: 20 }}>F</div>
                        <div>
                            <div style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 700, color: '#aaa', lineHeight: 1.2 }}>Front Desk Direct</div>
                            <div style={{ fontSize: 17, fontWeight: 600, color: '#1a3a5c', lineHeight: 1.3 }}>Hotel Reservations</div>
                        </div>
                    </a>
                    <div className="flex items-center gap-4 md:gap-6">
                        {['Rooms', 'About', 'FAQ'].map(t => (
                            <a key={t} href={`#${t.toLowerCase()}`} className="hidden md:inline no-underline hover:opacity-60 transition-opacity" style={{ fontSize: 13, letterSpacing: '.04em', textTransform: 'uppercase', fontWeight: 600, color: '#666' }}>{t}</a>
                        ))}
                        <a href={`tel:${PHONE}`} className="flex items-center gap-2 no-underline hover:opacity-90 transition-opacity" style={{ background: '#1a6b3c', color: '#fff', fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', fontWeight: 700, padding: '10px 20px', borderRadius: 4 }}>
                            <PhIco size={14} /> Call Now
                        </a>
                    </div>
                </W>
            </nav>

            {/* Breadcrumbs */}
            <div style={{ borderBottom: '1px solid #f0ece6' }}>
                <W className="py-2.5" style={{ fontSize: 12, color: '#ccc' }}>
                    {['Home', 'Hotels', 'U.S.A.', 'Miami Beach'].map((c, i) => (
                        <span key={i}>
                            <a href="/" className="no-underline hover:underline" style={{ color: '#bbb' }}>{c}</a>
                            <span className="mx-1.5" style={{ color: '#ddd' }}>&gt;</span>
                        </span>
                    ))}
                    <span style={{ color: '#888' }}>{H}</span>
                </W>
            </div>

            {/* Photo grid */}
            <W className="pt-6 pb-2">
                <div className="grid gap-1" style={{ gridTemplateColumns: '3fr 2fr', height: 'clamp(200px,32vw,420px)', borderRadius: 6, overflow: 'hidden' }}>
                    <div style={{ overflow: 'hidden' }}>
                        <img src={PHOTOS[0]} alt={H} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="hidden md:grid" style={{ gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 4 }}>
                        {PHOTOS.slice(1).map((p, i) => (
                            <div key={i} style={{ overflow: 'hidden', position: 'relative' }}>
                                <img src={p} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                                {i === 3 && (
                                    <div style={{ position: 'absolute', bottom: 8, right: 8, background: 'rgba(0,0,0,.65)', color: '#fff', fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 3 }}>Show all photos</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </W>

            {/* Hotel name + stars */}
            <W className="pt-5 pb-1">
                <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(1.4rem,3.5vw,2.2rem)', fontWeight: 400, color: '#1a1a1a', margin: '0 0 4px' }}>{H}</h1>
                <p style={{ fontSize: 13, color: '#999', margin: '0 0 8px' }}>{ADDR}</p>
                <div className="flex gap-0.5 mb-1">
                    {[1, 2, 3, 4, 5].map(s => (
                        <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="#1a3a5c"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    ))}
                </div>
            </W>

            {/* Booking bar */}
            <W className="pt-6 pb-4">
                <div className="flex flex-col md:flex-row items-stretch" style={{ background: '#f4f1ec', border: '1px solid #e4e0d8', borderRadius: 4, overflow: 'hidden' }}>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-4">
                        {[{ l: 'Check-in:', v: 'Select date' }, { l: 'Check-out:', v: 'Select date' }, { l: 'Rooms:', v: '1' }, { l: 'Guests:', v: '2 Adults' }].map((f, i) => (
                            <div key={i} className="px-3 md:px-4 py-3" style={{ borderRight: i < 3 ? '1px solid #e4e0d8' : 'none' }}>
                                <div style={{ fontSize: 10, fontWeight: 600, color: '#888', marginBottom: 2, textTransform: 'uppercase', letterSpacing: '.04em' }}>{f.l}</div>
                                <div style={{ fontSize: 14, fontWeight: 500, color: '#333' }}>{f.v}</div>
                            </div>
                        ))}
                    </div>
                    <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-2 no-underline hover:opacity-90 transition-opacity px-6 py-3.5" style={{ background: '#1a6b3c', color: '#fff', fontSize: 13, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                        <PhIco size={16} /> Call for Rates
                    </a>
                </div>
            </W>

            {/* Disclosure */}
            <W className="pb-6">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: '#888' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="1.5" style={{ flexShrink: 0, marginTop: 3 }}><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                    <span><strong style={{ color: '#666' }}>Front Desk Direct</strong> is an independent reservation service dedicated exclusively to {H}. <a href="#faq" style={{ color: '#888' }}>Learn more</a></span>
                </div>
            </W>

            {/* Rooms */}
            <section id="rooms" style={{ borderTop: '1px solid #eae6e0' }}>
                <W className="py-10">
                    <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 28, color: '#1a1a1a' }}>Rooms &amp; Rates</h2>
                    {ROOMS.map((r, i) => (
                        <div key={i} className="flex flex-col sm:flex-row" style={{ borderBottom: '1px solid #eee', padding: '24px 0', gap: 20 }}>
                            <div style={{ width: 200, minWidth: 200, height: 150, borderRadius: 6, overflow: 'hidden', flexShrink: 0 }} className="!w-full sm:!w-[200px] !h-[200px] sm:!h-[150px]">
                                <img src={r.img} alt={r.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
                            </div>
                            <div style={{ flex: 1, minWidth: 0, paddingTop: 4 }}>
                                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#1a3a5c', margin: '0 0 8px' }}>{r.name}</h3>
                                <div style={{ fontSize: 12, color: '#999', marginBottom: 6 }}>With your stay:</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#1a6b3c', fontWeight: 500 }}>
                                    <WifiIco /> Free Internet
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', gap: 10, flexShrink: 0 }} className="!flex-row sm:!flex-col !items-center sm:!items-end !justify-between sm:!justify-center pt-2 sm:pt-0">
                                <a href={`tel:${PHONE}`} className="no-underline hover:opacity-90 transition-opacity" style={{ background: '#1a6b3c', color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', padding: '10px 24px', borderRadius: 3, whiteSpace: 'nowrap', display: 'inline-block', textAlign: 'center' }}>
                                    Call for Rate
                                </a>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#1a6b3c', fontWeight: 500 }}>
                                    <ChkIco /> Best Rate by Phone
                                </div>
                            </div>
                        </div>
                    ))}
                </W>
            </section>

            {/* About */}
            <section id="about" style={{ background: '#faf8f5', borderTop: '1px solid #eae6e0' }}>
                <W style={{ paddingTop: 48, paddingBottom: 56 }}>
                    <h2 style={{ fontSize: 22, fontWeight: 600, margin: '0 0 28px', color: '#1a1a1a' }}>About {H}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                        <div className="md:col-span-2" style={{ fontSize: 14, lineHeight: 1.9, color: '#555' }}>
                            <p style={{ marginBottom: 18 }}>{H} stands as an iconic oceanfront resort renowned for its striking curved architecture, elegant design, and prime location along Collins Avenue. Originally designed by Morris Lapidus and opened in 1954, it remains a symbol of Miami Beach glamour.</p>
                            <p style={{ marginBottom: 18 }}><strong style={{ color: '#333' }}>Accommodations:</strong> Over 1,500 guest rooms and suites with modern decor, floor-to-ceiling windows, and ocean, bay, or skyline views.</p>
                            <p style={{ marginBottom: 18 }}><strong style={{ color: '#333' }}>Pools &amp; Beach:</strong> Six swimming pools, private cabanas with butler service, and direct white-sand beach access.</p>
                            <p style={{ marginBottom: 18 }}><strong style={{ color: '#333' }}>Dining:</strong> Nine restaurants — Hakkasan, Mirabella, La Côte, Blade Sushi, Prime 54, Chez Bon Bon, and more.</p>
                            <p style={{ marginBottom: 18 }}><strong style={{ color: '#333' }}>Nightlife &amp; Spa:</strong> LIV Nightclub with world-class DJs. Lapis Spa: 40,000 sq ft of treatments.</p>
                            <p style={{ marginBottom: 0 }}><strong style={{ color: '#333' }}>Nearby:</strong> Art Deco District, South Beach, Lincoln Road Mall. Miami International Airport is 20 minutes away.</p>
                        </div>
                        <div>
                            <div style={{ background: '#fff', border: '1px solid #eae6e0', borderRadius: 6, padding: 24, marginBottom: 20 }}>
                                <h4 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 16px', color: '#333' }}>Hotel details</h4>
                                <table style={{ width: '100%', fontSize: 13, borderCollapse: 'collapse' }}>
                                    <tbody>
                                        {[['Location', ADDR], ['Airport', '16 km from MIA'], ['Category', '5-Star Oceanfront'], ['Check-in', '4:00 PM'], ['Check-out', '11:00 AM'], ['Pets', 'Allowed (fees apply)'], ['Rating', '4.1 Google (17k)']].map(([l, v]) => (
                                            <tr key={l} style={{ borderBottom: '1px solid #f5f2ed' }}>
                                                <td style={{ padding: '8px 0', color: '#aaa', verticalAlign: 'top', whiteSpace: 'nowrap', paddingRight: 16 }}>{l}</td>
                                                <td style={{ padding: '8px 0', color: '#555', textAlign: 'right' }}>{v}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <a href={`tel:${PHONE}`} className="no-underline hover:opacity-90 transition-opacity" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', background: '#1a3a5c', color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '14px 0', borderRadius: 4 }}>
                                <PhIco size={14} /> Reserve by Phone
                            </a>
                        </div>
                    </div>
                </W>
            </section>

            {/* Amenities */}
            <section style={{ borderTop: '1px solid #eae6e0' }}>
                <W style={{ paddingTop: 48, paddingBottom: 56 }}>
                    <h2 style={{ fontSize: 22, fontWeight: 600, margin: '0 0 24px', color: '#1a1a1a' }}>Amenities</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4">
                        {AMENITIES.map((a, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#555', padding: '5px 0' }}>
                                <ChkIco /> {a}
                            </div>
                        ))}
                    </div>
                </W>
            </section>

            {/* CTA */}
            <section style={{ background: '#1a3a5c' }}>
                <W style={{ paddingTop: 56, paddingBottom: 56, textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(1.2rem,2.5vw,1.7rem)', fontWeight: 400, color: '#fff', margin: '0 0 12px' }}>Reserve Your Stay at {H}</h2>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,.4)', margin: '0 auto 32px', maxWidth: 420 }}>We focus exclusively on this property. Our specialists know every room, floor, and view.</p>
                    <a href={`tel:${PHONE}`} className="inline-flex items-center gap-3 no-underline hover:opacity-90 transition-opacity" style={{ background: '#1a6b3c', color: '#fff', fontSize: 13, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '14px 32px', borderRadius: 3 }}>
                        <PhIco size={16} /> Call {PH}
                    </a>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,.22)', marginTop: 20 }}>English &amp; Spanish · No fees · 7 days a week</p>
                </W>
            </section>

            {/* FAQ */}
            <section id="faq" style={{ background: '#faf8f5', borderTop: '1px solid #eae6e0' }}>
                <W className="py-12" narrow>
                    <h2 style={{ fontSize: 22, fontWeight: 600, margin: '0 0 24px', color: '#1a1a1a' }}>Frequently Asked Questions</h2>
                    {FAQS.map((f, i) => (
                        <div key={i} style={{ borderBottom: '1px solid #e4dfd8' }}>
                            <button onClick={() => setFaq(faq === i ? null : i)} className="w-full text-left flex items-center justify-between gap-4 cursor-pointer" style={{ background: 'none', border: 'none', padding: '16px 0', fontSize: 14, fontWeight: 600, color: '#333', fontFamily: 'inherit' }}>
                                <span>{f.q}</span>
                                <span style={{ width: 24, height: 24, borderRadius: '50%', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, color: '#bbb', flexShrink: 0, transition: 'transform .2s', transform: faq === i ? 'rotate(45deg)' : 'none' }}>+</span>
                            </button>
                            {faq === i && <div style={{ paddingBottom: 20, fontSize: 13, lineHeight: 1.85, color: '#777', paddingRight: 40 }}>{f.a}</div>}
                        </div>
                    ))}
                </W>
            </section>

            {/* Map */}
            <section style={{ borderTop: '1px solid #eae6e0' }}>
                <W style={{ paddingTop: 48, paddingBottom: 56 }}>
                    <h2 style={{ fontSize: 22, fontWeight: 600, margin: '0 0 6px', color: '#1a1a1a' }}>Location</h2>
                    <p style={{ fontSize: 13, color: '#aaa', margin: '0 0 20px' }}>{ADDR}</p>
                    <div style={{ width: '100%', height: 350, border: '1px solid #eae6e0', borderRadius: 6, overflow: 'hidden' }}>
                        <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.5!2d-80.1203!3d25.8199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b4a4674dca6f%3A0x52c4c2c2b2f75c5!2sFontainebleau%20Miami%20Beach!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </W>
            </section>

            {/* Footer - FULL WIDTH distributed layout */}
            <footer style={{ background: '#f0ece6', borderTop: '1px solid #e4dfd8' }}>
                <W style={{ paddingTop: 48, paddingBottom: 48 }}>
                    {/* Top row: Logo left, Links right */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 24, marginBottom: 32 }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                                <div style={{ width: 30, height: 30, background: '#1a3a5c', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffd666', fontFamily: 'Georgia,serif', fontWeight: 'bold', fontSize: 15 }}>F</div>
                                <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: '.06em', color: '#1a3a5c' }}>Front Desk Direct</span>
                            </div>
                            <p style={{ fontSize: 12, color: '#aaa', maxWidth: 320, lineHeight: 1.7, margin: 0 }}>
                                An independent reservation service specializing exclusively in {H}.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                            <div>
                                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: '#999', marginBottom: 10 }}>Company</div>
                                {['About Us', 'Terms of Service', 'Privacy Policy'].map(t => (
                                    <a key={t} href="/" className="no-underline hover:underline" style={{ display: 'block', color: '#bbb', fontSize: 12, marginBottom: 6 }}>{t}</a>
                                ))}
                            </div>
                            <div>
                                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: '#999', marginBottom: 10 }}>Support</div>
                                <a href="#faq" className="no-underline hover:underline" style={{ display: 'block', color: '#bbb', fontSize: 12, marginBottom: 6 }}>FAQs</a>
                                <a href={`tel:${PHONE}`} className="no-underline hover:underline" style={{ display: 'block', color: '#bbb', fontSize: 12, marginBottom: 6 }}>{PH}</a>
                            </div>
                            <div>
                                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: '#999', marginBottom: 10 }}>Hotel</div>
                                <a href="#rooms" className="no-underline hover:underline" style={{ display: 'block', color: '#bbb', fontSize: 12, marginBottom: 6 }}>Rooms &amp; Rates</a>
                                <a href="#about" className="no-underline hover:underline" style={{ display: 'block', color: '#bbb', fontSize: 12, marginBottom: 6 }}>About</a>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div style={{ borderTop: '1px solid #e4dfd8', paddingTop: 24 }}>
                        <p style={{ fontSize: 11, lineHeight: 1.9, color: '#bbb', margin: '0 0 8px' }}>
                            Front Desk Direct is operated by Chill N Go International LLC.
                            We are <strong style={{ color: '#aaa' }}>not affiliated with, endorsed by, or connected to</strong> Fontainebleau Hotels &amp; Resorts or any subsidiaries.
                            All hotel names and trademarks are property of their respective owners.
                            Rates sourced from third-party suppliers, subject to change. By calling, you contact Front Desk Direct, not the hotel.
                        </p>
                        <p style={{ fontSize: 10, color: '#ccc', margin: 0 }}>&copy; 2026 Chill N Go International LLC. All rights reserved.</p>
                    </div>
                </W>
            </footer>

            {/* Mobile bottom spacer */}
            <div className="h-16 md:hidden" />
        </div>
    )
}