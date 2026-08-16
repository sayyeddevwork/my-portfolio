import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Check, Copy, Send, ArrowUpRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { maskPhone } from '../utils/privacy';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const ACCESS_KEY: string = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined) ?? '';

const NAME_MAX = 100;
const EMAIL_MAX = 200;
const MESSAGE_MAX = 2000;

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', website: '' });
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const toastTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (toastTimer.current !== null) window.clearTimeout(toastTimer.current);
    };
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    if (toastTimer.current !== null) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToastMessage(null), 2200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    showToast('Email copied to clipboard');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    showToast('Phone number copied to clipboard');
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    // Trim-based guard in addition to HTML `required` (which accepts whitespace-only).
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio Contact: ${formData.name.trim()}`,
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          // Native Web3Forms honeypot — filled by bots, silently discarded.
          botcheck: formData.website,
        }),
      });
      const body = (await res.json()) as { success?: boolean };
      if (!res.ok || !body.success) throw new Error('Web3Forms rejected the submission');
      // Only clear on success so the visitor can retry without retyping.
      setFormData({ name: '', email: '', message: '', website: '' });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 text-slate-100 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/60 text-xs font-mono text-blue-400 uppercase tracking-widest">
            Let's Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {PERSONAL_INFO.availability}
          </h2>
          <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
            Interested in discussing full-stack microservices architecture, enterprise identity systems, or technical team leadership? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6 shadow-md">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400">
                Direct Contact Channels
              </h3>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-950 border border-emerald-800/80">
                    <Mail className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Email Address</div>
                    <div className="text-xs sm:text-sm font-medium text-slate-200">{PERSONAL_INFO.email}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  id="contact-copy-email-btn"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-950 border border-blue-800/80">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Phone / WhatsApp</div>
                    <div className="text-xs sm:text-sm font-medium text-slate-200" title="Masked for privacy — copy button provides the full number">
                      {maskPhone(PERSONAL_INFO.phone)}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  id="contact-copy-phone-btn"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy full phone number"
                  aria-label="Copy full phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="p-2 rounded-lg bg-purple-950 border border-purple-800/80">
                  <MapPin className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Primary Location</div>
                  <div className="text-xs sm:text-sm font-medium text-slate-200">{PERSONAL_INFO.location}</div>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-linkedin-btn"
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/80 flex items-center justify-between text-xs font-semibold text-slate-200 hover:text-blue-400 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-blue-500" /> Connect on LinkedIn
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-github-btn"
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 flex items-center justify-between text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-slate-300" /> Review GitHub Repositories
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400">
              Send Direct Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot — hidden from humans, silently discarded by Web3Forms */}
              <input
                type="text"
                name="botcheck"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-mono text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    maxLength={NAME_MAX}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-mono text-slate-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    maxLength={EMAIL_MAX}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-mono text-slate-300">
                  Message / Role Overview
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  maxLength={MESSAGE_MAX}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your opportunity or technical requirements..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                disabled={status === 'submitting'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-all shadow-md shadow-blue-600/20 active:scale-95 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
              </button>

              {status === 'success' && (
                <p role="status" className="flex items-start gap-2 text-[11px] font-mono text-emerald-400 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>Message sent successfully. I'll get back to you soon.</span>
                </p>
              )}
              {status === 'error' && (
                <p role="status" className="flex items-start gap-2 text-[11px] font-mono text-rose-400 leading-relaxed">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>Unable to send your message right now. Please try again or use the direct email option below.</span>
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Copy feedback toast */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-emerald-700/60 shadow-lg shadow-black/20 animate-fadeIn"
        >
          <Check className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono text-emerald-300">{toastMessage}</span>
        </div>
      )}
    </section>
  );
};
