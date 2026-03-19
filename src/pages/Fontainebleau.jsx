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
    { q: `How many restaurants are at ${HOTEL}?`, a: `The resort features 9 dining establishments offering a diverse range of cuisines including Chinese (Hakkasan), Italian (Mirabella), French-Mediterranean (La Côte), Japanese (Blade Sushi), steakhouse (Prime 54), and more. Casual beachside and poolside dining is also available.` },
    { q: `Does ${HOTEL} have a spa?`, a: `Yes, the Lapis Spa is a 40,000 square-foot full-service spa offering massages, body treatments, facials, aromatherapy, and hydrotherapy. The spa is inspired by mineral-rich waters and classic European thermal traditions.` },
    { q: `Is there parking available?`, a: `Valet parking is available at ${HOTEL}. Self-parking may also be available. Please contact us for current parking rates and details.` },
    { q: `Is Front Desk Direct the official website of ${HOTEL}?`, a: `No. Front Desk Direct is an independent reservation service that specializes exclusively in ${HOTEL}. We are operated by Chill N Go International LLC and are not affiliated with, endorsed by, or connected to Fontainebleau Hotels & Resorts or any of their subsidiaries. Our agents focus solely on this property, which allows us to offer expert-level knowledge of every room type, view, and rate available. We provide reservation assistance as a dedicated third-party booking service.` },
    { q: `Why should I book through Front Desk Direct instead of directly?`, a: `Our dedicated focus on ${HOTEL} means our agents have in-depth knowledge of every room category, building, view type, and current availability. We search multiple suppliers to find competitive rates, offer personalized room recommendations based on your specific needs (occasion, group size, preferences), and provide bilingual support in English and Spanish. There are no booking fees for our phone reservation service.` },
    { q: `What does it mean that you "specialize" in this hotel?`, a: `Unlike large OTAs that list millions of properties, Front Desk Direct dedicates its resources to ${HOTEL} exclusively. Our reservation specialists are trained specifically on this property — they know the difference between the Chateau, Trésor, and Versailles towers, which floors have the best views, which room types are best for families vs. couples, and which current promotions offer the best value. This focused expertise allows us to provide a level of guidance that generalist booking sites cannot match.` },
]

function Fontainebleau() {
    const [openFaq, setOpenFaq] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = `${HOTEL} — Reservations | Front Desk Direct`
        const meta = document.querySelector('meta[name="description"]')
        if (meta) meta.setAttribute('content', `Book ${HOTEL} through Front Desk Direct. Call ${PHONE_DISPLAY} for exclusive rates on 1,500+ luxury rooms. Independent reservation service.`)
    }, [])

    const PhoneIcon = ({ size = 14 }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )

    return (
        <div className="min-h-screen" style={{ background: '#ffffff', color: '#2d2d2d', fontFamily: "'Libre Franklin', system-ui, sans-serif" }}>

            {/* ===== MOBILE STICKY CTA ===== */}
            <a href={`tel:${PHONE}`}
                className="fixed bottom-0 left-0 right-0 z-[100] md:hidden flex items-center justify-center gap-2 py-3.5 text-[13px] font-semibold tracking-wide uppercase no-underline"
                style={{ background: '#1a6b3c', color: '#fff' }}>
                <PhoneIcon size={16} /> Call to Reserve — {PHONE_DISPLAY}
            </a>

            {/* ===== TOP BAR ===== */}
            <div className="w-full py-2 px-4 md:px-8 flex items-center justify-between text-[11px]"
                style={{ background: '#1a3a5c', color: 'rgba(255,255,255,0.7)' }}>
                <span>Front Desk Direct™ — Specialists in {HOTEL} reservations</span>
                <a href={`tel:${PHONE}`} className="hidden md:flex items-center gap-1.5 no-underline font-medium" style={{ color: '#ffd666' }}>
                    <PhoneIcon size={12} /> {PHONE_DISPLAY}
                </a>
            </div>

            {/* ===== NAV ===== */}
            <nav className="sticky top-0 z-50 px-4 md:px-8 py-3 flex items-center justify-between border-b"
                style={{ background: '#fff', borderColor: '#e8e4df' }}>
                <div className="flex items-center gap-6">
                    <a href="/" className="no-underline" style={{ color: '#1a3a5c' }}>
                        <div className="text-[10px] tracking-[0.25em] uppercase font-medium" style={{ color: '#999' }}>Front Desk Direct</div>
                        <div className="text-[15px] font-medium tracking-tight" style={{ fontFamily: 'var(--serif)' }}>Hotel Reservations</div>
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    <a href="#rooms" className="hidden md:inline text-[12px] tracking-wide uppercase no-underline font-medium" style={{ color: '#555' }}>Rooms</a>
                    <a href="#about" className="hidden md:inline text-[12px] tracking-wide uppercase no-underline font-medium" style={{ color: '#555' }}>About</a>
                    <a href="#faq" className="hidden md:inline text-[12px] tracking-wide uppercase no-underline font-medium" style={{ color: '#555' }}>FAQ</a>
                    <a href={`tel:${PHONE}`}
                        className="flex items-center gap-2 px-5 py-2 text-[11px] tracking-[0.15em] uppercase font-semibold no-underline rounded-sm"
                        style={{ background: '#1a6b3c', color: '#fff' }}>
                        <PhoneIcon size={13} /> Call Now
                    </a>
                </div>
            </nav>

            {/* ===== BREADCRUMBS ===== */}
            <div className="px-4 md:px-8 py-2 text-[11px] border-b" style={{ borderColor: '#f0ece6', color: '#aaa' }}>
                <a href="/" className="no-underline" style={{ color: '#aaa' }}>Home</a>
                <span className="mx-1.5">›</span>
                <a href="/" className="no-underline" style={{ color: '#aaa' }}>Hotels</a>
                <span className="mx-1.5">›</span>
                <a href="/" className="no-underline" style={{ color: '#aaa' }}>Miami Beach</a>
                <span className="mx-1.5">›</span>
                <span style={{ color: '#666' }}>{HOTEL}</span>
            </div>

            {/* ===== HERO IMAGE + HOTEL NAME ===== */}
            <div className="relative" style={{ height: '340px' }}>
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1600&q=80)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 40%',
                    }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.05) 100%)' }} />
                <div className="absolute bottom-0 left-0 right-0 px-4 md:px-8 pb-5">
                    <h1 className="text-[clamp(1.6rem,4vw,2.8rem)] font-light text-white mb-1" style={{ fontFamily: 'var(--serif)', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                        {HOTEL}
                    </h1>
                    <p className="text-[13px] text-white/70">{ADDRESS}</p>
                </div>
            </div>

            {/* ===== BOOKING BAR (Call to Reserve) ===== */}
            <div className="px-4 md:px-8 py-5 border-b" style={{ background: '#f9f7f4', borderColor: '#e8e4df' }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4">
                    <div className="flex-1 text-center md:text-left">
                        <p className="text-sm font-medium mb-1" style={{ color: '#1a3a5c' }}>We specialize exclusively in {HOTEL}</p>
                        <p className="text-[12px]" style={{ color: '#888' }}>Our agents know every room, every view, and every deal at this property. Call for personalized rate quotes.</p>
                    </div>
                    <a href={`tel:${PHONE}`}
                        className="flex items-center gap-3 px-8 py-3.5 text-[13px] tracking-[0.15em] uppercase font-semibold no-underline rounded-sm"
                        style={{ background: '#1a6b3c', color: '#fff' }}>
                        <PhoneIcon size={16} /> Call {PHONE_DISPLAY}
                    </a>
                </div>
            </div>

            {/* ===== INDEPENDENT NETWORK NOTICE ===== */}
            <div className="px-4 md:px-8 py-3 flex items-center justify-center gap-2 text-[12px] border-b"
                style={{ background: '#fef9ed', borderColor: '#f0e6cc', color: '#8a7540' }}>
                <span style={{ fontSize: '16px' }}>ℹ️</span>
                <span><strong>Front Desk Direct™</strong> is an independent reservation service dedicated exclusively to {HOTEL}. We know every room type, every view, and every deal available at this property.
                    <a href="#faq" className="underline ml-1" style={{ color: '#8a7540' }}>Learn more</a>
                </span>
            </div>

            {/* ===== WHY CHOOSE US — SPECIALIST ===== */}
            <section className="px-4 md:px-8 py-8 border-b" style={{ borderColor: '#e8e4df' }}>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                    {[
                        { icon: '🏨', title: 'Single-Property Focus', desc: `We don't spread across thousands of hotels. We dedicate 100% of our expertise to ${HOTEL}.` },
                        { icon: '🎯', title: 'Expert Room Guidance', desc: 'We know every building, floor, and view type. We\'ll match you to the perfect room for your trip.' },
                        { icon: '💰', title: 'Competitive Rates', desc: 'Our supplier relationships let us offer rates that compete with — and often beat — booking direct.' },
                        { icon: '🗣️', title: 'Bilingual Specialists', desc: 'English & Spanish speaking agents available 7 days a week. Personal service, not a bot.' },
                    ].map((v, i) => (
                        <div key={i} className="p-4">
                            <div className="text-xl mb-2">{v.icon}</div>
                            <h3 className="text-[13px] font-semibold mb-1" style={{ color: '#1a3a5c' }}>{v.title}</h3>
                            <p className="text-[11px] leading-relaxed" style={{ color: '#888' }}>{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== ROOMS & RATES ===== */}
            <section className="px-4 md:px-8 py-10 max-w-5xl mx-auto" id="rooms">
                <h2 className="text-xl font-medium mb-6" style={{ fontFamily: 'var(--serif)', color: '#1a3a5c' }}>Rooms &amp; Suites</h2>

                <div className="flex flex-col gap-5">
                    {ROOMS.map((room, i) => (
                        <div key={i} className="flex flex-col md:flex-row border rounded-sm overflow-hidden" style={{ borderColor: '#e8e4df' }}>
                            <div className="md:w-[240px] h-[200px] md:h-auto flex-shrink-0 relative overflow-hidden">
                                <img src={room.img} alt={room.name}
                                    className="w-full h-full object-cover" loading="lazy" />
                            </div>
                            <div className="flex-1 p-5 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-[15px] font-semibold mb-1" style={{ color: '#1a3a5c' }}>{room.name}</h3>
                                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] mb-3" style={{ color: '#999' }}>
                                        <span>{room.view}</span>
                                        <span>{room.beds}</span>
                                        <span>{room.sqft} sq ft</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {room.features.map((f, j) => (
                                            <span key={j} className="text-[11px] px-2 py-1 rounded-sm" style={{ background: '#f5f1ec', color: '#6b6560' }}>{f}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: '#f0ece6' }}>
                                    <span className="text-[11px] flex items-center gap-1" style={{ color: '#1a6b3c' }}>
                                        ✓ Best Rate Available by Phone
                                    </span>
                                    <a href={`tel:${PHONE}`}
                                        className="flex items-center gap-2 px-5 py-2 text-[11px] tracking-[0.1em] uppercase font-semibold no-underline rounded-sm"
                                        style={{ background: '#1a6b3c', color: '#fff' }}>
                                        <PhoneIcon size={12} /> Call for Rate
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== ABOUT ===== */}
            <section className="px-4 md:px-8 py-10 border-t" id="about" style={{ background: '#faf8f5', borderColor: '#e8e4df' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xl font-medium mb-6" style={{ fontFamily: 'var(--serif)', color: '#1a3a5c' }}>About {HOTEL}</h2>

                    <div className="text-[14px] leading-relaxed space-y-4" style={{ color: '#555' }}>
                        <p>
                            {HOTEL} stands as an iconic oceanfront resort renowned for its striking curved architecture,
                            elegant design, and prime location along Collins Avenue. Originally designed by Morris Lapidus
                            and opened in 1954, it remains a symbol of Miami Beach glamour and style.
                        </p>

                        <h3 className="text-[15px] font-semibold pt-2" style={{ color: '#1a3a5c' }}>Accommodations</h3>
                        <p>
                            Luxurious guest rooms and suites feature modern decor, floor-to-ceiling windows, and views
                            spanning the Atlantic Ocean, Biscayne Bay, or the Miami skyline. Spacious layouts, plush
                            bedding, and upscale amenities create a comfortable environment for both leisure and business travelers.
                        </p>

                        <h3 className="text-[15px] font-semibold pt-2" style={{ color: '#1a3a5c' }}>Pools &amp; Beach Access</h3>
                        <p>
                            The expansive poolscape includes multiple swimming pools, private cabanas, and direct access
                            to the white-sand beach. Cabanas include flat-screen TV, WiFi, and butler service.
                        </p>

                        <h3 className="text-[15px] font-semibold pt-2" style={{ color: '#1a3a5c' }}>Dining</h3>
                        <p>
                            A variety of award-winning restaurants serve cuisines ranging from modern Asian fare at Hakkasan to
                            refined Italian at Mirabella. Fresh seafood at La Côte, premium sushi at Blade, and classic steaks at Prime 54
                            complete an extensive culinary lineup. Chez Bon Bon offers artisanal pastries and coffee.
                        </p>

                        <h3 className="text-[15px] font-semibold pt-2" style={{ color: '#1a3a5c' }}>Nightlife</h3>
                        <p>
                            LIV Nightclub is a world-famous hotspot, attracting top DJs and celebrities. Alternative evening
                            venues include stylish lounges and poolside bars.
                        </p>

                        <h3 className="text-[15px] font-semibold pt-2" style={{ color: '#1a3a5c' }}>Spa &amp; Fitness</h3>
                        <p>
                            Lapis Spa offers indulgent treatments inspired by mineral-rich waters and classic European thermal
                            therapies in a 40,000 square-foot facility. A well-equipped 24-hour fitness center is also available.
                        </p>

                        <h3 className="text-[15px] font-semibold pt-2" style={{ color: '#1a3a5c' }}>Nearby Attractions</h3>
                        <p>
                            Situated in the heart of Miami Beach, the resort provides convenient access to the vibrant Art Deco
                            Historic District, South Beach nightlife, and the shops and restaurants along Lincoln Road Mall.
                            Miami International Airport is approximately 20 minutes by car.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== AMENITIES ===== */}
            <section className="px-4 md:px-8 py-10 border-t" style={{ borderColor: '#e8e4df' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xl font-medium mb-6" style={{ fontFamily: 'var(--serif)', color: '#1a3a5c' }}>Amenities</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {AMENITIES.map((a, i) => (
                            <div key={i} className="text-[13px] py-2.5 px-3 border rounded-sm" style={{ borderColor: '#f0ece6', color: '#555' }}>
                                ✓ {a}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA BANNER ===== */}
            <section className="px-4 md:px-8 py-10 text-center" style={{ background: '#1a3a5c' }}>
                <h2 className="text-[clamp(1.2rem,3vw,1.8rem)] font-light mb-3 text-white" style={{ fontFamily: 'var(--serif)' }}>
                    Reserve Your Stay at {HOTEL}
                </h2>
                <p className="text-[13px] mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    We focus exclusively on this property. Our specialists know every room type, every floor, and every view — so you get the perfect room at the best available rate.
                </p>
                <a href={`tel:${PHONE}`}
                    className="inline-flex items-center gap-3 px-10 py-4 text-[13px] tracking-[0.15em] uppercase font-semibold no-underline rounded-sm"
                    style={{ background: '#1a6b3c', color: '#fff' }}>
                    <PhoneIcon size={16} /> Call {PHONE_DISPLAY}
                </a>
                <p className="text-[11px] mt-4" style={{ color: 'rgba(255,255,255,0.3)' }}>English &amp; Spanish · No booking fees</p>
            </section>

            {/* ===== FAQ ===== */}
            <section className="px-4 md:px-8 py-10 border-t" id="faq" style={{ background: '#faf8f5', borderColor: '#e8e4df' }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-xl font-medium mb-6" style={{ fontFamily: 'var(--serif)', color: '#1a3a5c' }}>Frequently Asked Questions</h2>
                    <div className="flex flex-col">
                        {FAQS.map((faq, i) => (
                            <div key={i} className="border-b" style={{ borderColor: '#e8e4df' }}>
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full text-left py-4 flex items-center justify-between cursor-pointer"
                                    style={{ background: 'transparent', border: 'none', fontSize: '14px', fontWeight: 500, color: '#1a3a5c' }}>
                                    {faq.q}
                                    <span className="text-lg ml-4 flex-shrink-0" style={{ color: '#bbb', transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
                                </button>
                                {openFaq === i && (
                                    <p className="pb-4 text-[13px] leading-relaxed" style={{ color: '#666' }}>{faq.a}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== MAP ===== */}
            <section className="px-4 md:px-8 py-10 border-t" style={{ borderColor: '#e8e4df' }}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xl font-medium mb-4" style={{ fontFamily: 'var(--serif)', color: '#1a3a5c' }}>Location</h2>
                    <p className="text-[13px] mb-4" style={{ color: '#888' }}>{ADDRESS}</p>
                    <div className="w-full rounded-sm overflow-hidden border" style={{ borderColor: '#e8e4df', height: '300px' }}>
                        <iframe
                            title="Hotel Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.5!2d-80.1203!3d25.8199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b4a4674dca6f%3A0x52c4c2c2b2f75c5!2sFontainebleau%20Miami%20Beach!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="px-4 md:px-8 py-8 border-t" style={{ background: '#f5f1ec', borderColor: '#e8e4df' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="text-[13px] font-medium tracking-[0.1em] mb-3" style={{ color: '#1a3a5c' }}>
                        Front Desk Direct™
                    </div>
                    <p className="text-[11px] leading-relaxed mb-3" style={{ color: '#aaa' }}>
                        Front Desk Direct is an independent reservation service that specializes exclusively in {HOTEL},
                        operated by Chill N Go International LLC.
                        We are <strong>not affiliated with, endorsed by, or connected to</strong> Fontainebleau Hotels &amp; Resorts,
                        Fontainebleau Development, or any of their subsidiaries, parent companies, or partners.
                        Our dedicated focus on this single property allows us to provide expert-level booking assistance.
                        All hotel names, trademarks, and images referenced on this page are the property of their respective owners
                        and are used solely for identification purposes.
                    </p>
                    <p className="text-[11px] leading-relaxed mb-4" style={{ color: '#aaa' }}>
                        Rates, availability, and hotel information are sourced from third-party suppliers and are subject to change.
                        We do not guarantee the lowest available rate. By calling our reservation line, you are contacting
                        Front Desk Direct, not the hotel directly.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-[11px] mb-4" style={{ color: '#bbb' }}>
                        <a href="/terms" className="underline" style={{ color: '#bbb' }}>Terms of Service</a>
                        <a href="/privacy" className="underline" style={{ color: '#bbb' }}>Privacy Policy</a>
                        <a href="/" className="underline" style={{ color: '#bbb' }}>About Us</a>
                        <a href="#faq" className="underline" style={{ color: '#bbb' }}>FAQs</a>
                    </div>
                    <p className="text-[10px]" style={{ color: '#ccc' }}>
                        &copy; 2026 Chill N Go International LLC · All rights reserved.
                    </p>
                </div>
            </footer>

            {/* Mobile CTA padding */}
            <div className="h-14 md:hidden" />
        </div>
    )
}

export default Fontainebleau