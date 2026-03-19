import { useEffect } from 'react'

const PHONE = '3054047860'
const PHONE_DISPLAY = '(305) 404-7860'

function Fontainebleau() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen" style={{
            '--bg': '#0c1a2a',
            '--surface': '#0f2035',
            '--text-primary': '#f5f0e8',
            '--text-muted': '#8fa3b8',
            '--accent': '#b8963e',
            '--accent-glow': 'rgba(184, 150, 62, 0.12)',
            background: 'var(--bg)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--sans)'
        }}>

            {/* Sticky CTA Bar */}
            <a href={`tel:${PHONE}`}
                className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex items-center justify-center gap-3 py-4 bg-[#b8963e] text-[#0c1a2a] text-sm font-medium tracking-wider uppercase no-underline">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Now to Reserve — {PHONE_DISPLAY}
            </a>

            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex justify-between items-center backdrop-blur-xl border-b border-white/[0.06]"
                style={{ background: 'rgba(12, 26, 42, 0.85)', animation: 'fadeDown 1s ease-out' }}>
                <div className="text-lg font-light tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--serif)' }}>
                    Fontainebleau
                    <span className="text-[#b8963e] ml-2 text-sm tracking-[0.3em]">Miami Beach</span>
                </div>
                <a href={`tel:${PHONE}`}
                    className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-[#b8963e] text-[#0c1a2a] text-[0.65rem] tracking-[0.25em] uppercase font-medium no-underline hover:bg-[#d4ad4a] transition-all duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    Reserve Now
                </a>
            </nav>

            {/* Hero */}
            <section className="relative min-h-screen flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-16 overflow-hidden">
                {/* Background image overlay */}
                <div className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }} />
                <div className="absolute inset-0 z-[1]"
                    style={{ background: 'linear-gradient(to top, #0c1a2a 0%, rgba(12,26,42,0.7) 40%, rgba(12,26,42,0.3) 100%)' }} />

                <div className="relative z-10 max-w-3xl">
                    <p className="text-[0.65rem] tracking-[0.5em] uppercase text-[#b8963e] mb-5 font-medium"
                        style={{ animation: 'fadeUp 1s ease-out 0.3s both' }}>
                        Iconic Oceanfront Resort — Miami Beach, Florida
                    </p>
                    <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.05] tracking-tight mb-6"
                        style={{ fontFamily: 'var(--serif)', animation: 'fadeUp 1s ease-out 0.5s both' }}>
                        Fontainebleau<br />
                        <em className="italic text-[#b8963e] font-light">Miami Beach</em>
                    </h1>
                    <p className="text-base md:text-lg text-[#8fa3b8] max-w-xl leading-relaxed mb-10"
                        style={{ animation: 'fadeUp 1s ease-out 0.7s both' }}>
                        1,500+ luxury rooms, 20 acres of oceanfront paradise, world-class dining, and the legendary LIV nightclub.
                        Call us for exclusive rates you won't find online.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 items-start"
                        style={{ animation: 'fadeUp 1s ease-out 0.9s both' }}>
                        <a href={`tel:${PHONE}`}
                            className="flex items-center gap-3 px-10 py-4 bg-[#b8963e] text-[#0c1a2a] text-[0.7rem] tracking-[0.25em] uppercase font-semibold no-underline hover:bg-[#d4ad4a] hover:-translate-y-0.5 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(184,150,62,0.3)]">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            Call {PHONE_DISPLAY}
                        </a>
                        <a href="#amenities"
                            className="px-10 py-4 bg-transparent text-[#8fa3b8] text-[0.7rem] tracking-[0.25em] uppercase font-normal no-underline border border-white/10 hover:border-[#b8963e] hover:text-[#b8963e] transition-all duration-300">
                            View Amenities
                        </a>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="py-8 px-6 border-y border-white/[0.06]"
                style={{ background: 'var(--surface)' }}>
                <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16 text-center">
                    {[
                        { val: '1,500+', label: 'Luxury Rooms' },
                        { val: '9', label: 'Restaurants' },
                        { val: '6', label: 'Pools' },
                        { val: '40,000 ft²', label: 'Lapis Spa' },
                    ].map((s) => (
                        <div key={s.label}>
                            <div className="text-2xl md:text-3xl font-light text-[#b8963e]" style={{ fontFamily: 'var(--serif)' }}>{s.val}</div>
                            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-[#8fa3b8] mt-1">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Book With Us */}
            <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
                <h2 className="text-center text-[0.7rem] tracking-[0.4em] uppercase text-[#b8963e] mb-16 font-medium">
                    <span className="inline-block w-8 h-px bg-[#b8963e] align-middle mr-4 opacity-50" />
                    Why Book With Us
                    <span className="inline-block w-8 h-px bg-[#b8963e] align-middle ml-4 opacity-50" />
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: '💰', title: 'Exclusive Rates', desc: 'Access wholesale pricing not available on Expedia, Booking.com, or the hotel website. Save 15-40% on your stay.' },
                        { icon: '🎯', title: 'Personal Concierge', desc: 'Dedicated agent handles your entire reservation — room preferences, special occasions, early check-in requests.' },
                        { icon: '🔒', title: 'Zero Risk', desc: 'Free cancellation on most rates. No prepayment required. Lock in your rate now, pay at the hotel.' },
                    ].map((f) => (
                        <div key={f.title}
                            className="p-8 border border-white/[0.06] hover:border-[#b8963e]/20 transition-all duration-500 group"
                            style={{ background: 'var(--surface)' }}>
                            <div className="text-3xl mb-5">{f.icon}</div>
                            <h3 className="text-lg font-normal mb-3" style={{ fontFamily: 'var(--serif)' }}>{f.title}</h3>
                            <p className="text-sm text-[#8fa3b8] leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Amenities */}
            <section className="py-20 px-6 md:px-12 border-t border-white/[0.06]" id="amenities">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-center text-[0.7rem] tracking-[0.4em] uppercase text-[#b8963e] mb-16 font-medium">
                        <span className="inline-block w-8 h-px bg-[#b8963e] align-middle mr-4 opacity-50" />
                        Resort Highlights
                        <span className="inline-block w-8 h-px bg-[#b8963e] align-middle ml-4 opacity-50" />
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            '🏖️ Beachfront Access',
                            '🏊 6 Outdoor Pools',
                            '🧖 Lapis Spa & Wellness',
                            '🍽️ 9 World-Class Restaurants',
                            '🎵 LIV Nightclub',
                            '🛍️ Designer Boutiques',
                            '🏋️ 24-Hour Fitness Center',
                            '👶 Kids Waterscape',
                            '🚤 Water Sports',
                            '🅿️ Valet Parking',
                            '📶 Free WiFi',
                            '🛎️ 24/7 Room Service',
                        ].map((item) => (
                            <div key={item}
                                className="py-4 px-5 text-sm text-[#8fa3b8] border border-white/[0.04] hover:border-[#b8963e]/15 hover:text-[var(--text-primary)] transition-all duration-300"
                                style={{ background: 'var(--surface)' }}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-6 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(184,150,62,0.1) 0%, transparent 70%)',
                        transform: 'translate(-50%, -50%)'
                    }} />
                <div className="relative z-10">
                    <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-light mb-4" style={{ fontFamily: 'var(--serif)' }}>
                        Ready to Experience <em className="italic text-[#b8963e]">Fontainebleau</em>?
                    </h2>
                    <p className="text-[#8fa3b8] mb-10 max-w-md mx-auto">
                        Speak with our reservation specialists for the best available rates and personalized booking assistance.
                    </p>
                    <a href={`tel:${PHONE}`}
                        className="inline-flex items-center gap-3 px-12 py-5 bg-[#b8963e] text-[#0c1a2a] text-[0.75rem] tracking-[0.25em] uppercase font-semibold no-underline hover:bg-[#d4ad4a] hover:-translate-y-0.5 transition-all duration-300 hover:shadow-[0_15px_50px_rgba(184,150,62,0.3)]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        Call {PHONE_DISPLAY}
                    </a>
                    <p className="text-xs text-[#8fa3b8]/50 mt-6">Available 7 days a week · English & Spanish</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 text-center border-t border-white/[0.06]">
                <p className="text-[0.65rem] text-[#8fa3b8]/40 tracking-wider">
                    &copy; 2026 Front Desk Direct — Independent hotel booking service. Not affiliated with Fontainebleau Hotels & Resorts.
                </p>
            </footer>

            {/* Bottom padding for mobile CTA */}
            <div className="h-16 md:hidden" />
        </div>
    )
}

export default Fontainebleau