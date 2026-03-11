const Footer = () => {
  return (
    <footer className="py-8 bg-secondary border-t border-border">
      <div className="container mx-auto px-6 text-center space-y-2">
        <span className="font-heading text-lg font-bold tracking-wider text-primary-foreground">
          LEANDRO RIBEIRO
          <span className="text-xs tracking-[0.3em] text-muted-foreground font-body font-light ml-2">
            ADVOCACIA
          </span>
        </span>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Leandro Ribeiro Advocacia. Todos os direitos reservados.
        </p>
        <p className="font-body text-xs text-muted-foreground">
          Desenvolvido por Cássio Domingos (22) 98160-5225
        </p>
      </div>
    </footer>
  );
};

export default Footer;
