import { Star } from "lucide-react";

const GOOGLE_REVIEW_URL = "https://g.page/r/CYu6hUCfJbpOEAE/review";

const GoogleReviewSection = () => {
  return (
    <section className="py-16 bg-secondary border-t border-border">
      <div className="container mx-auto px-6 text-center space-y-6">
        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-accent text-accent" />
          ))}
        </div>

        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">
          Avalie nosso trabalho
        </h2>

        <p className="font-body text-base text-muted-foreground max-w-md mx-auto">
          Sua avaliação é muito importante para nós. Compartilhe sua experiência no Google.
        </p>

        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-sm hover:opacity-90 transition-opacity font-body font-semibold text-base"
        >
          <Star className="w-5 h-5" />
          Avaliar no Google
        </a>
      </div>
    </section>
  );
};

export default GoogleReviewSection;
