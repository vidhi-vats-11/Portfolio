import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Reveal from './Reveal'
import SectionBackground from './SectionBackground'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const CONTACT_EMAIL = 'vidhii.vats@gmail.com'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error')
      return
    }

    const form = e.target
    setStatus('sending')

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY })
      setStatus('sent')
      form.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact">
      <SectionBackground variant="signal" />
      <div className="container">
        <Reveal as="h2">Let's Connect</Reveal>
        <Reveal as="p" delay={80} className="contact-lead">Interested in collaborating? Feel free to reach out!</Reveal>

        <div className="contact-content">
          <Reveal className="contact-info" delay={120}>
            <h3>Contact Details</h3>
            <div className="info-item">
              <strong>Email:</strong>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
            <div className="info-item">
              <strong>Phone:</strong>
              <a href="tel:+919906843553">+91 9906843553</a>
            </div>
            <div className="info-item">
              <strong>Location:</strong>
              <p>Meerut, Uttar Pradesh, India</p>
            </div>
            <div className="social-links">
              <a href="https://github.com/vidhi-vats-11" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="https://linkedin.com/in/vidhivats-" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <form onSubmit={handleSubmit} className="contact-form">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <input type="text" name="subject" placeholder="Subject" required />
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="btn btn-primary btn-shine" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'sent' && (
                <p className="form-status form-status-success">Message sent! I'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="form-status form-status-error">
                  Couldn't send that. Please email me directly at{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
