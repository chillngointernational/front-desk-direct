import { useEffect, useState } from 'react'

const PHONE = '3054047860'
const PHONE_DISPLAY = '(305) 404-7860'
const HOTEL = 'Fontainebleau Miami Beach'
const ADDRESS = '4441 Collins Avenue, Miami Beach, FL, 33140, US'

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
    { q: `What is the address of ${HOTEL}?`, a: `${HOTEL} is located at ${ADDRESS}. The resort is situated on Collins Avenue in the Mid-Beach area of Miami Beach, approximately 16 km from Miami International Airport (MIA).` },
    { q: `What time is check-in and check-out?`, a: `Check-in begins at 4:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request, subject to availability. A valid photo ID and credit card are required at check-in.` },
    { q: `Is ${HOTEL} pet-friendly?`, a: `Yes, ${HOTEL} welcomes pets. Additional charges may apply. Please call our reservation specialists at ${PHONE_DISPLAY} for details on the pet policy, weight limits, and any associated fees.` },
    { q: `How many restaurants are at ${HOTEL}?`, a: `The resort features 9 dining establishments offering a diverse range of cuisines including Chinese (Hakkasan), Italian (Mirabella), French-Mediterranean (La Côte), Japanese (Blade Sushi), steakhouse (Prime 54), and more.` },
    { q: `Does ${HOTEL} have a spa?`, a: `Yes, the Lapis Spa is a 40,000 square-foot full-service spa offering massages, body treatments, facials, aromatherapy, and hydrotherapy inspired by classic European thermal traditions.` },
    { q: `Is there parking available?`, a: `Valet parking is available at ${HOTEL}. Self-parking may also be available. Please contact us for current rates.` },
    { q: `Is Front Desk Direct the official website of ${HOTEL}?`, a: `No. Front Desk Direct is an independent reservation service that specializes exclusively in ${HOTEL}. We are operated by Chill N Go International LLC and are not affiliated with Fontainebleau Hotels & Resorts. Our agents focus solely on this property, offering expert-level knowledge of every room type, view, and rate.` },
    { q: `Why should I book through Front Desk Direct instead of directly?`, a: `Our dedicated focus means our agents know every room category, building, view type, and availability. We search multiple suppliers for competitive rates, offer personalized recommendations, and provide bilingual support. No booking fees.` },
    { q: `What does it mean that you "specialize" in this hotel?`, a: `Unlike OTAs listing millions of properties, we focus exclusively on ${HOTEL}. Our specialists know the Chateau, Trésor, and Versailles towers, which floors have the best views, which rooms suit families vs. couples, and current promotions.` },
]

function Fontainebleau() {
    const [openFaq, setOpenFaq] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = `${HOTEL} — Reservations | Front Desk Direct`
    }, [])

    const PhoneIcon = ({ size = 14 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
    )

    const W = ({ children, className = '' }) => (
        <div className={`w-full max-w-[1080px] mx-auto px-5 md:px-8 ${className}`}>{children}</div>
    )

    return (
        <div className="min-h-screen" style={{ background: '#fff', color: '#2d2d2d', fontFamily: "'Libre Franklin', system-ui, sans-serif" }}>

            <a href={`tel:${PHONE}`} className="fixed bottom-0 left-0 right-0 z-[100] md:hidden flex items-center justify-center gap-2 py-4 text-[13px] font-semibold tracking-wide uppercase no-underline shadow-[0_-2px_10px_rgba(0,0,0,0.1)]" style={{ background: '#1a6b3c', color: '#fff' }}>
                <PhoneIcon size={16} /> Call to Reserve — {PHONE_DISPLAY}
            </a>

            <div className="w-full py-2.5" style={{ background: '#1a3a5c' }}>
                <W className="flex items-center justify-between text-[11px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    <span>Front Desk Direct™ — Specialists in {HOTEL} reservations</span>
                    <a href={`tel:${PHONE}`} className="hidden md:flex items-center gap-1.5 no-underline font-semibold" style={{ color: '#ffd666' }}><PhoneIcon size={12} /> {PHONE_DISPLAY}</a>
                </W>
            </div>

            <nav className="sticky top-0 z-50 border-b shadow-sm" style={{ background: '#fff', borderColor: '#eae6e0' }}>
                <W className="flex items-center justify-between py-3">
                    <a href="/" className="no-underline" style={{ color: '#1a3a5c' }}>
                        <div className="text-[9px] tracking-[0.3em] uppercase font-semibold" style={{ color: '#aaa' }}>Front Desk Direct</div>
                        <div className="text-[16px] font-medium" style={{ fontFamily: 'var(--serif)' }}>Hotel Reservations</div>
                    </a>
                    <div className="flex items-center gap-5">
                        <a href="#rooms" className="hidden md:inline text-[11px] tracking-[0.1em] uppercase no-underline font-medium hover:opacity-70 transition-opacity" style={{ color: '#555' }}>Rooms</a>
                        <a href="#about" className="hidden md:inline text-[11px] tracking-[0.1em] uppercase no-underline font-medium hover:opacity-70 transition-opacity" style={{ color: '#555' }}>About</a>
                        <a href="#faq" className="hidden md:inline text-[11px] tracking-[0.1em] uppercase no-underline font-medium hover:opacity-70 transition-opacity" style={{ color: '#555' }}>FAQ</a>
                        <a href={`tel:${PHONE}`} className="flex items-center gap-2 px-5 py-2.5 text-[11px] tracking-[0.12em] uppercase font-semibold no-underline hover:opacity-90 transition-opacity" style={{ background: '#1a6b3c', color: '#fff', borderRadius: '3px' }}>
                            <PhoneIcon size={13} /> Call Now
                        </a>
                    </div>
                </W>
            </nav>

            <div className="border-b" style={{ borderColor: '#f0ece6' }}>
                <W className="py-2.5 text-[11px]" style={{ color: '#bbb' }}>
                    <a href="/" className="no-underline hover:underline" style={{ color: '#bbb' }}>Home</a><span className="mx-2">›</span>
                    <a href="/" className="no-underline hover:underline" style={{ color: '#bbb' }}>Hotels</a><span className="mx-2">›</span>
                    <a href="/" className="no-underline hover:underline" style={{ color: '#bbb' }}>Miami Beach</a><span className="mx-2">›</span>
                    <span style={{ color: '#777' }}>{HOTEL}</span>
                </W>
            </div>

            <div className="relative w-full" style={{ height: 'clamp(280px, 40vw, 420px)' }}>
                <div className="absolute inset-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center 35%' }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.08) 100%)' }} />
                <W className="absolute bottom-0 left-1/2 -translate-x-1/2 pb-8">
                    <h1 className="text-[clamp(1.8rem,5vw,3.2rem)] font-light text-white mb-1.5 leading-tight" style={{ fontFamily: 'var(--serif)', textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>{HOTEL}</h1>
                    <p className="text-[13px] font-light" style={{ color: 'rgba(255,255,255,0.75)' }}>{ADDRESS}</p>
                </W>
            </div>

            <div className="border-b" style={{ background: '#f9f7f4', borderColor: '#eae6e0' }}>
                <W className="py-5 flex flex-col md:flex-row items-center gap-4">
                    <div className="flex-1 text-center md:text-left">
                        <p className="text-[15px] font-semibold mb-0.5" style={{ color: '#1a3a5c' }}>We specialize exclusively in {HOTEL}</p>
                        <p className="text-[13px]" style={{ color: '#999' }}>Our agents know every room, every view, and every deal at this property.</p>
                    </div>
                    <a href={`tel:${PHONE}`} className="flex items-center gap-3 px-8 py-3.5 text-[13px] tracking-[0.12em] uppercase font-semibold no-underline hover:opacity-90 transition-opacity flex-shrink-0" style={{ background: '#1a6b3c', color: '#fff', borderRadius: '3px' }}>
                        <PhoneIcon size={16} /> Call {PHONE_DISPLAY}
                    </a>
                </W>
            </div>

            <div className="border-b" style={{ background: '#fef9ed', borderColor: '#f0e6cc' }}>
                <W className="py-2.5 flex items-center justify-center gap-2 text-[12px] text-center" style={{ color: '#8a7540' }}>
                    <span style={{ fontSize: '14px' }}>ℹ️</span>
                    <span><strong>Front Desk Direct™</strong> is an independent reservation service dedicated exclusively to {HOTEL}. <a href="#faq" className="underline" style={{ color: '#8a7540' }}>Learn more</a></span>
                </W>
            </div>

            <div className="border-b" style={{ borderColor: '#eae6e0' }}>
                <W className="py-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            { icon: '🏨', title: 'Single-Property Focus', desc: `We dedicate 100% of our expertise to ${HOTEL}.` },
                            { icon: '🎯', title: 'Expert Room Guidance', desc: 'We know every building, floor, and view — we\'ll match you to the perfect room.' },
                            { icon: '💰', title: 'Competitive Rates', desc: 'Rates that compete with — and often beat — booking direct.' },
                            { icon: '🗣️', title: 'Bilingual Specialists', desc: 'English & Spanish, 7 days a week. Personal service, not a bot.' },
                        ].map((v, i) => (
                            <div key={i} className="py-2">
                                <div className="text-2xl mb-3">{v.icon}</div>
                                <h3 className="text-[13px] font-semibold mb-1.5" style={{ color: '#1a3a5c' }}>{v.title}</h3>
                                <p className="text-[12px] leading-relaxed" style={{ color: '#999' }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </W>
            </div>

            <section id="rooms">
                <W className="py-12">
                    <h2 className="text-[22px] font-medium mb-8" style={{ fontFamily: 'var(--serif)', color: '#1a3a5c' }}>Rooms &amp; Suites</h2>
                    <div className="flex flex-col gap-4">
                        {ROOMS.map((room, i) => (
                            <div key={i} className="flex flex-col md:flex-row border overflow-hidden hover:shadow-md transition-shadow duration-300" style={{ borderColor: '#eae6e0', borderRadius: '4px' }}>
                                <div className="w-full md:w-[280px] h-[220px] md:h-[210px] flex-shrink-0 overflow-hidden">
                                    <img src={room.img} alt={room.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                                </div>
                                <div className="flex-1 p-5 md:p-6 flex flex-col justify-between min-h-[180px]">
                                    <div>
                                        <h3 className="text-[16px] font-semibold mb-2" style={{ color: '#1a3a5c' }}>{room.name}</h3>
                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] mb-3" style={{ color: '#aaa' }}>
                                            <span>📍 {room.view}</span><span>·</span><span>🛏️ {room.beds}</span><span>·</span><span>{room.sqft} sq ft</span>
                                        </div>
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {room.features.map((f, j) => (
                                                <span key={j} className="text-[11px] px-2.5 py-1 font-medium" style={{ background: '#f5f2ed', color: '#7a7168', borderRadius: '3px' }}>✓ {f}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: '#f0ece6' }}>
                                        <span className="text-[12px] font-medium" style={{ color: '#1a6b3c' }}>✓ Best rate available by phone</span>
                                        <a href={`tel:${PHONE}`} className="flex items-center gap-2 px-5 py-2.5 text-[11px] tracking-[0.08em] uppercase font-semibold no-underline hover:opacity-90 transition-opacity" style={{ background: '#1a6b3c', color: '#fff', borderRadius: '3px' }}>
                                            <PhoneIcon size={12} /> Call for Rate
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </W>
            </section>

            <section id="about" style={{ background: '#faf8f5' }}>
                <W className="py-12">
                    <h2 className="text-[22px] font-medium mb-8" style={{ fontFamily: 'var(--serif)', color: '#1a3a5c' }}>About {HOTEL}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 text-[14px] leading-[1.8] space-y-5" style={{ color: '#555' }}>
                            <p>{HOTEL} stands as an iconic oceanfront resort renowned for its striking curved architecture, elegant design, and prime location along Collins Avenue. Originally designed by Morris Lapidus and opened in 1954, it remains a symbol of Miami Beach glamour.</p>
                            <div><h3 className="text-[15px] font-semibold mb-2" style={{ color: '#1a3a5c' }}>Accommodations</h3><p>Over 1,500 guest rooms and suites feature modern decor, floor-to-ceiling windows, and views of the Atlantic Ocean, Biscayne Bay, or the Miami skyline.</p></div>
                            <div><h3 className="text-[15px] font-semibold mb-2" style={{ color: '#1a3a5c' }}>Pools &amp; Beach</h3><p>The expansive poolscape includes six swimming pools, private cabanas with butler service, and direct beach access.</p></div>
                            <div><h3 className="text-[15px] font-semibold mb-2" style={{ color: '#1a3a5c' }}>Dining</h3><p>Nine restaurants serve cuisines from Hakkasan (Chinese) to Mirabella (Italian), La Côte (seafood), Blade (sushi), and Prime 54 (steakhouse).</p></div>
                            <div><h3 className="text-[15px] font-semibold mb-2" style={{ color: '#1a3a5c' }}>Nightlife &amp; Spa</h3><p>LIV Nightclub attracts world-class DJs. Lapis Spa offers 40,000 sq ft of treatments inspired by European thermal therapies.</p></div>
                        </div>
                        <div className="space-y-4">
                            <div className="p-5 border" style={{ background: '#fff', borderColor: '#eae6e0', borderRadius: '4px' }}>
                                <h4 className="text-[13px] font-semibold mb-3" style={{ color: '#1a3a5c' }}>Hotel details</h4>
                                <div className="text-[13px] space-y-2.5" style={{ color: '#777' }}>
                                    <div className="flex gap-3"><span>📍</span><span>{ADDRESS}</span></div>
                                    <div className="flex gap-3"><span>✈️</span><span>16 km from Miami Intl. Airport</span></div>
                                    <div className="flex gap-3"><span>⭐</span><span>5-Star Oceanfront Resort</span></div>
                                    <div className="flex gap-3"><span>🕐</span><span>Check-in 4 PM · Check-out 11 AM</span></div>
                                    <div className="flex gap-3"><span>🐾</span><span>Pet-friendly (charges may apply)</span></div>
                                    <div className="flex gap-3"><span>⭐</span><span>4.1 Google Rating (17k reviews)</span></div>
                                </div>
                            </div>
                            <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-2 w-full py-3.5 text-[12px] tracking-[0.1em] uppercase font-semibold no-underline hover:opacity-90 transition-opacity" style={{ background: '#1a3a5c', color: '#fff', borderRadius: '4px' }}>
                                <PhoneIcon size={14} /> Reserve by Phone
                            </a>
                        </div>
                    </div>
                </W>
            </section>

            <section>
                <W className="py-12">
                    <h2 className="text-[22px] font-medium mb-8" style={{ fontFamily: 'var(--serif)', color: '#1a3a5c' }}>Amenities</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                        {AMENITIES.map((a, i) => (
                            <div key={i} className="text-[13px] py-3 px-4 border font-medium" style={{ borderColor: '#f0ece6', color: '#666', borderRadius: '3px', background: '#faf8f5' }}>✓ {a}</div>
                        ))}
                    </div>
                </W>
            </section>

            <section className="text-center" style={{ background: '#1a3a5c' }}>
                <W className="py-14">
                    <h2 className="text-[clamp(1.3rem,3vw,2rem)] font-light mb-3 text-white" style={{ fontFamily: 'var(--serif)' }}>Reserve Your Stay at {HOTEL}</h2>
                    <p className="text-[13px] mb-8 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>We focus exclusively on this property. Our specialists know every room type, every floor, and every view.</p>
                    <a href={`tel:${PHONE}`} className="inline-flex items-center gap-3 px-10 py-4 text-[13px] tracking-[0.12em] uppercase font-semibold no-underline hover:opacity-90 transition-opacity" style={{ background: '#1a6b3c', color: '#fff', borderRadius: '3px' }}>
                        <PhoneIcon size={16} /> Call {PHONE_DISPLAY}
                    </a>
                    <p className="text-[11px] mt-5" style={{ color: 'rgba(255,255,255,0.3)' }}>English &amp; Spanish · No booking fees · 7 days a week</p>
                </W>
            </section>

            <section id="faq" style={{ background: '#faf8f5' }}>
                <W className="py-12" style={{ maxWidth: '760px' }}>
                    <h2 className="text-[22px] font-medium mb-8" style={{ fontFamily: 'var(--serif)', color: '#1a3a5c' }}>Frequently Asked Questions</h2>
                    {FAQS.map((faq, i) => (
                        <div key={i} className="border-b" style={{ borderColor: '#e4dfd8' }}>
                            <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left py-4 flex items-center justify-between cursor-pointer gap-4" style={{ background: 'transparent', border: 'none', fontSize: '14px', fontWeight: 500, color: '#1a3a5c', fontFamily: 'inherit' }}>
                                <span>{faq.q}</span>
                                <span className="text-[18px] flex-shrink-0 leading-none transition-transform duration-200" style={{ color: '#ccc', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>+</span>
                            </button>
                            {openFaq === i && <div className="pb-5 text-[13px] leading-[1.8] pr-8" style={{ color: '#777' }}>{faq.a}</div>}
                        </div>
                    ))}
                </W>
            </section>

            <section>
                <W className="py-12">
                    <h2 className="text-[22px] font-medium mb-2" style={{ fontFamily: 'var(--serif)', color: '#1a3a5c' }}>Location</h2>
                    <p className="text-[13px] mb-5" style={{ color: '#aaa' }}>{ADDRESS}</p>
                    <div className="w-full overflow-hidden border" style={{ borderColor: '#eae6e0', borderRadius: '4px', height: '320px' }}>
                        <iframe title="Hotel Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.5!2d-80.1203!3d25.8199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b4a4674dca6f%3A0x52c4c2c2b2f75c5!2sFontainebleau%20Miami%20Beach!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </W>
            </section>

            <footer style={{ background: '#f0ece6' }}>
                <W className="py-10 text-center">
                    <div className="text-[14px] font-medium tracking-[0.12em] mb-4" style={{ color: '#1a3a5c' }}>Front Desk Direct™</div>
                    <p className="text-[11px] leading-[1.8] mb-3 max-w-2xl mx-auto" style={{ color: '#aaa' }}>
                        Front Desk Direct is an independent reservation service specializing exclusively in {HOTEL}, operated by Chill N Go International LLC.
                        We are <strong style={{ color: '#999' }}>not affiliated with, endorsed by, or connected to</strong> Fontainebleau Hotels &amp; Resorts, Fontainebleau Development, or any subsidiaries.
                        All hotel names, trademarks, and images are property of their respective owners, used solely for identification.
                    </p>
                    <p className="text-[11px] leading-[1.8] mb-5 max-w-2xl mx-auto" style={{ color: '#aaa' }}>
                        Rates and availability sourced from third-party suppliers, subject to change. We do not guarantee the lowest rate. By calling, you contact Front Desk Direct, not the hotel.
                    </p>
                    <div className="flex flex-wrap justify-center gap-5 text-[11px] mb-5">
                        {['Terms of Service', 'Privacy Policy', 'About Us', 'FAQs'].map(t => (
                            <a key={t} href={t === 'FAQs' ? '#faq' : `/${t.toLowerCase().replace(/ /g, '-')}`} className="no-underline hover:underline" style={{ color: '#bbb' }}>{t}</a>
                        ))}
                    </div>
                    <p className="text-[10px]" style={{ color: '#ccc' }}>&copy; 2026 Chill N Go International LLC · All rights reserved.</p>
                </W>
            </footer>

            <div className="h-16 md:hidden" />
        </div>
    )
}

export default Fontainebleau