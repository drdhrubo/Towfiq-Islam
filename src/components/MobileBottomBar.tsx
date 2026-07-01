import { Phone, MessageSquare, Mail } from 'lucide-react';

export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-4 inset-x-4 z-40 bg-brand-card/90 border border-brand-border rounded-xl backdrop-blur-md p-3.5 shadow-2xl flex items-center justify-between gap-3">
      {/* Phone Call */}
      <a
        href="tel:+8801778250304"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-brand-bg hover:bg-brand-border/40 text-brand-text border border-brand-border transition-all active:scale-95 text-xs font-mono uppercase tracking-widest"
      >
        <Phone className="w-4 h-4 text-brand-gold shrink-0" />
        <span>Call</span>
      </a>

      {/* WhatsApp Chat */}
      <a
        href="https://wa.me/8801778250304?text=Hi%20Towfiq%2C%20I%20viewed%20your%20portfolio%20and%20want%20to%20discuss%20a%20project!"
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-all active:scale-95 text-xs font-mono uppercase tracking-widest font-semibold"
      >
        <MessageSquare className="w-4 h-4 shrink-0 fill-white/10" />
        <span>WhatsApp</span>
      </a>

      {/* Email Inbox */}
      <a
        href="mailto:filmsbytowfiq@gmail.com?subject=Project%20Inquiry%20-%20FilmsByTowfiq"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-brand-bg hover:bg-brand-border/40 text-brand-text border border-brand-border transition-all active:scale-95 text-xs font-mono uppercase tracking-widest"
      >
        <Mail className="w-4 h-4 text-brand-gold shrink-0" />
        <span>Email</span>
      </a>
    </div>
  );
}
