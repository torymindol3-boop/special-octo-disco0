"use client"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-black px-6 md:px-20 py-20">
      <h1 className="text-4xl font-light mb-12">Contact</h1>
      <form className="max-w-xl space-y-6">
        <input
          className="w-full border border-gray-400 focus:outline-none py-2 px-4"
          placeholder="Your Name"
        />
        <input
          className="w-full border border-gray-400 focus:outline-none py-2 px-4"
          placeholder="Your Email"
        />
        <textarea
          className="w-full border border-gray-400 focus:outline-none py-2 px-4"
          placeholder="Message"
        />
        <button
          type="submit"
          className="px-6 py-2 border rounded-full bg-black text-white hover:bg-gray-800"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

