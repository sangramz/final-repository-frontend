import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import './investorAuth.css';
import logo from '../InvestorDashboard/assets/logo.png';

const heroStats = [
    { label: 'Live mandates', value: '128', note: '+12 this week' },
    { label: 'Avg. cheque', value: '$450k', note: 'Ticket range 100k–1m' },
    { label: 'Verified startups', value: '2,930', note: 'register(12) ready' },
];

const footnotes = [
    'AAOIFI-aligned review desk',
    'Analyst feedback within 24h',
    'Single vault for KYC, NDA, DDQ',
];

export default function InvestorLogin() {
    const [formData, setFormData] = useState({ email: '', password: '', remember: true });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('Investor console · register-start handoff');
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const validate = () => {
        const nextErrors = {};
        if (!formData.email.trim()) {
            nextErrors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            nextErrors.email = 'Enter a valid email.';
        }

        if (!formData.password) {
            nextErrors.password = 'Password is required.';
        } else if (formData.password.length < 8) {
            nextErrors.password = 'Minimum 8 characters.';
        }

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validate()) return;

        setSubmitting(true);
        setStatus('Authenticating · syncing investor workspace…');

        setTimeout(() => {
            setSubmitting(false);
            setStatus('Authenticated · redirecting to dashboard');
            navigate('/investor/dashboard');
        }, 900);
    };

    return (
        <div className="investor-auth">
            <div className="investor-login">
                <section className="login-hero-panel">
                    <div className="logo-row">
                        <img src={logo} alt="EmireQ" height={40} />
                        <p>register-start preview</p>
                    </div>
                    <span className="status-chip">
                        <Sparkles size={16} /> register(12) pathway
                    </span>
                    <h1>Investor onboarding built exactly like the handoff screens</h1>
                    <p className="lead">
                        Review the same cards your team shared: register-start through register(4). Every state you saw in the design system is represented 1:1 here.
                    </p>

                    <div className="hero-metrics">
                        {heroStats.map((stat) => (
                            <div className="hero-metric" key={stat.label}>
                                <span>{stat.label}</span>
                                <strong>{stat.value}</strong>
                                <small>{stat.note}</small>
                            </div>
                        ))}
                    </div>

                    <div className="hero-footnote">
                        <ShieldCheck size={18} />
                        <span>Compliance-first workflow · AAOIFI + SOC2 ready</span>
                    </div>
                </section>

                <section className="login-card-panel">
                    <p className="status-chip">{status}</p>
                    <h2>Sign in to EmireQ</h2>
                    <p className="subhead">Use your investor email to continue the onboarding journey.</p>

                    <form className="auth-form" onSubmit={handleSubmit}>
                        <label className="input-label">
                            <span>Email address</span>
                            <input
                                type="email"
                                placeholder="fatima@crescentcapital.com"
                                value={formData.email}
                                onChange={(event) => handleChange('email', event.target.value)}
                                className={errors.email ? 'has-error' : ''}
                                autoComplete="email"
                            />
                            {errors.email && <small className="error-text">{errors.email}</small>}
                        </label>

                        <label className="input-label">
                            <span>Password</span>
                            <input
                                type="password"
                                placeholder="Minimum 8 characters"
                                value={formData.password}
                                onChange={(event) => handleChange('password', event.target.value)}
                                className={errors.password ? 'has-error' : ''}
                                autoComplete="current-password"
                            />
                            {errors.password && <small className="error-text">{errors.password}</small>}
                        </label>

                        <div className="form-row">
                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    checked={formData.remember}
                                    onChange={(event) => handleChange('remember', event.target.checked)}
                                />
                                <span>Remember device</span>
                            </label>
                            <button className="btn-link" type="button">
                                Forgot password?
                            </button>
                        </div>

                        <button className="btn-primary" type="submit" disabled={submitting}>
                            Access dashboard <ArrowRight size={16} />
                        </button>
                    </form>

                    <div className="divider">
                        <span></span>
                        <p>Need an investor seat?</p>
                        <span></span>
                    </div>

                    <button className="btn-ghost" type="button" onClick={() => navigate('/investor/register')}>
                        Start registration exactly like the design <ArrowRight size={16} />
                    </button>

                    <div className="login-footnotes">
                        {footnotes.map((note) => (
                            <p key={note}>
                                <CheckCircle2 size={14} /> {note}
                            </p>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
