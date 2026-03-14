import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const contactDetails = [
    { icon: '📧', label: 'Email', value: 'support@booksmart.pk', href: 'mailto:support@booksmart.pk' },
    { icon: '📞', label: 'Phone', value: '+92 311 0000000', href: 'tel:+923110000000' },
    { icon: '📍', label: 'Address', value: 'Lahore, Punjab, Pakistan', href: null },
    { icon: '🕐', label: 'Support Hours', value: 'Mon – Sat, 9 AM – 9 PM PKT', href: null },
];

const faqs = [
    {
        q: 'How do I make a booking on BookSmart?',
        a: 'Search for your destination, pick your dates, select a property, and complete the secure checkout in minutes.',
    },
    {
        q: 'What payment methods are accepted?',
        a: 'We accept all major credit/debit cards via Stripe and local Pakistani mobile wallet payments via JazzCash.',
    },
    {
        q: 'How do I list my property?',
        a: 'Click "Become a Host", create your host account, add your property details and photos, then awaiting our 24–48 hour approval.',
    },
    {
        q: 'How are listings verified?',
        a: 'Every property goes through a manual review by the BookSmart team before it appears on the platform.',
    },
];

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sending, setSending] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async e => {
        e.preventDefault();
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            toast.error('Please fill in all required fields.');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            toast.error('Please enter a valid email address.');
            return;
        }
        setSending(true);
        // Simulate submission (replace with real API call if backend endpoint exists)
        await new Promise(r => setTimeout(r, 1000));
        setSending(false);
        toast.success("Message sent! We'll get back to you shortly.");
        setForm({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="bg-white">
            {/* Hero */}
            <div
                style={{
                    background: 'linear-gradient(135deg, #0c2569 0%, #1e5bb8 50%, #4a90e2 100%)',
                    padding: '80px 20px',
                    textAlign: 'center',
                    color: '#fff',
                }}
            >
                <div className="container">
                    <p className="fw-semibold text-uppercase mb-2" style={{ letterSpacing: '3px', opacity: 0.75, fontSize: '0.85rem' }}>
                        Get in Touch
                    </p>
                    <h1 className="fw-bold mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
                        We'd Love to Hear from You
                    </h1>
                    <p className="mx-auto" style={{ maxWidth: '560px', opacity: 0.9, fontSize: '1.05rem', lineHeight: '1.8' }}>
                        Have a question about your booking, a property you'd like to list, or just want to say hello?
                        Our team is here to help.
                    </p>
                </div>
            </div>

            {/* Contact Cards */}
            <div className="container py-5">
                <div className="row g-4 mb-5">
                    {contactDetails.map(({ icon, label, value, href }) => (
                        <div key={label} className="col-12 col-sm-6 col-lg-3">
                            <div className="card h-100 border-0 shadow-sm text-center p-4" style={{ borderRadius: '16px' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{icon}</div>
                                <p className="fw-semibold mb-1" style={{ color: '#0c2569', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</p>
                                {href ? (
                                    <a href={href} className="text-decoration-none fw-semibold" style={{ color: '#1e5bb8', fontSize: '0.95rem' }}>{value}</a>
                                ) : (
                                    <p className="mb-0 fw-semibold" style={{ color: '#374151', fontSize: '0.95rem' }}>{value}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Form + FAQ */}
                <div className="row g-5">
                    {/* Contact Form */}
                    <div className="col-12 col-lg-7">
                        <div className="card border-0 shadow-sm p-4 p-md-5" style={{ borderRadius: '20px' }}>
                            <h3 className="fw-bold mb-1" style={{ color: '#0c2569' }}>Send Us a Message</h3>
                            <p className="text-muted mb-4" style={{ fontSize: '0.95rem' }}>We respond within approximately 30 seconds during support hours.</p>
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="row g-3 mb-3">
                                    <div className="col-12 col-sm-6">
                                        <label className="form-label fw-semibold" style={{ fontSize: '13px', color: '#374151' }}>Full Name <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control bg-light border-0"
                                            placeholder="Your name"
                                            value={form.name}
                                            onChange={handleChange}
                                            maxLength={100}
                                            style={{ borderRadius: '8px', padding: '12px 16px' }}
                                            required
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <label className="form-label fw-semibold" style={{ fontSize: '13px', color: '#374151' }}>Email Address <span className="text-danger">*</span></label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control bg-light border-0"
                                            placeholder="you@email.com"
                                            value={form.email}
                                            onChange={handleChange}
                                            maxLength={200}
                                            style={{ borderRadius: '8px', padding: '12px 16px' }}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold" style={{ fontSize: '13px', color: '#374151' }}>Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        className="form-control bg-light border-0"
                                        placeholder="What's this about?"
                                        value={form.subject}
                                        onChange={handleChange}
                                        maxLength={200}
                                        style={{ borderRadius: '8px', padding: '12px 16px' }}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label fw-semibold" style={{ fontSize: '13px', color: '#374151' }}>Message <span className="text-danger">*</span></label>
                                    <textarea
                                        name="message"
                                        className="form-control bg-light border-0"
                                        placeholder="Tell us how we can help..."
                                        rows={5}
                                        value={form.message}
                                        onChange={handleChange}
                                        maxLength={2000}
                                        style={{ borderRadius: '8px', padding: '12px 16px', resize: 'vertical' }}
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="btn w-100 fw-semibold py-3"
                                    style={{
                                        background: sending ? '#6c757d' : '#1e5bb8',
                                        color: '#fff',
                                        borderRadius: '10px',
                                        fontSize: '15px',
                                        border: 'none',
                                        transition: 'background 0.2s',
                                    }}
                                    onMouseEnter={e => { if (!sending) e.currentTarget.style.background = '#164a99'; }}
                                    onMouseLeave={e => { if (!sending) e.currentTarget.style.background = '#1e5bb8'; }}
                                >
                                    {sending ? (
                                        <><span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" /> Sending...</>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="col-12 col-lg-5">
                        <h4 className="fw-bold mb-4" style={{ color: '#0c2569' }}>Frequently Asked Questions</h4>
                        <div className="d-flex flex-column gap-3">
                            {faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className="card border-0 shadow-sm"
                                    style={{ borderRadius: '12px', cursor: 'pointer', overflow: 'hidden' }}
                                >
                                    <button
                                        className="btn d-flex justify-content-between align-items-center p-3 w-100 text-start"
                                        style={{ border: 'none', background: 'transparent', fontWeight: '600', color: '#0c2569', fontSize: '0.9rem' }}
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        aria-expanded={openFaq === i}
                                    >
                                        <span>{faq.q}</span>
                                        <span style={{ fontSize: '1.1rem', flexShrink: 0, marginLeft: '8px', color: openFaq === i ? '#FF385C' : '#1e5bb8' }}>
                                            {openFaq === i ? '−' : '+'}
                                        </span>
                                    </button>
                                    {openFaq === i && (
                                        <div className="px-3 pb-3" style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: '1.6' }}>
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="mt-5">
                            <h5 className="fw-bold mb-3" style={{ color: '#0c2569' }}>Follow Us</h5>
                            <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>Stay updated with the latest from BookSmart.</p>
                            <div className="d-flex gap-3">
                                {[
                                    { label: 'Facebook', icon: 'f', color: '#1877f2' },
                                    { label: 'Instagram', icon: '🔘', color: '#e1306c' },
                                    { label: 'TikTok', icon: '♪', color: '#010101' },
                                ].map(({ label, icon, color }) => (
                                    <div
                                        key={label}
                                        className="d-flex align-items-center justify-content-center rounded-circle fw-bold text-white"
                                        title={label}
                                        style={{ width: '44px', height: '44px', background: color, fontSize: '1rem', cursor: 'pointer' }}
                                    >
                                        {icon}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom CTA */}
            <div
                className="text-center py-5 px-4"
                style={{ background: '#f8f9ff', borderTop: '1px solid #e8eeff' }}
            >
                <p className="text-muted mb-2">Looking to learn more about BookSmart?</p>
                <Link to="/about" className="fw-semibold text-decoration-none" style={{ color: '#1e5bb8' }}>
                    Read our full story →
                </Link>
            </div>
        </div>
    );
};

export default Contact;
