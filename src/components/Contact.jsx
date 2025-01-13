import React from 'react'

function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="text-lg mb-2">
        Email:{' '}
        <a 
          href="mailto:example@gmail.com" 
          className="underline"
        >
          example@gmail.com
        </a>
      </p>
      <p className="text-lg mb-2">
        GitHub:{' '}
        <a 
          href="https://github.com/username" 
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/username
        </a>
      </p>
      <p className="text-lg mb-2">
        LinkedIn:{' '}
        <a 
          href="https://linkedin.com/in/username" 
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/username
        </a>
      </p>
    </section>
  )
}

export default Contact
