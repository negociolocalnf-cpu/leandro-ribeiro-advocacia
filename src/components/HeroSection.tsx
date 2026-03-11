import logo from "@/assets/logo-final.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
      
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(213 70% 45%) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10">
        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/10 rounded-full blur-3xl opacity-30" />
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
          <img
            src={logo}
            alt="Logo Leandro Ribeiro Advocacia"
            className="w-64 md:w-80 lg:w-96 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
