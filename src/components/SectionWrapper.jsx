function SectionWrapper({ children, className = '' }) {
  return (
    <section className={`max-w-7xl mx-auto px-6 lg:px-12 ${className}`}>
      {children}
    </section>
  );
}

export default SectionWrapper;
