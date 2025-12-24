export default function Home() {
  return (
    <main className="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center">
      <div className="max-w-3xl w-full px-6">
        {/* Header */}
        <header className="mb-10">
          <p className="text-sm text-green-600">$ whoami</p>
          <h1 className="text-4xl md:text-5xl font-bold text-green-400 mt-2">
            Hongbo Wei
          </h1>
          <p className="mt-4 text-green-500">
            CTO · AI · Blockchain · Web3
          </p>
        </header>

        {/* Body */}
        <section className="space-y-4 text-green-400">
          <p>
            <span className="text-green-600">$</span> Entrepreneur
          </p>
          <p>
            <span className="text-green-600">$</span> building production-grade AI systems
          </p>
          <p>
            <span className="text-green-600">$</span> shipping LLMs, CV pipelines, NLP, and data infra
          </p>
          <p>
            <span className="text-green-600">$</span> ex-OpenVINO contributor · arXiv author
          </p>
        </section>

        {/* Divider */}
        <div className="my-8 border-t border-green-900" />

        {/* Links */}
        <section className="flex flex-wrap gap-6 text-sm">
          <a
            href="https://github.com/hongbo-wei"
            className="hover:text-green-300 transition"
            target="_blank"
          >
            [ GitHub ]
          </a>
          <a
            href="https://linkedin.com/in/hongbo-wei"
            className="hover:text-green-300 transition"
            target="_blank"
          >
            [ LinkedIn ]
          </a>
          <a
            href="https://linktr.ee/hongbo_wei"
            className="hover:text-green-300 transition"
            target="_blank"
          >
            [ Linktree ]
          </a>
          <a
            href="mailto:hongbowei.bruce@gmail.com"
            className="hover:text-green-300 transition"
          >
            [ Email ]
          </a>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-xs text-green-700">
          <p>status: online · location: global · mode: shipping</p>
        </footer>
      </div>
    </main>
  );
}
