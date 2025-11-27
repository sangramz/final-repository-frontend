import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, DownloadCloud, UploadCloud } from 'lucide-react';
import './investorAuth.css';
import logo from '../InvestorDashboard/assets/logo.png';

const steps = [
    {
        key: 'register-start',
        label: 'register-start',
        title: 'This is the exact cover card you approved',
        subtitle:
            'Review the context, trackers, and analyst notes before entering details. The following screens mirror register(12) → register(4).',
        type: 'intro',
        bullets: [
            'Investor entity + principals',
            'Mandate, thesis, ticket sizing',
            'Compliance preferences & KYC',
            'Document locker + confirmation',
        ],
        timeline: [
            { title: 'register(1)', caption: 'Identity & access' },
            { title: 'register(2)', caption: 'Mandate & thesis' },
            { title: 'register(3)', caption: 'Compliance preferences' },
            { title: 'register(4)', caption: 'Docs & summary' },
        ],
    },
    {
        key: 'register-1',
        label: 'register(1)',
        title: 'Identity & access layer',
        subtitle: 'Exactly matches the register(1) layout: entity metadata and signatory details.',
        type: 'form',
        required: ['fullName', 'email', 'firmName', 'domicileCountry', 'regId'],
        fields: [
            { name: 'fullName', label: 'Full legal name', placeholder: 'Fatima Ali Khan', span: 'half' },
            { name: 'email', label: 'Work email', type: 'email', placeholder: 'fatima@crescentcapital.com', span: 'half' },
            { name: 'firmName', label: 'Fund / family office', placeholder: 'Crescent Capital Partners', span: 'half' },
            {
                name: 'domicileCountry',
                label: 'Domicile country',
                type: 'select',
                options: ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Bahrain', 'United Kingdom', 'Malaysia'],
                span: 'half',
            },
            { name: 'regId', label: 'Regulatory ID / license', placeholder: 'DFSA-INV-2049', span: 'half' },
            {
                name: 'capitalSource',
                label: 'Primary capital source',
                type: 'select',
                options: ['Single family office', 'Multi family office', 'VC fund', 'Corporate venture', 'Angel syndicate'],
                span: 'half',
            },
            { name: 'website', label: 'Portfolio / website', placeholder: 'https://crescent.capital', span: 'half' },
            { name: 'linkedin', label: 'LinkedIn (optional)', placeholder: 'https://linkedin.com/in/fatima', span: 'half' },
        ],
    },
    {
        key: 'register-2',
        label: 'register(2)',
        title: 'Mandate & thesis',
        subtitle: 'Sector focus, preferred stage, and cheque strategy as shown in register(2).',
        type: 'form',
        required: ['targetSectors', 'ticketMin', 'ticketMax', 'regionFocus'],
        fields: [
            {
                name: 'targetSectors',
                label: 'Focus sectors',
                type: 'chips',
                options: ['Islamic fintech', 'Climate', 'Halal FMCG', 'Proptech', 'Digital health', 'Deeptech'],
                span: 'full',
            },
            {
                name: 'targetStage',
                label: 'Preferred stage',
                type: 'chips',
                options: ['Pre-seed', 'Seed', 'Series A', 'Series B', 'Growth'],
                span: 'full',
            },
            { name: 'ticketMin', label: 'Minimum cheque (USD)', placeholder: '100,000', span: 'half' },
            { name: 'ticketMax', label: 'Maximum cheque (USD)', placeholder: '1,000,000', span: 'half' },
            {
                name: 'regionFocus',
                label: 'Region focus',
                type: 'select',
                options: ['MENAPT', 'Global', 'SEA', 'Europe', 'Africa'],
                span: 'half',
            },
            {
                name: 'coInvestmentPreference',
                label: 'Co-investments',
                type: 'select',
                options: ['Lead required', 'Open to follow-on', 'Follow-only', 'Case by case'],
                span: 'half',
            },
            {
                name: 'impactNarrative',
                label: 'Impact narrative',
                type: 'textarea',
                placeholder: 'Explain how you balance Shariah compliance with returns.',
                span: 'full',
            },
            {
                name: 'dueDiligenceRhythm',
                label: 'Due diligence cadence',
                type: 'textarea',
                placeholder: 'e.g. 2-week sprint, IC every Wednesday, closing in 30 days.',
                span: 'full',
            },
        ],
    },
    {
        key: 'register-3',
        label: 'register(3)',
        title: 'Compliance preferences',
        subtitle: 'Same toggles and chips as register(3): screening comfort, jurisdictions, attestations.',
        type: 'form',
        required: ['kycStatus', 'preferredJurisdictions', 'screeningPreferences', 'complianceAttestation'],
        fields: [
            {
                name: 'kycStatus',
                label: 'KYC readiness',
                type: 'select',
                options: ['Pre-cleared (last 6 months)', 'Renewal in progress', 'Requires new verification'],
                span: 'half',
            },
            {
                name: 'preferredJurisdictions',
                label: 'Allowed jurisdictions',
                type: 'chips',
                options: ['UAE', 'KSA', 'Qatar', 'Bahrain', 'Malaysia', 'UK/EU'],
                span: 'full',
            },
            {
                name: 'screeningPreferences',
                label: 'Screening requirements',
                type: 'chips',
                options: ['AAOIFI board review', 'Enhanced ESG audit', 'Onsite founder visit', 'Background checks'],
                span: 'full',
            },
            { name: 'shariahBoard', label: 'Shariah board (optional)', span: 'half' },
            {
                name: 'complianceAttestation',
                label: 'I certify information is accurate and agree to EmireQ terms.',
                type: 'checkbox',
                span: 'full',
            },
        ],
    },
    {
        key: 'register-4',
        label: 'register(4)',
        title: 'Documents & confirmation',
        subtitle: 'Upload the files referenced in register(4). They remain encrypted at rest.',
        type: 'form',
        required: ['identityDocument', 'proofOfFunds'],
        fields: [
            {
                name: 'identityDocument',
                label: 'Identity document pack',
                type: 'file',
                helper: 'PDF/ZIP · max 25 MB',
                span: 'full',
            },
            {
                name: 'proofOfFunds',
                label: 'Proof of funds / bank letter',
                type: 'file',
                helper: 'PDF · issued within 90 days',
                span: 'full',
            },
            {
                name: 'ndaPreference',
                label: 'NDA preference',
                type: 'select',
                options: ['Use EmireQ NDA', 'Upload my NDA', 'Case by case'],
                span: 'half',
            },
        ],
    },
];

const initialFormState = {
    fullName: '',
    email: '',
    firmName: '',
    domicileCountry: '',
    regId: '',
    capitalSource: '',
    website: '',
    linkedin: '',
    targetSectors: [],
    targetStage: [],
    ticketMin: '',
    ticketMax: '',
    regionFocus: '',
    coInvestmentPreference: '',
    impactNarrative: '',
    dueDiligenceRhythm: '',
    kycStatus: '',
    preferredJurisdictions: [],
    screeningPreferences: [],
    shariahBoard: '',
    complianceAttestation: false,
    identityDocument: [],
    proofOfFunds: [],
    ndaPreference: '',
};

export default function InvestorRegisterFlow() {
    const navigate = useNavigate();
    const [stepIndex, setStepIndex] = useState(0);
    const [formData, setFormData] = useState(initialFormState);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const currentStep = steps[stepIndex];
    const isIntro = currentStep.type === 'intro';
    const isLastStep = stepIndex === steps.length - 1;

    const progressPercent = Math.round((stepIndex / (steps.length - 1)) * 100);

    const filledScore = useMemo(() => {
        const total = Object.keys(initialFormState).length;
        let count = 0;
        Object.values(formData).forEach((value) => {
            if (Array.isArray(value) && value.length) count += 1;
            else if (typeof value === 'boolean' && value) count += 1;
            else if (value) count += 1;
        });
        return Math.min(100, Math.round((count / total) * 100));
    }, [formData]);

    const handleFieldChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const toggleChipValue = (name, option) => {
        setFormData((prev) => {
            const next = new Set(prev[name] || []);
            if (next.has(option)) next.delete(option);
            else next.add(option);
            return { ...prev, [name]: Array.from(next) };
        });
    };

    const handleFileSelect = (name, { files }) => {
        const fileNames = Array.from(files || []).map((file) => file.name);
        handleFieldChange(name, fileNames);
    };

    const validateStep = () => {
        if (currentStep.type !== 'form' || !currentStep.required) return true;
        const nextErrors = {};
        currentStep.required.forEach((field) => {
            const value = formData[field];
            const empty = Array.isArray(value) ? value.length === 0 : typeof value === 'boolean' ? !value : !value;
            if (empty) {
                nextErrors[field] = 'Required field';
            }
        });
        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const goToStep = (index) => {
        if (index > stepIndex) return;
        setStepIndex(index);
        setSubmitted(false);
        setErrors({});
    };

    const handleNext = () => {
        if (!isIntro && !validateStep()) {
            return;
        }

        if (isLastStep) {
            setSubmitted(true);
            return;
        }

        setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
        setErrors({});
    };

    const handleBack = () => {
        if (stepIndex === 0) {
            navigate('/investor/login');
            return;
        }
        setSubmitted(false);
        setStepIndex((prev) => Math.max(prev - 1, 0));
        setErrors({});
    };

    const renderIntro = () => (
        <div className="register-card">
            <h2>{currentStep.title}</h2>
            <p className="subhead">{currentStep.subtitle}</p>

            <div className="form-grid full-row">
                <div className="full-row">
                    <p className="subhead">What you will complete</p>
                    <ul>
                        {currentStep.bullets.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="timeline-list" style={{ marginTop: 24 }}>
                {currentStep.timeline.map((item) => (
                    <div className="timeline-item" key={item.title}>
                        <span></span>
                        <div>
                            <strong>{item.title}</strong>
                            <p style={{ margin: 0, color: 'var(--ink-500)', fontSize: '0.9rem' }}>{item.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderField = (field) => {
        const baseProps = {
            key: field.name,
            className: `input-label ${field.span === 'full' ? 'full-row' : ''}`,
        };

        if (field.type === 'textarea') {
            return (
                <label {...baseProps}>
                    <span>{field.label}</span>
                    <textarea
                        rows={4}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={(event) => handleFieldChange(field.name, event.target.value)}
                        className={errors[field.name] ? 'has-error' : ''}
                    />
                    {errors[field.name] && <small className="error-text">{errors[field.name]}</small>}
                </label>
            );
        }

        if (field.type === 'chips') {
            const selected = formData[field.name] || [];
            return (
                <div key={field.name} className={`full-row`}>
                    <span style={{ fontSize: '0.95rem', color: 'var(--ink-700)' }}>{field.label}</span>
                    {errors[field.name] && <small className="error-text">{errors[field.name]}</small>}
                    <div className="chip-row">
                        {field.options.map((option) => (
                            <button
                                type="button"
                                key={option}
                                className={`chip ${selected.includes(option) ? 'selected' : ''}`}
                                onClick={() => toggleChipValue(field.name, option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            );
        }

        if (field.type === 'checkbox') {
            return (
                <label {...baseProps}>
                    <span className="checkbox">
                        <input
                            type="checkbox"
                            checked={formData[field.name]}
                            onChange={(event) => handleFieldChange(field.name, event.target.checked)}
                        />
                        {field.label}
                    </span>
                    {errors[field.name] && <small className="error-text">{errors[field.name]}</small>}
                </label>
            );
        }

        if (field.type === 'select') {
            return (
                <label {...baseProps}>
                    <span>{field.label}</span>
                    <select
                        value={formData[field.name]}
                        onChange={(event) => handleFieldChange(field.name, event.target.value)}
                        className={errors[field.name] ? 'has-error' : ''}
                    >
                        <option value="">Select</option>
                        {field.options?.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    {errors[field.name] && <small className="error-text">{errors[field.name]}</small>}
                </label>
            );
        }

        if (field.type === 'file') {
            return (
                <label {...baseProps}>
                    <span>{field.label}</span>
                    <div className="file-upload">
                        <UploadCloud size={18} />
                        <p style={{ margin: 8 }}>{field.helper}</p>
                        <input type="file" multiple onChange={(event) => handleFileSelect(field.name, event.target)} />
                    </div>
                    {formData[field.name]?.length > 0 && (
                        <ul className="file-list">
                            {formData[field.name].map((file) => (
                                <li key={file}>{file}</li>
                            ))}
                        </ul>
                    )}
                    {errors[field.name] && <small className="error-text">{errors[field.name]}</small>}
                </label>
            );
        }

        return (
            <label {...baseProps}>
                <span>{field.label}</span>
                <input
                    type={field.type || 'text'}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={(event) => handleFieldChange(field.name, event.target.value)}
                    className={errors[field.name] ? 'has-error' : ''}
                />
                {errors[field.name] && <small className="error-text">{errors[field.name]}</small>}
            </label>
        );
    };

    const renderForm = () => (
        <div className="register-card">
            <h2>{currentStep.title}</h2>
            <p className="subhead">{currentStep.subtitle}</p>
            <div className="form-grid">{currentStep.fields?.map((field) => renderField(field))}</div>

            {submitted && isLastStep && (
                <div className="summary-card" style={{ marginTop: 24 }}>
                    <p className="subhead">Package submitted</p>
                    <p>
                        {formData.fullName || 'Investor'}, your details are locked exactly like register(4). Analysts respond within 24 hours.
                    </p>
                    <button className="btn-ghost" type="button" onClick={() => navigate('/investor/login')}>
                        Return to login <ArrowRight size={16} />
                    </button>
                </div>
            )}
        </div>
    );

    return (
        <div className="investor-auth">
            <div className="register-shell">
                <aside className="register-sidebar">
                    <div className="sidebar-head">
                        <img src={logo} alt="EmireQ" height={36} />
                        <p>Investor onboarding · register-start</p>
                        <p style={{ fontWeight: 600 }}>Quality score {filledScore}%</p>
                    </div>

                    <ul className="timeline-list">
                        {steps.map((step, index) => {
                            const state = index === stepIndex ? 'active' : index < stepIndex ? 'done' : '';
                            return (
                                <li key={step.key} className={`timeline-item ${state}`}>
                                    <span></span>
                                    <button
                                        type="button"
                                        onClick={() => goToStep(index)}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            textAlign: 'left',
                                            padding: 0,
                                            color: 'inherit',
                                            cursor: index <= stepIndex ? 'pointer' : 'not-allowed',
                                        }}
                                    >
                                        <strong>{step.label}</strong>
                                        <p style={{ margin: 0, color: 'var(--ink-500)', fontSize: '0.85rem' }}>{step.title}</p>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </aside>

                <section className="register-main">
                    <div className="register-header">
                        <div>
                            <p style={{ color: 'var(--ink-500)', margin: 0 }}>Matches register-start → register(4)</p>
                            <h1 style={{ margin: 0 }}>{currentStep.label}</h1>
                        </div>
                        <div>
                            <div className="progress-track">
                                <div style={{ width: `${progressPercent}%` }} />
                            </div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--ink-500)', marginTop: 6 }}>{progressPercent}% complete</p>
                        </div>
                    </div>

                    <div className="step-badges">
                        {steps.map((step, index) => (
                            <span key={step.key} className={`step-badge ${index === stepIndex ? 'active' : ''}`}>
                                {step.label}
                            </span>
                        ))}
                    </div>

                    {isIntro ? renderIntro() : renderForm()}

                    <div className="register-footer">
                        <button className="btn-link" type="button" onClick={handleBack}>
                            <ArrowLeft size={16} /> Back
                        </button>
                        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                            <button className="btn-ghost" type="button" onClick={() => navigate('/investor/login')}>
                                Save & exit
                            </button>
                            <button className="btn-primary" type="button" onClick={handleNext}>
                                {isLastStep ? (submitted ? 'Submitted' : 'Submit package') : 'Continue'} <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>

                    {!isIntro && !isLastStep && (
                        <div className="summary-card" style={{ width: '100%' }}>
                            <p className="subhead">What analysts receive next</p>
                            <p>
                                register({stepIndex}) data syncs live with the review board. Download a PDF of your progress anytime.
                            </p>
                            <button className="btn-link" type="button">
                                <DownloadCloud size={16} /> Download progress PDF
                            </button>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}
