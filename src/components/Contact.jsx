export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Let's Work Together</h2>
        <p>Have a project in mind? Let's create something amazing together!</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}
