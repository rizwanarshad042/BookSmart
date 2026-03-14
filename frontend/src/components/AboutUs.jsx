import { Link } from 'react-router-dom';
import './AboutUs.css';

const team = [
    {
        name: 'Hamza Azam',
        role: 'CEO & Founder',
        responsibilities: 'Company strategy, investor relations, partnerships, legal compliance',
        initials: 'HA',
        color: '#1e5bb8',
    },
    {
        name: 'Hayyan Haider',
        role: 'CTO & Technical Lead',
        responsibilities: 'Tech architecture, development oversight, deployment pipeline, engineering hiring',
        initials: 'HH',
        color: '#0c2569',
    },
    {
        name: 'Rizwan Arshad',
        role: 'COO & Operations Manager',
        responsibilities: 'Day-to-day operations, host onboarding, customer support, quality control',
        initials: 'RA',
        color: '#FF385C',
    },
    {
        name: 'Usman Javed',
        role: 'CFO, Marketing & Finance',
        responsibilities: 'Budgeting, financial planning, marketing campaigns, brand strategy, growth',
        initials: 'UJ',
        color: '#2ecc71',
    },
];

const values = [
    { icon: '🤝', title: 'Trust First', desc: 'Every listing is verified by our team. We never compromise on legitimacy.' },
    { icon: '🌍', title: 'Built for Pakistan', desc: 'We speak the language, understand the culture, and know the market.' },
    { icon: '💡', title: 'Innovation', desc: 'We blend the best global technology — React, Node.js, AI — to serve local needs.' },
    { icon: '💚', title: 'Community', desc: 'We empower hosts to earn and guests to travel more — growing together.' },
];

const AboutUs = () => {
    return (
        <div className="bg-white">
            {/* Hero */}
            <div className="au-hero">
                <div className="container">
                    <p className="fw-semibold text-uppercase mb-2" style={{ letterSpacing: '3px', opacity: 0.75, fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>
                        Who We Are
                    </p>
                    <h1 className="fw-bold mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
                        Redefining Travel in Pakistan
                    </h1>
                    <p className="mx-auto" style={{ maxWidth: '680px', opacity: 0.9, fontSize: '1.1rem', lineHeight: '1.8' }}>
                        BookSmart is Pakistan's premier hotel and short-term rental booking platform — connecting
                        travellers with verified, quality-checked properties from Lahore to Hunza and beyond.
                    </p>
                </div>
            </div>

            {/* Story */}
            <div className="container py-5">
                <div className="row align-items-center g-5">
                    <div className="col-12 col-md-6 text-center text-md-start">
                        <p className="au-section-label mb-2">
                            Our Story
                        </p>
                        <h2 className="fw-bold mb-4" style={{ color: '#0c2569', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                            Born Out of Frustration, Built with Purpose
                        </h2>
                        <p className="text-muted mb-3 mx-auto mx-md-0" style={{ lineHeight: '1.8', maxWidth: '640px' }}>
                            We were travellers ourselves — tired of unreliable listings, hidden charges, and booking
                            platforms that weren't built for the Pakistani market. So we decided to build one.
                        </p>
                        <p className="text-muted mb-3 mx-auto mx-md-0" style={{ lineHeight: '1.8', maxWidth: '640px' }}>
                            BookSmart launched in Lahore with a simple promise: verified listings, transparent pricing,
                            and seamless payments via both Stripe and JazzCash. No surprises.
                        </p>
                        <p className="text-muted mx-auto mx-md-0" style={{ lineHeight: '1.8', maxWidth: '640px' }}>
                            Today, we're growing across Pakistan — with plans to reach Karachi, Islamabad, Murree, Naran,
                            and Hunza. Our long-term vision is to become the go-to travel platform for all of South Asia.
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row g-3">
                            {[
                                { number: '100+', label: 'Verified Listings' },
                                { number: '4', label: 'Co-Founders' },
                                { number: '~30s', label: 'Support Response' },
                                { number: '1', label: 'Mission' },
                            ].map(({ number, label }) => (
                                <div key={label} className="col-6">
                                    <div className="au-stat-box">
                                        <div className="fw-bold mb-1" style={{ fontSize: '2.5rem', color: '#1e5bb8' }}>{number}</div>
                                        <div className="text-muted" style={{ fontSize: '0.9rem' }}>{label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission & Vision */}
            <div style={{ background: '#f8f9ff', padding: '60px 20px' }}>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-12 col-md-6">
                            <div className="p-4 rounded-4 h-100" style={{ background: '#fff', border: '1px solid #e8eeff' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🎯</div>
                                <h4 className="fw-bold mb-3" style={{ color: '#0c2569' }}>Our Mission</h4>
                                <p className="text-muted mb-0" style={{ lineHeight: '1.8' }}>
                                    To make property booking in Pakistan simple, safe, and trustworthy — for both guests
                                    seeking quality stays and hosts looking to earn from their properties.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="p-4 rounded-4 h-100" style={{ background: '#fff', border: '1px solid #e8eeff' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🚀</div>
                                <h4 className="fw-bold mb-3" style={{ color: '#0c2569' }}>Our Vision</h4>
                                <p className="text-muted mb-0" style={{ lineHeight: '1.8' }}>
                                    To become South Asia's most trusted travel platform — with dynamic pricing, AI-powered
                                    recommendations, and a mobile app serving millions of travellers from Lahore to Colombo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values */}
            <div className="container py-5">
                <div className="text-center mb-5">
                    <p className="fw-semibold text-uppercase mb-2" style={{ color: '#FF385C', letterSpacing: '2px', fontSize: '0.8rem' }}>
                        What Drives Us
                    </p>
                    <h2 className="fw-bold" style={{ color: '#0c2569' }}>Our Core Values</h2>
                </div>
                <div className="row g-4">
                    {values.map(({ icon, title, desc }) => (
                        <div key={title} className="col-12 col-sm-6 col-lg-3">
                            <div className="au-value-card text-center">
                                <div style={{ fontSize: '2.2rem', marginBottom: '10px' }}>{icon}</div>
                                <h5 className="fw-bold mb-2" style={{ color: '#0c2569' }}>{title}</h5>
                                <p className="text-muted mb-0" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team */}
            <div style={{ background: '#f8f9ff', padding: '60px 20px' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <p className="fw-semibold text-uppercase mb-2" style={{ color: '#FF385C', letterSpacing: '2px', fontSize: '0.8rem' }}>
                            The Founding Team
                        </p>
                        <h2 className="fw-bold mb-3" style={{ color: '#0c2569' }}>Meet the People Behind BookSmart</h2>
                        <p className="text-muted mx-auto" style={{ maxWidth: '560px' }}>
                            Four co-founders, each leading a critical department, united by one goal — to transform how
                            Pakistan travels.
                        </p>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {team.map(({ name, role, responsibilities, initials, color }) => (
                            <div key={name} className="col-12 col-sm-6 col-lg-3">
                                <div className="au-team-card">
                                    <div
                                        className="au-avatar"
                                        style={{ background: color }}
                                    >
                                        {initials}
                                    </div>
                                    <h5 className="fw-bold mb-1" style={{ color: '#0c2569' }}>{name}</h5>
                                    <p className="fw-semibold mb-2" style={{ color, fontSize: '0.85rem' }}>{role}</p>
                                    <p className="text-muted mb-0" style={{ fontSize: '0.82rem', lineHeight: '1.6' }}>{responsibilities}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div
                className="text-center py-5 px-4"
                style={{ background: 'linear-gradient(135deg, #1e5bb8 0%, #4a90e2 100%)' }}
            >
                <h3 className="fw-bold text-white mb-3">Be part of the journey</h3>
                <p className="text-white mb-4" style={{ opacity: 0.9 }}>
                    Whether you're a traveller looking for your next stay or a host ready to earn — BookSmart is
                    the platform for you.
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Link to="/browse-hotels" className="btn btn-light fw-semibold px-4 py-2" style={{ borderRadius: '22px', color: '#1e5bb8' }}>
                        Browse Hotels
                    </Link>
                    <Link to="/contact" className="btn btn-outline-light fw-semibold px-4 py-2" style={{ borderRadius: '22px' }}>
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
