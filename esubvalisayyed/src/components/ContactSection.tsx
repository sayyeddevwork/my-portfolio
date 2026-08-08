import { FC, FormEvent, MouseEvent, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  AlertCircle,
  Copy,
  Check,
  MessageCircle,
} from "lucide-react";

// Create an access key at https://web3forms.com with recipient Sayyed.vali@gmail.com
// Set VITE_WEB3FORMS_ACCESS_KEY in .env.local (see .env.example) and in Vercel env vars
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export const ContactSection: FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    firstName?: string;
    email?: string;
    message?: string;
  }>({});

  const [touched, setTouched] = useState<{
    firstName?: boolean;
    email?: boolean;
    message?: boolean;
  }>({});

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    navigator.clipboard.writeText("Sayyed.vali@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
    }, 2500);
  };

  const validateEmail = (emailStr: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(emailStr).toLowerCase());
  };

  const validate = (data = formData) => {
    const newErrors: { firstName?: string; email?: string; message?: string } =
      {};

    if (!data.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!validateEmail(data.email.trim())) {
      newErrors.email =
        "Please enter a valid email address (e.g. name@example.com).";
    }

    if (!data.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (data.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters long.";
    }

    return newErrors;
  };

  const handleBlur = (field: "firstName" | "email" | "message") => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const validationErrors = validate();
    setErrors(validationErrors);
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    const nextFormData = { ...formData, [field]: value };
    setFormData(nextFormData);
    if (touched[field as keyof typeof touched]) {
      const validationErrors = validate(nextFormData);
      setErrors(validationErrors);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ firstName: true, email: true, message: true });
    setSendError(null);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Focus first invalid field
      if (validationErrors.firstName) {
        document.getElementById("contact-first-name")?.focus();
      } else if (validationErrors.email) {
        document.getElementById("contact-email")?.focus();
      } else if (validationErrors.message) {
        document.getElementById("contact-message")?.focus();
      }
      return;
    }

    setLoading(true);
    if (!WEB3FORMS_ACCESS_KEY) {
      setLoading(false);
      setSendError("Contact form is not configured yet.");
      return;
    }
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New portfolio message from ${formData.firstName} ${formData.lastName}`,
          ...formData,
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send message");
      }

      setSubmitted(true);
    } catch {
      setSendError(
        "Something went wrong sending your message. Please try again or email Sayyed directly.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
    });
    setErrors({});
    setTouched({});
    setSubmitted(false);
    setSendError(null);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold text-white tracking-tight mb-2">
            Get in touch
          </h2>
          <p className="text-sm md:text-base text-white/80 font-medium">
            We'd love to hear from you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#216B85] rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-between pr-0 lg:pr-4">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-[#113B4B] border-2 border-emerald-400 flex items-center justify-center text-emerald-400 mb-6 shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-space text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-white/80 max-w-md mb-8">
                    Thank you for reaching out, {formData.firstName}. Sayyed
                    will review your inquiry and get back to you shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="rounded-full bg-[#113B4B] hover:bg-[#0C2A36] text-white font-semibold text-sm px-6 py-2.5 transition-all shadow-md"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-6 md:gap-8 justify-between h-full"
                >
                  <div className="space-y-6 md:space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                      <div>
                        <label htmlFor="contact-first-name" className="sr-only">
                          First Name
                        </label>
                        <input
                          id="contact-first-name"
                          type="text"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleChange("firstName", e.target.value)
                          }
                          onBlur={() => handleBlur("firstName")}
                          placeholder="First name *"
                          aria-invalid={
                            !!(touched.firstName && errors.firstName)
                          }
                          aria-describedby={
                            errors.firstName ? "first-name-error" : undefined
                          }
                          className={`w-full bg-transparent border-b ${
                            touched.firstName && errors.firstName
                              ? "border-rose-300"
                              : "border-white/40"
                          } focus:border-white focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#216B85] focus-visible:outline-none rounded-sm text-white py-2 text-sm md:text-base transition-colors placeholder:text-white/70`}
                        />
                        <AnimatePresence>
                          {touched.firstName && errors.firstName && (
                            <motion.p
                              id="first-name-error"
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                              className="text-rose-200 text-xs mt-1.5 flex items-center gap-1 font-medium"
                            >
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                              {errors.firstName}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      <div>
                        <label htmlFor="contact-last-name" className="sr-only">
                          Last Name
                        </label>
                        <input
                          id="contact-last-name"
                          type="text"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleChange("lastName", e.target.value)
                          }
                          placeholder="Last name"
                          className="w-full bg-transparent border-b border-white/40 focus:border-white focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#216B85] focus-visible:outline-none rounded-sm text-white py-2 text-sm md:text-base transition-colors placeholder:text-white/70"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                      <div>
                        <label htmlFor="contact-email" className="sr-only">
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          onBlur={() => handleBlur("email")}
                          placeholder="Email *"
                          aria-invalid={!!(touched.email && errors.email)}
                          aria-describedby={
                            errors.email ? "email-error" : undefined
                          }
                          className={`w-full bg-transparent border-b ${
                            touched.email && errors.email
                              ? "border-rose-300"
                              : "border-white/40"
                          } focus:border-white focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#216B85] focus-visible:outline-none rounded-sm text-white py-2 text-sm md:text-base transition-colors placeholder:text-white/70`}
                        />
                        <AnimatePresence>
                          {touched.email && errors.email && (
                            <motion.p
                              id="email-error"
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                              className="text-rose-200 text-xs mt-1.5 flex items-center gap-1 font-medium"
                            >
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                              {errors.email}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      <div>
                        <label htmlFor="contact-company" className="sr-only">
                          Company Name
                        </label>
                        <input
                          id="contact-company"
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            handleChange("company", e.target.value)
                          }
                          placeholder="Company Name"
                          className="w-full bg-transparent border-b border-white/40 focus:border-white focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#216B85] focus-visible:outline-none rounded-sm text-white py-2 text-sm md:text-base transition-colors placeholder:text-white/70"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="sr-only">
                        Your Message
                      </label>
                      <textarea
                        id="contact-message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        onBlur={() => handleBlur("message")}
                        placeholder="Message *"
                        aria-invalid={!!(touched.message && errors.message)}
                        aria-describedby={
                          errors.message ? "message-error" : undefined
                        }
                        className={`w-full bg-transparent border-b ${
                          touched.message && errors.message
                            ? "border-rose-300"
                            : "border-white/40"
                        } focus:border-white focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#216B85] focus-visible:outline-none rounded-sm text-white py-2 text-sm md:text-base transition-colors placeholder:text-white/70 resize-none`}
                      />
                      <AnimatePresence>
                        {touched.message && errors.message && (
                          <motion.p
                            id="message-error"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="text-rose-200 text-xs mt-1.5 flex items-center gap-1 font-medium"
                          >
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            {errors.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="pt-2">
                    {sendError && (
                      <p
                        role="alert"
                        className="flex items-start gap-2 text-xs text-rose-200 mb-3"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        {sendError}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={loading}
                      className="rounded-full bg-[#113C4D] hover:bg-[#0D2F3C] text-white font-semibold text-sm px-8 py-3 transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#216B85] focus-visible:outline-none"
                    >
                      {loading ? "Sending..." : "Submit"}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="lg:col-span-5 xl:col-span-5 bg-[#134455] rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 min-h-[320px]">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-6 leading-snug">
                  Hello, We are always here to help you.
                </h3>

                <div className="space-y-5">
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#185368] border border-white/10 flex items-center justify-center text-white shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-white/60 font-mono tracking-wider block uppercase">
                        WHATSAPP
                      </span>
                      <a
                        href="https://wa.me/919966562620"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-white hover:underline"
                      >
                        +91-9966562620
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#185368] border border-white/10 flex items-center justify-center text-white shrink-0">
                      <Send className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-white/60 font-mono tracking-wider block uppercase">
                        TELEGRAM
                      </span>
                      <a
                        href="https://t.me/+919966562620"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-white hover:underline"
                      >
                        @SayyedVali
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#185368] border border-white/10 flex items-center justify-center text-white shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] text-white/60 font-mono tracking-wider block uppercase">
                          EMAIL
                        </span>
                        <AnimatePresence>
                          {copiedEmail && (
                            <motion.span
                              initial={{ opacity: 0, scale: 0.85, x: 5 }}
                              animate={{ opacity: 1, scale: 1, x: 0 }}
                              exit={{ opacity: 0, scale: 0.85 }}
                              className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/30"
                            >
                              <Check className="w-2.5 h-2.5" />
                              Copied!
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="flex items-center gap-2 group mt-0.5">
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          className="text-sm font-semibold text-white hover:text-sky-200 transition-colors break-all text-left flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:underline"
                          title="Click to copy email address"
                        >
                          <span>Sayyed.vali@gmail.com</span>
                          {copiedEmail ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          ) : (
                            <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 text-sky-200 transition-opacity shrink-0" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#185368] border border-white/10 flex items-center justify-center text-white shrink-0">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-white/60 font-mono tracking-wider block uppercase">
                        LINKEDIN
                      </span>
                      <a
                        href="https://www.linkedin.com/in/esub-vali-sayyed-516759100/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-white hover:underline"
                      >
                        esub-vali-sayyed
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#185368] border border-white/10 flex items-center justify-center text-white shrink-0">
                      <Facebook className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-white/60 font-mono tracking-wider block uppercase">
                        FACEBOOK
                      </span>
                      <a
                        href="https://www.facebook.com/vali.syed.7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-white hover:underline"
                      >
                        vali.syed.7
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10">
                <span className="text-[10px] text-white/60 font-mono tracking-wider block uppercase mb-3">
                  CONTACT WITH US
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href="mailto:Sayyed.vali@gmail.com"
                    className="w-8 h-8 rounded-full bg-[#185368] hover:bg-white hover:text-[#134455] text-white border border-white/15 flex items-center justify-center transition-all text-xs focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#134455] focus-visible:outline-none"
                    aria-label="Email Sayyed"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://github.com/sanasham"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#185368] hover:bg-white hover:text-[#134455] text-white border border-white/15 flex items-center justify-center transition-all text-xs focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#134455] focus-visible:outline-none"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/esub-vali-sayyed-516759100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#185368] hover:bg-white hover:text-[#134455] text-white border border-white/15 flex items-center justify-center transition-all text-xs focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#134455] focus-visible:outline-none"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[#185368] hover:bg-white hover:text-[#134455] text-white border border-white/15 flex items-center justify-center transition-all text-xs focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#134455] focus-visible:outline-none"
                    aria-label="Instagram Profile"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
