export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const email = 'vidhii.vats@gmail.com'
    const mailto = `mailto:${email}?subject=${encodeURIComponent(formData.get('subject'))}&body=${encodeURIComponent(formData.get('message'))}`
    window.location.href = mailto
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Let's Connect</h2>
        <p>Interested in collaborating? Feel free to reach out!</p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Details</h3>
            <div className="info-item">
              <strong>Email:</strong>
              <a href="mailto:vidhii.vats@gmail.com">vidhii.vats@gmail.com</a>
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
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
