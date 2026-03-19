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

function BookingWidget() {
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [rooms, setRooms] = useState('1')
    const [adults, setAdults] = useState('2')
    const [kids, setKids] = useState('0')
    const [status, setStatus] = useState('idle')

    const today = new Date().toISOString().split('T')[0]

    const handleSearch = () => {
        if (!checkIn || !checkOut) { alert('Please select check-in and check-out dates.'); return }
        setStatus('searching')
        setTimeout(() => setStatus('no-availability'), 2800)
    }

    const handleReset = () => { setStatus('idle'); setCheckIn(''); setCheckOut('') }

    const inputStyle = { width: '100%', border: 'none', background: 'transparent', fontSize: 15, fontWeight: 500, color: '#333', fontFamily: 'inherit', outline: 'none', cursor: 'pointer', padding: 0 }
    const labelStyle = { fontSize: 10, fontWeight: 600, color: '#888', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 4 }
    const cellStyle = (last) => ({ padding: '14px 16px', borderRight: last ? 'none' : '1px solid #e4e0d8', flex: 1, minWidth: 0 })
    const selectStyle = { ...inputStyle, appearance: 'none', WebkitAppearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23999' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0 center', paddingRight: 16 }

    return (
        <div style={{ background: '#f8f6f2', borderTop: '1px solid #eae6e0', borderBottom: '1px solid #eae6e0' }}>
            <div style={{ width: '100%', maxWidth: 1140, marginLeft: 'auto', marginRight: 'auto', paddingLeft: 24, paddingRight: 24, paddingTop: 24, paddingBottom: 24 }}>
                <div style={{ background: '#fff', border: '1px solid #e0dcd6', borderRadius: 6, overflow: 'hidden' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <div style={cellStyle(false)} className="!w-full sm:!w-auto">
                            <div style={labelStyle}>Check-in:</div>
                            <input type="date" value={checkIn} onChange={e => { setCheckIn(e.target.value); setStatus('idle') }} min={today} style={inputStyle} />
                        </div>
                        <div style={cellStyle(false)} className="!w-full sm:!w-auto">
                            <div style={labelStyle}>Check-out:</div>
                            <input type="date" value={checkOut} onChange={e => { setCheckOut(e.target.value); setStatus('idle') }} min={checkIn || today} style={inputStyle} />
                        </div>
                        <div style={{ ...cellStyle(false), flex: '0 0 auto', width: 100 }} className="!w-1/3 sm:!w-[100px]">
                            <div style={labelStyle}>Rooms:</div>
                            <select value={rooms} onChange={e => setRooms(e.target.value)} style={selectStyle}>{[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n}</option>)}<option value="9">9+</option></select>
                        </div>
                        <div style={{ ...cellStyle(false), flex: '0 0 auto', width: 100 }} className="!w-1/3 sm:!w-[100px]">
                            <div style={labelStyle}>Adults:</div>
                            <select value={adults} onChange={e => setAdults(e.target.value)} style={selectStyle}>{[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n}</option>)}</select>
                        </div>
                        <div style={{ ...cellStyle(false), flex: '0 0 auto', width: 100 }} className="!w-1/3 sm:!w-[100px]">
                            <div style={labelStyle}>Kids:</div>
                            <select value={kids} onChange={e => setKids(e.target.value)} style={selectStyle}>{[0, 1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n}</option>)}</select>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'stretch' }}>
                            <button onClick={handleSearch} disabled={status === 'searching'} style={{ background: status === 'searching' ? '#2a7d4e' : '#1a6b3c', color: '#fff', border: 'none', fontSize: 13, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '0 28px', cursor: status === 'searching' ? 'wait' : 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap', minHeight: 54, transition: 'background .2s' }} onMouseEnter={e => { if (status !== 'searching') e.target.style.background = '#15592f' }} onMouseLeave={e => { if (status !== 'searching') e.target.style.background = '#1a6b3c' }}>
                                {status === 'searching' ? 'Searching...' : 'Find Rooms'}
                            </button>
                        </div>
                    </div>
                </div>

                {status === 'searching' && (
                    <div style={{ textAlign: 'center', padding: '32px 0 12px' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                            <svg width="20" height="20" viewBox="0 0 20 20" style={{ animation: 'spin 1s linear infinite' }}><circle cx="10" cy="10" r="8" fill="none" stroke="#ddd" strokeWidth="2.5" /><circle cx="10" cy="10" r="8" fill="none" stroke="#1a6b3c" strokeWidth="2.5" strokeDasharray="50" strokeDashoffset="35" strokeLinecap="round" /></svg>
                            <span style={{ fontSize: 14, color: '#888', fontWeight: 500 }}>Searching availability for {H}...</span>
                        </div>
                        <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
                    </div>
                )}

                {status === 'no-availability' && (
                    <div style={{ background: '#fff', border: '1px solid #e0dcd6', borderRadius: 6, marginTop: 16, padding: '28px 24px', textAlign: 'center' }}>
                        <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#fef2f2', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                        </div>
                        <h3 style={{ fontSize: 17, fontWeight: 600, color: '#333', margin: '0 0 6px' }}>No Online Availability</h3>
                        <p style={{ fontSize: 13, color: '#888', margin: '0 0 20px', maxWidth: 420, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>We couldn't find online rates for your dates. Our reservation specialists may have access to exclusive rates not available online.</p>
                        <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 no-underline hover:opacity-90 transition-opacity" style={{ background: '#1a6b3c', color: '#fff', fontSize: 13, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', padding: '13px 28px', borderRadius: 4 }}><PhIco size={16} /> Call for Availability — {PH}</a>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 14, fontSize: 12, color: '#aaa' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><ChkIco /> No fees</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><ChkIco /> Best rate guarantee</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><ChkIco /> Expert guidance</span>
                        </div>
                        <button onClick={handleReset} style={{ background: 'none', border: 'none', color: '#bbb', fontSize: 12, marginTop: 14, cursor: 'pointer', textDecoration: 'underline', fontFamily: 'inherit' }}>Search different dates</button>
                    </div>
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#aaa', marginTop: 14 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                    <span><strong style={{ color: '#999' }}>Front Desk Direct</strong> is an independent reservation service dedicated exclusively to {H}. <a href="#faq" style={{ color: '#aaa' }}>Learn more</a></span>
                </div>
            </div>
        </div>
    )
}

export default function Fontainebleau() {
    const [faq, setFaq] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = `${H} — Reservations | Front Desk Direct`
    }, [])

    const W = ({ children, className = '', narrow, style: s }) => {
        const base = { width: '100%', maxWidth: narrow ? 820 : 1140, marginLeft: 'auto', marginRight: 'auto', paddingLeft: 24, paddingRight: 24 }
        return <div style={{ ...base, ...s }} className={className}>{children}</div>
    }

    return (
        <div style={{ background: '#fff', color: '#333', fontFamily: "'Libre Franklin',-apple-system,sans-serif", fontSize: 14, lineHeight: 1.6 }} className="min-h-screen">

            <a href={`tel:${PHONE}`} className="fixed bottom-0 left-0 right-0 z-[100] md:hidden flex items-center justify-center gap-2 py-4 text-[13px] font-bold tracking-wide uppercase no-underline" style={{ background: '#1a6b3c', color: '#fff', boxShadow: '0 -2px 12px rgba(0,0,0,.1)' }}><PhIco size={16} /> Call — {PH}</a>

            <div style={{ background: '#1a3a5c' }}>
                <W className="flex items-center justify-between" style={{ color: 'rgba(255,255,255,.6)', fontSize: 12, paddingTop: 10, paddingBottom: 10 }}>
                    <div className="flex items-center gap-2">
                        <span style={{ color: '#fff', fontWeight: 700, fontSize: 13 }}>Front Desk Direct</span>
                        <span style={{ opacity: .3 }}>|</span>
                        <span className="hidden sm:inline">Specialists in {H} reservations</span>
                        <span className="sm:hidden">Specialists in {H}</span>
                    </div>
                    <a href={`tel:${PHONE}`} className="hidden md:flex items-center gap-2 no-underline" style={{ color: '#ffd666', fontWeight: 700, fontSize: 14 }}><PhIco size={15} color="#ffd666" /> {PH}</a>
                </W>
            </div>

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
                        {['Rooms', 'About', 'FAQ'].map(t => (<a key={t} href={`#${t.toLowerCase()}`} className="hidden md:inline no-underline hover:opacity-60 transition-opacity" style={{ fontSize: 13, letterSpacing: '.04em', textTransform: 'uppercase', fontWeight: 600, color: '#666' }}>{t}</a>))}
                        <a href={`tel:${PHONE}`} className="flex items-center gap-2 no-underline hover:opacity-90 transition-opacity" style={{ background: '#1a6b3c', color: '#fff', fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', fontWeight: 700, padding: '10px 20px', borderRadius: 4 }}><PhIco size={14} /> Call Now</a>
                    </div>
                </W>
            </nav>

            <W style={{ paddingTop: 28, paddingBottom: 8 }}>
                <div className="grid gap-1" style={{ gridTemplateColumns: '3fr 2fr', height: 'clamp(200px,32vw,420px)', borderRadius: 6, overflow: 'hidden' }}>
                    <div style={{ overflow: 'hidden' }}><img src={PHOTOS[0]} alt={H} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                    <div className="hidden md:grid" style={{ gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 4 }}>
                        {PHOTOS.slice(1).map((p, i) => (<div key={i} style={{ overflow: 'hidden', position: 'relative' }}><img src={p} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />{i === 3 && (<div style={{ position: 'absolute', bottom: 8, right: 8, background: 'rgba(0,0,0,.65)', color: '#fff', fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 3 }}>Show all photos</div>)}</div>))}
                    </div>
                </div>
            </W>

            <W style={{ paddingTop: 28, paddingBottom: 40 }}>
                <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(1.4rem,3.5vw,2.2rem)', fontWeight: 400, color: '#1a1a1a', margin: '0 0 6px' }}>{H}</h1>
                <p style={{ fontSize: 13, color: '#999', margin: '0 0 10px' }}>{ADDR}</p>
                <div style={{ display: 'flex', gap: 2 }}>
                    {[1, 2, 3, 4, 5].map(s => (<svg key={s} width="20" height="20" viewBox="0 0 24 24" fill="#1a3a5c"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>))}
                </div>
            </W>

            <BookingWidget />

            <section id="rooms" style={{ borderTop: '1px solid #eae6e0' }}>
                <W style={{ paddingTop: 48, paddingBottom: 40 }}>
                    <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 28, color: '#1a1a1a' }}>Rooms &amp; Rates</h2>
                    {ROOMS.map((r, i) => (
                        <div key={i} className="flex flex-col sm:flex-row" style={{ borderBottom: '1px solid #eee', padding: '24px 0', gap: 20 }}>
                            <div style={{ width: 200, minWidth: 200, height: 150, borderRadius: 6, overflow: 'hidden', flexShrink: 0 }} className="!w-full sm:!w-[200px] !h-[200px] sm:!h-[150px]">
                                <img src={r.img} alt={r.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
                            </div>
                            <div style={{ flex: 1, minWidth: 0, paddingTop: 4 }}>
                                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#1a3a5c', margin: '0 0 8px' }}>{r.name}</h3>
                                <div style={{ fontSize: 12, color: '#999', marginBottom: 6 }}>With your stay:</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#1a6b3c', fontWeight: 500 }}><WifiIco /> Free Internet</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', gap: 10, flexShrink: 0 }} className="!flex-row sm:!flex-col !items-center sm:!items-end !justify-between sm:!justify-center pt-2 sm:pt-0">
                                <a href={`tel:${PHONE}`} className="no-underline hover:opacity-90 transition-opacity" style={{ background: '#1a6b3c', color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', padding: '10px 24px', borderRadius: 3, whiteSpace: 'nowrap', display: 'inline-block', textAlign: 'center' }}>Call for Rate</a>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#1a6b3c', fontWeight: 500 }}><ChkIco /> Best Rate by Phone</div>
                            </div>
                        </div>
                    ))}
                </W>
            </section>

            <section id="about" style={{ background: '#faf8f5', borderTop: '1px solid #eae6e0' }}>
                <W style={{ paddingTop: 48, paddingBottom: 48 }}>
                    <h2 style={{ fontSize: 22, fontWeight: 600, margin: '0 0 10px', color: '#1a1a1a' }}>About {H}</h2>
                    <p style={{ fontSize: 14, color: '#888', margin: '0 0 32px', maxWidth: 680, lineHeight: 1.7 }}>Designed by Morris Lapidus in 1954, the Fontainebleau spans 22 oceanfront acres with 1,504 rooms across four towers — a Miami Beach icon that blends mid-century glamour with modern luxury.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ marginBottom: 32 }}>
                        {/* Block 1 - Towers */}
                        <div style={{ background: '#fff', borderRadius: 8, overflow: 'hidden', border: '1px solid #eae6e0' }}>
                            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" alt="Hotel towers" style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} loading="lazy" />
                            <div style={{ padding: 24 }}>
                                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#1a3a5c', margin: '0 0 10px' }}>Four Towers, 36 Room Types</h3>
                                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.8, margin: 0 }}>
                                    <strong style={{ color: '#444' }}>Chateau</strong> — 539 rooms, the historic original. <strong style={{ color: '#444' }}>Versailles</strong> — 307 rooms, modern and quieter. <strong style={{ color: '#444' }}>Trésor</strong> — 402 all-suites, 37 floors, kitchenettes and bay views. <strong style={{ color: '#444' }}>Sorrento</strong> — 256 oceanfront suites up to 1,122 sq ft with full kitchens and washer/dryer.
                                </p>
                            </div>
                        </div>

                        {/* Block 2 - Dining */}
                        <div style={{ background: '#fff', borderRadius: 8, overflow: 'hidden', border: '1px solid #eae6e0' }}>
                            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80" alt="Fine dining" style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} loading="lazy" />
                            <div style={{ padding: 24 }}>
                                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#1a3a5c', margin: '0 0 10px' }}>9+ Restaurants &amp; Bars</h3>
                                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.8, margin: 0 }}>
                                    <strong style={{ color: '#444' }}>Hakkasan</strong> — Michelin-recognized Cantonese. <strong style={{ color: '#444' }}>Mirabella</strong> — Coastal Italian. <strong style={{ color: '#444' }}>Prime 54</strong> — Steakhouse. <strong style={{ color: '#444' }}>Blade</strong> — Japanese. <strong style={{ color: '#444' }}>La Côte</strong> — Beachside Mediterranean. Plus Chez Bon Bon bakery, Vida brasserie, Bleau Bar, and Sorso cocktail lab.
                                </p>
                            </div>
                        </div>

                        {/* Block 3 - Pools & Beach */}
                        <div style={{ background: '#fff', borderRadius: 8, overflow: 'hidden', border: '1px solid #eae6e0' }}>
                            <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80" alt="Pool and beach" style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} loading="lazy" />
                            <div style={{ padding: 24 }}>
                                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#1a3a5c', margin: '0 0 10px' }}>11 Pools &amp; Private Beach</h3>
                                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.8, margin: 0 }}>
                                    The iconic Bow Tie pool with daybeds and cabanas. Oasis pool with island cabana. Family Pool with waterslide. Arkadia day club (Fri–Sun). 1,000 feet of private beach with paddleboards, kayaks, and windsurfing. Private cabanas with butler service, flat-screen TV, and WiFi.
                                </p>
                            </div>
                        </div>

                        {/* Block 4 - Spa & Nightlife */}
                        <div style={{ background: '#fff', borderRadius: 8, overflow: 'hidden', border: '1px solid #eae6e0' }}>
                            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80" alt="Spa" style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} loading="lazy" />
                            <div style={{ padding: 24 }}>
                                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#1a3a5c', margin: '0 0 10px' }}>Lapis Spa &amp; LIV Nightclub</h3>
                                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.8, margin: 0 }}>
                                    40,000 sq ft Lapis Spa with 32 treatment rooms, rain tunnels, saunas, and hydrotherapy. Fitness center with ocean views, heavy bags, and yoga classes. LIV Nightclub — one of the world's most famous venues — plus Bleaulive entertainment events.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Property Details Sidebar - now full width below blocks */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div style={{ background: '#fff', border: '1px solid #eae6e0', borderRadius: 8, padding: 24 }}>
                            <h4 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 16px', color: '#333' }}>Property Details</h4>
                            <div className="grid grid-cols-2 gap-x-6" style={{ fontSize: 12, color: '#666' }}>
                                {[
                                    ['Address', '4441 Collins Ave, Miami Beach, FL 33140'],
                                    ['Built', '1954 (Morris Lapidus)'],
                                    ['Renovated', '$1B renovation (2008)'],
                                    ['Towers', 'Chateau, Versailles, Trésor, Sorrento'],
                                    ['Rooms', '1,504 rooms & suites'],
                                    ['Property', '22 oceanfront acres'],
                                    ['Beach', '1,000 ft private beach'],
                                    ['Pools', '11 pools + cabanas'],
                                    ['Restaurants', '9+ dining venues'],
                                    ['Spa', 'Lapis — 40,000 sq ft'],
                                    ['Nightclub', 'LIV (dress code)'],
                                    ['Check-in / Out', '4:00 PM / 11:00 AM'],
                                    ['Resort Fee', '$53/night + tax'],
                                    ['Parking', 'Valet $55–70/night'],
                                    ['Pets', 'Allowed (fees apply)'],
                                    ['Airport', 'MIA — 20 min'],
                                ].map(([l, v]) => (
                                    <div key={l} style={{ padding: '6px 0', borderBottom: '1px solid #f5f2ed', display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                                        <span style={{ color: '#aaa', whiteSpace: 'nowrap' }}>{l}</span>
                                        <span style={{ textAlign: 'right', color: '#555' }}>{v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ background: '#fff', border: '1px solid #eae6e0', borderRadius: 8, padding: 24 }}>
                            <h4 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 16px', color: '#333' }}>All Services &amp; Amenities</h4>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-2" style={{ fontSize: 13, color: '#666' }}>
                                {[
                                    'Room Service', '24hr Front Desk', 'Concierge', 'Fitness Center',
                                    'Beach Access', 'Water Sports', 'Kids Activities', 'Playground & Waterslide',
                                    'Hot Tub / Jacuzzi', 'Steam Room & Sauna', 'Yoga Classes', 'Free WiFi',
                                    'In-Room Safe', 'Valet Parking', 'Car Rental Desk', 'Business Center',
                                    'Gift Shop', 'ATM on Site', 'Wheelchair Access', 'Laundry Service',
                                    'Pet Friendly', 'Currency Exchange', 'Babysitting', 'Game Room',
                                ].map((a, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '3px 0' }}>
                                        <ChkIco /> <span>{a}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Good to Know */}
                    <div style={{ background: '#fff', border: '1px solid #eae6e0', borderRadius: 8, padding: 20, marginTop: 16 }}>
                        <h4 style={{ fontSize: 13, fontWeight: 700, margin: '0 0 8px', color: '#333' }}>Good to Know</h4>
                        <div style={{ fontSize: 12, lineHeight: 1.8, color: '#777', display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                            <span>Photo ID + credit card at check-in</span>
                            <span>$150/day security deposit hold</span>
                            <span>Children 17 &amp; under stay free in existing beds</span>
                            <span>Rollaway beds $60/night</span>
                            <span>WiFi included in resort fee</span>
                        </div>
                    </div>
                </W>
            </section>

            <section style={{ background: '#1a3a5c' }}>
                <W style={{ paddingTop: 56, paddingBottom: 56, textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(1.2rem,2.5vw,1.7rem)', fontWeight: 400, color: '#fff', margin: '0 0 12px' }}>Reserve Your Stay at {H}</h2>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,.4)', margin: '0 auto 32px', maxWidth: 420 }}>We focus exclusively on this property. Our specialists know every room, floor, and view.</p>
                    <a href={`tel:${PHONE}`} className="inline-flex items-center gap-3 no-underline hover:opacity-90 transition-opacity" style={{ background: '#1a6b3c', color: '#fff', fontSize: 13, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '14px 32px', borderRadius: 3 }}><PhIco size={16} /> Call {PH}</a>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,.22)', marginTop: 20 }}>English &amp; Spanish · No fees · 7 days a week</p>
                </W>
            </section>

            <section id="faq" style={{ borderTop: '1px solid #eae6e0', background: '#faf8f5' }}>
                <div style={{ width: '100%', maxWidth: 820, marginLeft: 'auto', marginRight: 'auto', paddingLeft: 24, paddingRight: 24, paddingTop: 28, paddingBottom: 28 }}>
                    <details>
                        <summary style={{ fontSize: 18, fontWeight: 600, color: '#1a1a1a', cursor: 'pointer', listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span>Frequently Asked Questions</span>
                            <span style={{ fontSize: 20, color: '#bbb', fontWeight: 400 }}>+</span>
                        </summary>
                        <div style={{ marginTop: 20 }}>
                            {FAQS.map((f, i) => (
                                <details key={i} style={{ borderBottom: '1px solid #e4dfd8' }}>
                                    <summary style={{ padding: '14px 0', fontSize: 14, fontWeight: 600, color: '#333', cursor: 'pointer', listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                                        <span>{f.q}</span>
                                        <span style={{ fontSize: 16, color: '#bbb', flexShrink: 0 }}>+</span>
                                    </summary>
                                    <div style={{ paddingBottom: 16, fontSize: 13, lineHeight: 1.85, color: '#777', paddingRight: 36 }}>{f.a}</div>
                                </details>
                            ))}
                        </div>
                    </details>
                </div>
            </section>

            <footer style={{ background: '#f0ece6', borderTop: '1px solid #e4dfd8' }}>
                <W style={{ paddingTop: 48, paddingBottom: 48 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 24, marginBottom: 32 }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                                <div style={{ width: 30, height: 30, background: '#1a3a5c', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffd666', fontFamily: 'Georgia,serif', fontWeight: 'bold', fontSize: 15 }}>F</div>
                                <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: '.06em', color: '#1a3a5c' }}>Front Desk Direct</span>
                            </div>
                            <p style={{ fontSize: 12, color: '#aaa', maxWidth: 320, lineHeight: 1.7, margin: 0 }}>An independent reservation service specializing exclusively in {H}.</p>
                        </div>
                        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                            <div>
                                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: '#999', marginBottom: 10 }}>Company</div>
                                {['About Us', 'Terms of Service', 'Privacy Policy'].map(t => (<a key={t} href="/" className="no-underline hover:underline" style={{ display: 'block', color: '#bbb', fontSize: 12, marginBottom: 6 }}>{t}</a>))}
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
                    <div style={{ borderTop: '1px solid #e4dfd8', paddingTop: 24 }}>
                        <p style={{ fontSize: 11, lineHeight: 1.9, color: '#bbb', margin: '0 0 8px' }}>Front Desk Direct is operated by Chill N Go International LLC. We are <strong style={{ color: '#aaa' }}>not affiliated with, endorsed by, or connected to</strong> Fontainebleau Hotels &amp; Resorts or any subsidiaries. All hotel names and trademarks are property of their respective owners. Rates sourced from third-party suppliers, subject to change. By calling, you contact Front Desk Direct, not the hotel.</p>
                        <p style={{ fontSize: 10, color: '#ccc', margin: 0 }}>&copy; 2026 Chill N Go International LLC. All rights reserved.</p>
                    </div>
                </W>
            </footer>

            <div className="h-16 md:hidden" />
        </div>
    )
}