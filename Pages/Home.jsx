function Home() {
    return (
        <div className="min-h-screen">
            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex justify-between items-center backdrop-blur-xl bg-[var(--bg)]/60 border-b border-[var(--accent)]/[0.08]"
                style={{ animation: 'fadeDown 1s ease-out' }}>
                <a href="#" className="font-[var(--serif)] text-2xl font-light tracking-[0.15em] text-[var(--text-primary)] no-underline"
                    style={{ fontFamily: 'var(--serif)' }}>
                    FRONT DESK <span className="text-[var(--accent)] font-semibold">DIRECT</span>
                </a>
                <ul className="hidden md:flex gap-10 list-none">
                    {['Hotels', 'Deals', 'Contact'].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`}
                                className="text-[var(--text-muted)] no-underline text-xs tracking-[0.2em] uppercase font-normal hover:text-[var(--accent)] transition-colors duration-300">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 relative">
                <div className="absolute top-[20%] left-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
                        animation: 'breathe 6s ease-in-out infinite',
                        transform: 'translateX(-50%)'
                    }} />
                <p className="text-[0.7rem] tracking-[0.4em] uppercase text-[var(--accent)] mb-8 font-medium relative"
                    style={{ animation: 'fadeUp 1s ease-out 0.3s both' }}>
                    <span className="inline-block w-10 h-px bg-[var(--accent)] align-middle mr-4 opacity-50" />
                    Hotel Booking Platform
                    <span className="inline-block w-10 h-px bg-[var(--accent)] align-middle ml-4 opacity-50" />
                </p>
                <h1 className="text-[clamp(3rem,8vw,7rem)] font-light leading-[1.05] tracking-tight mb-6 relative"
                    style={{ fontFamily: 'var(--serif)', animation: 'fadeUp 1s ease-out 0.5s both' }}>
                    Your Stay,<br />
                    <em className="italic text-[var(--accent)] font-light">Direct</em>
                </h1>
                <p className="text-[1.05rem] text-[var(--text-muted)] max-w-[480px] leading-relaxed mb-12 relative"
                    style={{ animation: 'fadeUp 1s ease-out 0.7s both' }}>
                    Exclusive hotel rates worldwide. No middlemen, no markups — just the best deals delivered directly to you.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 items-center relative"
                    style={{ animation: 'fadeUp 1s ease-out 0.9s both' }}>
                    <a href="#hotels"
                        className="inline-block px-10 py-4 bg-[var(--accent)] text-[var(--bg)] text-[0.7rem] tracking-[0.25em] uppercase font-medium no-underline hover:bg-[var(--text-primary)] hover:-translate-y-0.5 transition-all duration-400 hover:shadow-[0_10px_30px_rgba(200,169,110,0.2)]">
                        Browse Hotels
                    </a>
                    <a href="mailto:hotels@frontdeskdirect.center"
                        className="inline-block px-10 py-4 bg-transparent text-[var(--text-muted)] text-[0.7rem] tracking-[0.25em] uppercase font-normal no-underline border border-[var(--text-muted)]/30 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-400">
                        Get in Touch
                    </a>
                </div>
            </section>

            <div className="w-px h-20 mx-auto opacity-40"
                style={{ background: 'linear-gradient(to bottom, transparent, var(--accent), transparent)' }} />

            <section className="py-24 px-6 md:px-12 max-w-[1100px] mx-auto" id="hotels">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { num: '01', title: 'Best Rate Guarantee', desc: 'Access wholesale hotel rates across 2M+ properties worldwide. Better prices than retail OTAs.' },
                        { num: '02', title: 'Curated Selection', desc: 'Handpicked properties vetted for quality, location, and guest satisfaction. No filler listings.' },
                        { num: '03', title: 'Concierge Support', desc: '24/7 bilingual support for bookings, modifications, and special requests. We handle everything.' },
                    ].map((f) => (
                        <div key={f.num}
                            className="p-10 border border-[var(--accent)]/[0.08] bg-[var(--surface)] hover:border-[var(--accent)]/[0.15] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }} />
                            <div className="text-[2.5rem] text-[var(--accent)] opacity-30 font-light mb-6"
                                style={{ fontFamily: 'var(--serif)' }}>
                                {f.num}
                            </div>
                            <h3 className="text-[1.4rem] font-normal mb-3 text-[var(--text-primary)]"
                                style={{ fontFamily: 'var(--serif)' }}>
                                {f.title}
                            </h3>
                            <p className="text-sm text-[var(--text-muted)] leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="py-12 px-6 text-center border-t border-[var(--accent)]/[0.08]">
                <div className="text-[1.1rem] font-light tracking-[0.15em] text-[var(--text-muted)] mb-4"
                    style={{ fontFamily: 'var(--serif)' }}>
                    FRONT DESK DIRECT
                </div>
                <p className="text-[0.7rem] text-[var(--text-muted)]/50 tracking-wider">
                    &copy; 2026 Chill N Go International LLC — All rights reserved.
                </p>
            </footer>
        </div>
    )
}

export default Home