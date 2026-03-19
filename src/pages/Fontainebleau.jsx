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
    { name: 'Deluxe Bay View Guestroom', view: 'Bay View', beds: '1 King or 2 Queens', img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80', sqft: '400', features: ['Free WiFi', 'Flat-screen TV', '24hr Room Service', 'In-room Safe', 'Air Conditioning'] },
    { name: 'Ocean View Guestroom with Balcony', view: 'Ocean View', beds: '1 King or 2 Queens', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80', sqft: '450', features: ['Private Balcony', 'Free WiFi', 'Ocean Views', '24hr Room Service', 'iPod Dock'] },
    { name: 'Oceanfront Guestroom with Balcony', view: 'Oceanfront', beds: '1 King or 2 Queens', img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80', sqft: '480', features: ['Oceanfront Balcony', 'Free WiFi', 'Premium Bedding', 'Marble Bathroom', 'Bathrobe & Slippers'] },
    { name: 'Junior Suite, Bay View', view: 'Bay View', beds: '1 King', img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80', sqft: '550', features: ['Sitting Area', 'Sofa Bed', 'Free WiFi', 'Bay Views', 'Walk-in Shower'] },
    { name: 'Junior Suite, Ocean View', view: 'Ocean View', beds: '1 King', img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80', sqft: '580', features: ['Ocean Views', 'Separate Living Area', 'Free WiFi', 'Soaking Tub', 'Premium Amenities'] },
    { name: 'One Bedroom Suite, Ocean View', view: 'Ocean View', beds: '1 King + Sofa Bed', img: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&q=80', sqft: '750', features: ['Separate Living Room', 'Ocean Views', 'Oversized Bath', 'Soaking Tub', 'Walk-in Closet'] },
    { name: 'Oceanfront One Bedroom Suite', view: 'Oceanfront', beds: '1 King + Sofa Bed', img: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80', sqft: '850', features: ['Oceanfront Views', 'Private Balcony', 'Full Living Room', 'Dining Area', 'Luxury Bath'] },
    { name: 'Presidential Suite', view: 'Oceanfront Panoramic', beds: '1 King + Living', img: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=600&q=80', sqft: '2,000+', features: ['Panoramic Ocean Views', 'Full Kitchen', 'Dining for 8', 'Private Terrace', 'Butler Service'] },
]

const AMENITIES = [
    'Beachfront Access', '6 Outdoor Pools', 'Private Cabanas', 'Lapis Spa (40,000 sq ft)',
    'LIV Nightclub', '9 Restaurants', '24-Hour Room Service', 'Fitness Center',
    'Kids Waterscape', 'Water Sports', 'Valet Parking', 'Free WiFi',
    'Concierge Service', 'Designer Boutiques', 'Business Center', 'Pet Friendly',
    'Car Rental Desk', 'ATM On-site', 'Wheelchair Accessible', 'Non-Smoking Property',
]

const FAQS = [
    { q: `What is the address of ${H}?`, a: `${H} is located at ${ADDR}, on Collins Avenue in the Mid-Beach area, approximately 16 km from Miami International Airport (MIA).` },
    { q: 'What time is check-in and check-out?', a: 'Check-in begins at 4:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request. A valid photo ID and credit card are required.' },
    { q: `Is ${H} pet-friendly?`, a: `Yes, ${H} welcomes pets. Additional charges may apply. Call ${PH} for details on the pet policy and fees.` },
    { q: `How many restaurants are at ${H}?`, a: 'The resort features 9 dining establishments: Hakkasan (Chinese), Mirabella (Italian), La Côte (French-Mediterranean), Blade (Sushi), Prime 54 (Steakhouse), Chez Bon Bon (Pastries), and more.' },
    { q: `Does ${H} have a spa?`, a: 'Yes. The Lapis Spa is a 40,000 sq ft full-service facility offering massages, body treatments, facials, aromatherapy, and hydrotherapy.' },
    { q: 'Is there parking available?', a: `Valet parking is available. Contact us at ${PH} for current rates.` },
    { q: `Is this the official website of ${H}?`, a: `No. Front Desk Direct is an independent reservation service specializing exclusively in ${H}, operated by Chill N Go International LLC. We are not affiliated with Fontainebleau Hotels & Resorts. Our agents focus solely on this property, offering expert-level knowledge of every room type, view, and rate.` },
    { q: 'Why book through Front Desk Direct?', a: `Our dedicated focus means in-depth knowledge of every room category, building, and view type. We search multiple suppliers for competitive rates, offer personalized recommendations, and provide bilingual support (English & Spanish). No booking fees.` },
    { q: 'What does "specialize in this hotel" mean?', a: `Unlike OTAs listing millions of properties, we focus exclusively on ${H}. Our specialists know the Chateau, Trésor, and Versailles towers, which floors have the best views, which rooms suit families vs. couples, and current promotions.` },
]

const PhoneIcon = ({ size = 14, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
)

const CheckIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1a6b3c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
)

const WifiIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a6b3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><circle cx="12" cy="20" r="1" /></svg>
)

function Fontainebleau() {
    const [openFaq, setOpenFaq] = useState(null)
    useEffect(() => { window.scrollTo(0, 0); document.title = `${H} — Reservations | Front Desk Direct` }, [])

    const W = ({ children, className = '', narrow = false }) => (
        <div className={`w-full mx-auto px-5 md:px-8 ${narrow ? 'max-w-[800px]' : 'max-w-[1100px]'} ${className}`}>{children}</div>
    )

    return (
        <div className="min-h-screen" style={{ background: '#fff', color: '#333', fontFamily: "'Libre Franklin', -apple-system, sans-serif", fontSize: '14px' }}>

            {/* Mobile sticky */}
            <a href={`tel:${PHONE}`} className="fixed bottom-0 left-0 right-0 z-[100] md:hidden flex items-center justify-center gap-2 py-4 text-[13px] font-semibold tracking-wide uppercase no-underline shadow-[0_-2px_12px_rgba(0,0,0,0.12)]" style={{ background: '#1a6b3c', color: '#fff' }}>
                <PhoneIcon size={16} /> Call to Reserve — {PH}
            </a>

            {/* Top bar */}
            <div style={{ background: '#1a3a5c' }}>
                <W className="flex items-center justify-between py-2.5 text-[11px]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    <span className="flex items-center gap-2">
                        <span style={{ color: '#fff', fontWeight: 600 }}>Front Desk Direct</span>
                        <span style={{ opacity: 0.4 }}>|</span>
                        <span>Specialists in {H} reservations</span>
                    </span>
                    <a href={`tel:${PHONE}`} className="hidden md:flex items-center gap-2 no-underline" style={{ color: '#ffd666', fontWeight: 600, fontSize: '13px' }}>
                        <PhoneIcon size={14} color="#ffd666" /> {PH}
                    </a>
                </W>
            </div>

            {/* Nav */}
            <nav className="sticky top-0 z-50 shadow-sm" style={{ background: '#fff', borderBottom: '1px solid #eae6e0' }}>
                <W className="flex items-center justify-between py-3">
                    <a href="/" className="no-underline flex items-center gap-3">
                        <div style={{ width: 32, height: 32, background: '#1a3a5c', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffd666', fontFamily: 'Georgia, serif', fontWeight: 'bold', fontSize: 18 }}>F</div>
                        <div>
                            <div className="text-[10px] tracking-[0.2em] uppercase font-semibold" style={{ color: '#aaa' }}>Front Desk Direct</div>
                            <div className="text-[14px] font-medium" style={{ color: '#1a3a5c' }}>Hotel Reservations</div>
                        </div>
                    </a>
                    <div className="flex items-center gap-5">
                        {['Rooms', 'About', 'FAQ'].map(t => (
                            <a key={t} href={`#${t.toLowerCase()}`} className="hidden md:inline text-[11px] tracking-[0.08em] uppercase no-underline font-medium hover:opacity-60 transition-opacity" style={{ color: '#666' }}>{t}</a>
                        ))}
                        <a href={`tel:${PHONE}`} className="flex items-center gap-2 px-5 py-2.5 text-[11px] tracking-[0.1em] uppercase font-semibold no-underline hover:opacity-90 transition-opacity" style={{ background: '#1a6b3c', color: '#fff', borderRadius: 3 }}>
                            <PhoneIcon size={13} /> Call Now
                        </a>
                    </div>
                </W>
            </nav>

            {/* Breadcrumbs */}
            <div style={{ borderBottom: '1px solid #f0ece6' }}>
                <W className="py-2.5 text-[11px]" style={{ color: '#ccc' }}>
                    {['Home', 'Hotels', 'U.S.A.', 'Miami Beach'].map((c, i) => (
                        <span key={i}><a href="/" className="no-underline hover:underline" style={{ color: '#bbb' }}>{c}</a><span className="mx-1.5" style={{ color: '#ddd' }}>&gt;</span></span>
                    ))}
                    <span style={{ color: '#888' }}>{H}</span>
                </W>
            </div>

            {/* Photo grid */}
            <W className="py-6">
                <div className="grid gap-2" style={{ gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', height: 'clamp(250px, 35vw, 400px)' }}>
                    <div className="row-span-2 overflow-hidden" style={{ borderRadius: '4px 0 0 4px' }}>
                        <img src={PHOTOS[0]} alt={H} className="w-full h-full object-cover" />
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-2">
                        {PHOTOS.slice(1).map((p, i) => (
                            <div key={i} className="overflow-hidden" style={{ borderRadius: i === 1 ? '0 4px 0 0' : i === 3 ? '0 0 4px 0' : 0 }}>
                                <img src={p} alt={`${H} ${i + 2}`} className="w-full h-full object-cover" loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            </W>

            {/* Hotel name + stars */}
            <W>
                <h1 className="text-[clamp(1.6rem,4vw,2.4rem)] font-medium mb-1" style={{ fontFamily: 'Georgia, serif', color: '#1a1a1a' }}>{H}</h1>
                <p className="text-[13px] mb-2" style={{ color: '#999' }}>{ADDR}</p>
                <div className="flex items-center gap-0.5 mb-6">
                    {[1, 2, 3, 4, 5].map(s => (
                        <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#1a3a5c" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    ))}
                </div>
            </W>

            {/* Booking bar */}
            <div style={{ background: '#f4f1ec', borderTop: '1px solid #e8e4de', borderBottom: '1px solid #e8e4de' }}>
                <W className="py-5 flex flex-col md:flex-row items-center gap-4">
                    <div className="flex-1 flex flex-col md:flex-row items-center gap-4 w-full">
                        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                            {[
                                { label: 'Check-in', val: 'Select date' },
                                { label: 'Check-out', val: 'Select date' },
                                { label: 'Rooms', val: '1' },
                                { label: 'Guests', val: '2 Adults' },
                            ].map((f, i) => (
                                <div key={i} className="px-3 py-2.5" style={{ background: '#fff', border: '1px solid #ddd', borderRadius: 3 }}>
                                    <div className="text-[10px] uppercase tracking-wider font-semibold mb-0.5" style={{ color: '#999' }}>{f.label}</div>
                                    <div className="text-[13px]" style={{ color: '#555' }}>{f.val}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <a href={`tel:${PHONE}`} className="flex items-center gap-3 px-7 py-4 text-[13px] tracking-[0.1em] uppercase font-bold no-underline hover:opacity-90 transition-opacity flex-shrink-0 w-full md:w-auto justify-center" style={{ background: '#1a6b3c', color: '#fff', borderRadius: 3 }}>
                        <PhoneIcon size={16} /> Call for Rates
                    </a>
                </W>
            </div>

            {/* Disclosure */}
            <div style={{ borderBottom: '1px solid #f0e6cc', background: '#fffcf5' }}>
                <W className="py-2.5 flex items-center justify-center gap-2 text-[12px]" style={{ color: '#a08c5a' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a08c5a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                    <span><strong>Front Desk Direct</strong> is an independent reservation service dedicated exclusively to {H}. <a href="#faq" className="underline" style={{ color: '#a08c5a' }}>Learn more</a></span>
                </W>
            </div>

            {/* Rooms */}
            <section id="rooms">
                <W className="py-10">
                    <h2 className="text-[20px] font-semibold mb-6" style={{ color: '#1a1a1a' }}>Rooms &amp; Rates</h2>
                    <div className="flex flex-col gap-4">
                        {ROOMS.map((r, i) => (
                            <div key={i} className="flex flex-col md:flex-row border overflow-hidden hover:shadow-md transition-shadow" style={{ borderColor: '#e8e4de', borderRadius: 4 }}>
                                <div className="w-full md:w-[260px] h-[200px] md:h-[200px] flex-shrink-0 overflow-hidden relative">
                                    <img src={r.img} alt={r.name} className="w-full h-full object-cover" loading="lazy" />
                                </div>
                                <div className="flex-1 p-5 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-[15px] font-semibold mb-1.5" style={{ color: '#1a3a5c' }}>{r.name}</h3>
                                        <div className="flex flex-wrap items-center gap-3 text-[11px] mb-3" style={{ color: '#aaa' }}>
                                            <span>{r.view}</span><span style={{ color: '#ddd' }}>|</span>
                                            <span>{r.beds}</span><span style={{ color: '#ddd' }}>|</span>
                                            <span>{r.sqft} sq ft</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-[12px] mb-3" style={{ color: '#1a6b3c' }}>
                                            <WifiIcon /> <span>Free Internet</span>
                                        </div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {r.features.map((f, j) => (
                                                <span key={j} className="flex items-center gap-1 text-[11px] px-2 py-0.5" style={{ background: '#f5f2ed', color: '#777', borderRadius: 2 }}>
                                                    <CheckIcon /> {f}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-3 mt-3 border-t" style={{ borderColor: '#f0ece6' }}>
                                        <span className="flex items-center gap-1.5 text-[12px] font-medium" style={{ color: '#1a6b3c' }}>
                                            <CheckIcon /> Best rate by phone
                                        </span>
                                        <a href={`tel:${PHONE}`} className="flex items-center gap-2 px-5 py-2.5 text-[11px] tracking-[0.06em] uppercase font-bold no-underline hover:opacity-90 transition-opacity" style={{ background: '#1a6b3c', color: '#fff', borderRadius: 3 }}>
                                            <PhoneIcon size={12} /> Call for Rate
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </W>
            </section>

            {/* About */}
            <section id="about" style={{ background: '#faf8f5', borderTop: '1px solid #eae6e0' }}>
                <W className="py-10">
                    <h2 className="text-[20px] font-semibold mb-6" style={{ color: '#1a1a1a' }}>About {H}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 text-[14px] leading-[1.85] space-y-5" style={{ color: '#555' }}>
                            <p>{H} stands as an iconic oceanfront resort renowned for its striking curved architecture, elegant design, and prime location along Collins Avenue. Originally designed by Morris Lapidus and opened in 1954, it remains a symbol of Miami Beach glamour.</p>
                            <div><h3 className="text-[14px] font-bold mb-1" style={{ color: '#333' }}>Accommodations</h3><p>Over 1,500 guest rooms and suites feature modern decor, floor-to-ceiling windows, and views of the Atlantic Ocean, Biscayne Bay, or the Miami skyline.</p></div>
                            <div><h3 className="text-[14px] font-bold mb-1" style={{ color: '#333' }}>Pools &amp; Beach</h3><p>Six swimming pools, private cabanas with butler service, and direct white-sand beach access.</p></div>
                            <div><h3 className="text-[14px] font-bold mb-1" style={{ color: '#333' }}>Dining</h3><p>Nine restaurants: Hakkasan, Mirabella, La Côte, Blade Sushi, Prime 54, Chez Bon Bon, and more.</p></div>
                            <div><h3 className="text-[14px] font-bold mb-1" style={{ color: '#333' }}>Nightlife &amp; Spa</h3><p>LIV Nightclub with world-class DJs. Lapis Spa: 40,000 sq ft of treatments inspired by European thermal therapies.</p></div>
                            <div><h3 className="text-[14px] font-bold mb-1" style={{ color: '#333' }}>Nearby</h3><p>Art Deco Historic District, South Beach, Lincoln Road Mall, and Miami International Airport (20 min drive).</p></div>
                        </div>
                        <div className="space-y-4">
                            <div className="p-5" style={{ background: '#fff', border: '1px solid #eae6e0', borderRadius: 4 }}>
                                <h4 className="text-[13px] font-bold mb-4" style={{ color: '#333' }}>Hotel details</h4>
                                <div className="text-[13px] space-y-3" style={{ color: '#777' }}>
                                    {[
                                        ['Location', ADDR],
                                        ['Airport', '16 km from MIA'],
                                        ['Category', '5-Star Oceanfront Resort'],
                                        ['Check-in', '4:00 PM'],
                                        ['Check-out', '11:00 AM'],
                                        ['Pets', 'Allowed (fees apply)'],
                                        ['Rating', '4.1 on Google (17k reviews)'],
                                    ].map(([l, v]) => (
                                        <div key={l} className="flex justify-between gap-3">
                                            <span style={{ color: '#aaa', flexShrink: 0 }}>{l}</span>
                                            <span className="text-right">{v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-2 w-full py-3.5 text-[12px] tracking-[0.08em] uppercase font-bold no-underline hover:opacity-90 transition-opacity" style={{ background: '#1a3a5c', color: '#fff', borderRadius: 4 }}>
                                <PhoneIcon size={14} /> Reserve by Phone
                            </a>
                        </div>
                    </div>
                </W>
            </section>

            {/* Amenities */}
            <section style={{ borderTop: '1px solid #eae6e0' }}>
                <W className="py-10">
                    <h2 className="text-[20px] font-semibold mb-6" style={{ color: '#1a1a1a' }}>Amenities</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {AMENITIES.map((a, i) => (
                            <div key={i} className="flex items-center gap-2 text-[13px] py-2.5 px-3" style={{ background: '#faf8f5', borderRadius: 3, color: '#666' }}>
                                <CheckIcon /> {a}
                            </div>
                        ))}
                    </div>
                </W>
            </section>

            {/* CTA */}
            <section className="text-center" style={{ background: '#1a3a5c' }}>
                <W className="py-14">
                    <h2 className="text-[clamp(1.2rem,3vw,1.8rem)] font-normal mb-3 text-white" style={{ fontFamily: 'Georgia, serif' }}>Reserve Your Stay at {H}</h2>
                    <p className="text-[13px] mb-8 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>We focus exclusively on this property. Our specialists know every room, floor, and view.</p>
                    <a href={`tel:${PHONE}`} className="inline-flex items-center gap-3 px-10 py-4 text-[13px] tracking-[0.1em] uppercase font-bold no-underline hover:opacity-90 transition-opacity" style={{ background: '#1a6b3c', color: '#fff', borderRadius: 3 }}>
                        <PhoneIcon size={16} /> Call {PH}
                    </a>
                    <p className="text-[11px] mt-5" style={{ color: 'rgba(255,255,255,0.25)' }}>English &amp; Spanish &middot; No fees &middot; 7 days a week</p>
                </W>
            </section>

            {/* FAQ */}
            <section id="faq" style={{ background: '#faf8f5', borderTop: '1px solid #eae6e0' }}>
                <W className="py-10" narrow>
                    <h2 className="text-[20px] font-semibold mb-6" style={{ color: '#1a1a1a' }}>Frequently Asked Questions</h2>
                    {FAQS.map((f, i) => (
                        <div key={i} style={{ borderBottom: '1px solid #e4dfd8' }}>
                            <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left py-4 flex items-center justify-between gap-4 cursor-pointer" style={{ background: 'none', border: 'none', fontSize: 14, fontWeight: 600, color: '#333', fontFamily: 'inherit' }}>
                                <span>{f.q}</span>
                                <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full transition-transform duration-200" style={{ border: '1px solid #ddd', color: '#bbb', fontSize: 14, transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>+</span>
                            </button>
                            {openFaq === i && <div className="pb-5 text-[13px] leading-[1.85] pr-10" style={{ color: '#777' }}>{f.a}</div>}
                        </div>
                    ))}
                </W>
            </section>

            {/* Map */}
            <section style={{ borderTop: '1px solid #eae6e0' }}>
                <W className="py-10">
                    <h2 className="text-[20px] font-semibold mb-1" style={{ color: '#1a1a1a' }}>Location</h2>
                    <p className="text-[13px] mb-5" style={{ color: '#aaa' }}>{ADDR}</p>
                    <div className="w-full overflow-hidden" style={{ border: '1px solid #eae6e0', borderRadius: 4, height: 300 }}>
                        <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.5!2d-80.1203!3d25.8199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b4a4674dca6f%3A0x52c4c2c2b2f75c5!2sFontainebleau%20Miami%20Beach!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </W>
            </section>

            {/* Footer */}
            <footer style={{ background: '#f0ece6', borderTop: '1px solid #e4dfd8' }}>
                <W className="py-10 text-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div style={{ width: 24, height: 24, background: '#1a3a5c', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffd666', fontFamily: 'Georgia, serif', fontWeight: 'bold', fontSize: 14 }}>F</div>
                        <span className="text-[13px] font-semibold tracking-[0.1em]" style={{ color: '#1a3a5c' }}>Front Desk Direct</span>
                    </div>
                    <p className="text-[11px] leading-[1.85] mb-3 max-w-2xl mx-auto" style={{ color: '#aaa' }}>
                        Front Desk Direct is an independent reservation service specializing exclusively in {H}, operated by Chill N Go International LLC.
                        We are <strong style={{ color: '#999' }}>not affiliated with, endorsed by, or connected to</strong> Fontainebleau Hotels &amp; Resorts, Fontainebleau Development, or any subsidiaries.
                        All hotel names, trademarks, and images are property of their respective owners, used solely for identification.
                    </p>
                    <p className="text-[11px] leading-[1.85] mb-5 max-w-2xl mx-auto" style={{ color: '#aaa' }}>
                        Rates and availability sourced from third-party suppliers, subject to change. We do not guarantee the lowest rate. By calling, you contact Front Desk Direct, not the hotel.
                    </p>
                    <div className="flex flex-wrap justify-center gap-5 text-[11px] mb-5">
                        {['Terms of Service', 'Privacy Policy', 'About Us', 'FAQs'].map(t => (
                            <a key={t} href={t === 'FAQs' ? '#faq' : `/${t.toLowerCase().replace(/ /g, '-')}`} className="no-underline hover:underline" style={{ color: '#bbb' }}>{t}</a>
                        ))}
                    </div>
                    <p className="text-[10px]" style={{ color: '#ccc' }}>&copy; 2026 Chill N Go International LLC. All rights reserved.</p>
                </W>
            </footer>

            <div className="h-16 md:hidden" />
        </div>
    )
}

export default Fontainebleau