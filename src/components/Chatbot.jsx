import { useEffect, useRef, useState } from 'react'
import { getBotResponse, suggestedQuestions } from '../utils/chatbotEngine'
import '../styles/Chatbot.css'

const GREETING = "Hi! I'm Vidhi's portfolio assistant. Ask me anything about her skills, experience, projects, education, or how to get in touch — or tap a suggestion below."

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: 'bot', text: GREETING }])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const listRef = useRef(null)

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const sendMessage = (text) => {
    const trimmed = text.trim()
    if (!trimmed) return

    setMessages(prev => [...prev, { role: 'user', text: trimmed }])
    setInput('')
    setIsTyping(true)

    const delay = 400 + Math.min(trimmed.length * 15, 600)
    setTimeout(() => {
      const reply = getBotResponse(trimmed)
      setMessages(prev => [...prev, { role: 'bot', text: reply }])
      setIsTyping(false)
    }, delay)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <div className="chatbot-root">
      {isOpen && (
        <div className="chatbot-panel" role="dialog" aria-label="Chat about Vidhi">
          <div className="chatbot-header">
            <div>
              <p className="chatbot-title">Ask about Vidhi</p>
              <p className="chatbot-subtitle">Usually replies instantly</p>
            </div>
            <button className="chatbot-close" onClick={() => setIsOpen(false)} aria-label="Close chat">
              ×
            </button>
          </div>

          <div className="chatbot-messages" ref={listRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`chatbot-bubble-row ${msg.role}`}>
                <div className="chatbot-bubble">
                  {msg.text.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < msg.text.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="chatbot-bubble-row bot">
                <div className="chatbot-bubble chatbot-typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
          </div>

          {messages.length <= 1 && (
            <div className="chatbot-suggestions">
              {suggestedQuestions.map(q => (
                <button key={q} className="chatbot-chip" onClick={() => sendMessage(q)}>
                  {q}
                </button>
              ))}
            </div>
          )}

          <form className="chatbot-input-row" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question..."
              aria-label="Type a question"
            />
            <button type="submit" aria-label="Send message">➤</button>
          </form>
        </div>
      )}

      <button
        className="chatbot-fab"
        onClick={() => setIsOpen(prev => !prev)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? '×' : '💬'}
      </button>
    </div>
  )
}
