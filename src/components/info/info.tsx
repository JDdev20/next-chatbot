export default function Info() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto my-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Chatbot with GPT-3-turbo
      </h2>
      <p className="text-gray-600">
        This chatbot was developed using the powerful OpenAI API and the
        GPT-3-turbo model. Thanks to these technologies, the chatbot is capable
        of understanding and responding to a wide range of queries in an
        intelligent manner.
      </p>
      <a
        href="https://github.com/JDdev20/next-chatbot"
        target="_blank"
        className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
      >
        Git repository
      </a>
    </section>
  );
}
