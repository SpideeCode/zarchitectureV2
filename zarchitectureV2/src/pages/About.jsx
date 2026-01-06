import SectionWrapper from '../components/SectionWrapper';

function About() {
  return (
    <div className="pt-20">
      <SectionWrapper className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-light mb-8">À Propos</h1>
              <div className="w-16 h-1 bg-black mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed space-y-4">
                Je m'appelle Zeineb Azzaoui, je suis étudiante en fin de bachelier en architecture à la faculté d'architecture La Cambre, à l'Université Libre de Bruxelles. Mon intérêt pour l'architecture s'est développé au fil des années, nourri par une curiosité pour la création d'espaces alliant esthétique, fonctionnalité et innovation.
                <br /><br />
                Mon parcours académique à La Cambre me permet d'explorer divers aspects de la conception architecturale, de la création d'espaces fonctionnels et esthétiques à la résolution de défis qui se posent lors de la conception de projets.
                <br /><br />
                À travers ce portfolio, je partage mes projets académiques, témoignant de ma créativité et de mon désir de concevoir ou de transformer des espaces qui enrichissent notre cadre de vie et répondent aux besoins de notre habitat.
                <br /><br />
                Je vous invite à découvrir mon travail et à me contacter si vous souhaitez en savoir plus !
              </p>
            </div>
          </div>

          <div className="lg:sticky lg:top-32 h-fit">
            <div className="aspect-[3/4] bg-gray-100 relative shadow-lg">
              <img
                src="/images/photoAbout.jpg"
                alt="Zeineb Azzaoui"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-[1rem] border-white/50"></div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

export default About;
