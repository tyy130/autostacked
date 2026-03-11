import { Bot, Phone, Zap, CheckCircle, ArrowRight, Star, ChevronDown, Building2, Wrench, Home } from "lucide-react";

const faqs = [
  {
    q: "How long does setup actually take?",
    a: "Most clients are live within 72 hours. We handle all the configuration — you just answer a few questions about your business and we take it from there.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "Zero. You don't touch any code, APIs, or settings. We build it, configure it, and hand it to you ready to go.",
  },
  {
    q: "What if I want changes after launch?",
    a: "Monthly subscribers get free updates — just email us. One-time automation builds include one revision round within 30 days.",
  },
  {
    q: "Will the voice agent actually sound natural?",
    a: "Yes. We use the same voice AI technology that powers enterprise phone systems. Most callers can't tell the difference.",
  },
  {
    q: "Is $99/month really worth it for a small business?",
    a: "One missed call that would have been a new customer pays for the month. The voice agent answers every call, 24/7, including after hours when most leads go to voicemail.",
  },
  {
    q: "What kinds of businesses do you work with?",
    a: "Service businesses: HVAC, plumbing, real estate, dental, law firms, salons, contractors, restaurants. If you get phone calls or website visitors, we can help.",
  },
];

const caseStudies = [
  {
    icon: Home,
    industry: "Real Estate",
    company: "Torres Homes",
    service: "AI Chatbot",
    result: "Captures leads 24/7 — name, contact, and property preferences — even when the agent is with a client.",
    metric: "Never misses a lead",
  },
  {
    icon: Wrench,
    industry: "HVAC",
    company: "Arctic Air",
    service: "Voice AI Receptionist",
    result: "Answers every inbound call, books service appointments, and handles FAQs without a human picking up.",
    metric: "0 missed calls",
  },
  {
    icon: Building2,
    industry: "Home Services",
    company: "Local Contractor",
    service: "AI Workflow Automation",
    result: "Automated lead follow-up via email + SMS the moment a form is submitted. No more forgetting to follow up.",
    metric: "Follow-up in < 60 sec",
  },
];

const industries = ["HVAC & Plumbing", "Real Estate", "Dental & Medical", "Law Firms", "Restaurants", "Salons & Spas", "Contractors", "Auto Shops"];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Nav */}
      <nav className="border-b border-zinc-800 px-6 py-4 sticky top-0 bg-zinc-950/95 backdrop-blur z-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-violet-500 flex items-center justify-center">
              <Zap size={14} className="text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">AutoStacked</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#case-studies" className="text-sm text-zinc-400 hover:text-white transition-colors hidden sm:block">Results</a>
            <a href="#services" className="text-sm text-zinc-400 hover:text-white transition-colors hidden sm:block">Pricing</a>
            <a href="mailto:hello@autostacked.com" className="bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
              Get started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 text-violet-400 text-sm mb-8">
            <Star size={12} />
            AI tools built for small businesses
          </div>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-6 leading-tight">
            Your business,<br />
            <span className="text-violet-400">always on.</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-xl mx-auto">
            We build AI voice agents, chatbots, and automations for local businesses. Live in 72 hours. No technical setup on your end.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#services" className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2">
              See pricing <ArrowRight size={16} />
            </a>
            <a href="mailto:hello@autostacked.com" className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-colors">
              Talk to us
            </a>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="px-6 pb-16 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-zinc-500 text-sm mb-6">Built for local service businesses</p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map(i => (
              <span key={i} className="bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm px-4 py-2 rounded-full">{i}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="px-6 py-20 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">Real businesses. Real results.</h2>
            <p className="text-zinc-400 text-lg">Here&apos;s what we&apos;ve built for clients like you.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {caseStudies.map(cs => (
              <div key={cs.company} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-violet-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0">
                    <cs.icon size={16} className="text-violet-400" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500">{cs.industry}</div>
                    <div className="font-bold text-sm">{cs.company}</div>
                  </div>
                </div>
                <div className="inline-block bg-violet-500/10 text-violet-400 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">{cs.service}</div>
                <p className="text-zinc-400 text-sm mb-5 leading-relaxed">{cs.result}</p>
                <div className="border-t border-zinc-800 pt-4">
                  <div className="text-white font-bold text-sm flex items-center gap-2">
                    <CheckCircle size={14} className="text-violet-400 shrink-0" />
                    {cs.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-20 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">Three tools. One agency.</h2>
            <p className="text-zinc-400 text-lg">Pick what you need. Stack them for maximum impact.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-violet-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center mb-5">
                <Phone size={20} className="text-violet-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Voice AI Receptionist</h3>
              <p className="text-zinc-400 text-sm mb-5">Answers your phones 24/7, books appointments, handles FAQs. Sounds like a real person.</p>
              <div className="mb-5">
                <div className="text-2xl font-black text-white">$99<span className="text-zinc-500 font-normal text-base">/mo</span></div>
                <div className="text-zinc-500 text-sm">Free setup</div>
              </div>
              <ul className="space-y-2 mb-6">
                {["Answers inbound calls", "Books appointments", "Custom voice & personality", "Works 24/7"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                    <CheckCircle size={14} className="text-violet-400 shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <a href="https://buy.stripe.com/fZu28q9g86xlgxx5CVcbC01" className="block text-center bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
                Get started
              </a>
            </div>

            <div className="bg-zinc-900 border border-violet-500/40 rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                Most popular
              </div>
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center mb-5">
                <Bot size={20} className="text-violet-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Chatbot</h3>
              <p className="text-zinc-400 text-sm mb-5">A smart chat widget trained on your business. Captures leads and answers questions instantly.</p>
              <div className="mb-5">
                <div className="text-2xl font-black text-white">$49<span className="text-zinc-500 font-normal text-base">/mo</span></div>
                <div className="text-zinc-500 text-sm">$99 one-time setup</div>
              </div>
              <ul className="space-y-2 mb-6">
                {["Lives on your website", "Trained on your business", "Captures leads automatically", "Instant responses"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                    <CheckCircle size={14} className="text-violet-400 shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <a href="https://buy.stripe.com/9B65kC1NG5th8112qJcbC05" className="block text-center bg-violet-600 hover:bg-violet-500 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
                Get started
              </a>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-violet-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center mb-5">
                <Zap size={20} className="text-violet-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Workflow Automation</h3>
              <p className="text-zinc-400 text-sm mb-5">Eliminate one manual task completely. Lead follow-up, CRM sync, invoicing — done automatically.</p>
              <div className="mb-5">
                <div className="text-2xl font-black text-white">$199<span className="text-zinc-500 font-normal text-base"> flat</span></div>
                <div className="text-zinc-500 text-sm">One-time, yours to keep</div>
              </div>
              <ul className="space-y-2 mb-6">
                {["Custom-built for your workflow", "Runs automatically", "No monthly fee", "Handoff documentation"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                    <CheckCircle size={14} className="text-violet-400 shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <a href="https://buy.stripe.com/3cI7sK4ZS6xlgxx9TbcbC03" className="block text-center bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
                Get started
              </a>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-violet-900/40 to-zinc-900 border border-violet-500/30 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-violet-400 text-sm font-semibold mb-1">Full AI Stack Bundle</div>
              <h3 className="text-2xl font-black mb-2">All three services. One monthly price.</h3>
              <p className="text-zinc-400">Voice agent + chatbot + automation — fully configured and running in under a week.</p>
            </div>
            <div className="text-center shrink-0">
              <div className="text-3xl font-black">$149<span className="text-zinc-400 font-normal text-lg">/mo</span></div>
              <div className="text-zinc-500 text-sm mb-3">$149 one-time setup</div>
              <a href="https://buy.stripe.com/bJe3cu8c44pd3KL3uNcbC04" className="block bg-violet-600 hover:bg-violet-500 text-white font-bold px-8 py-3 rounded-xl transition-colors whitespace-nowrap">
                Get the bundle
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20 border-b border-zinc-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black tracking-tight mb-4">Live in 72 hours</h2>
          <p className="text-zinc-400 mb-12">No long onboarding. No technical setup on your end.</p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { n: "01", title: "You tell us your needs", body: "Quick call or message. We learn your business in 15 minutes." },
              { n: "02", title: "We build it", body: "We configure everything — AI, integrations, branding. Zero work for you." },
              { n: "03", title: "You go live", body: "We hand it over, walk you through it, and you're up and running." },
            ].map(s => (
              <div key={s.n} className="text-left">
                <div className="text-4xl font-black text-zinc-800 mb-3">{s.n}</div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-zinc-400 text-sm">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 border-b border-zinc-800">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black tracking-tight mb-10 text-center">Common questions</h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none hover:bg-zinc-800/50 transition-colors">
                  <span className="font-semibold text-sm pr-4">{q}</span>
                  <ChevronDown size={16} className="text-zinc-500 shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-5 text-zinc-400 text-sm leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 py-24">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-black tracking-tight mb-4">Ready to automate?</h2>
          <p className="text-zinc-400 mb-8 text-lg">Send us a message and we&apos;ll get back to you within a few hours. No sales pitch — just a quick conversation about what you need.</p>
          <a href="mailto:hello@autostacked.com" className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors">
            hello@autostacked.com <ArrowRight size={18} />
          </a>
          <p className="text-zinc-600 text-sm mt-4">Or text us — we&apos;re fast.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-violet-500 flex items-center justify-center">
              <Zap size={10} className="text-white" />
            </div>
            <span className="font-semibold text-zinc-400">AutoStacked</span>
          </div>
          <span>© 2026 AutoStacked. Built with AI, delivered fast.</span>
        </div>
      </footer>
    </main>
  );
}
