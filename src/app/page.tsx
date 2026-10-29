const categories = [
  { number: "01", title: "Beauté & Maquillage", description: "Les essentiels pour révéler votre beauté." },
  { number: "02", title: "Soins des cheveux", description: "Prenez soin de vos cheveux avec élégance." },
  { number: "03", title: "Épilation & Accessoires", description: "Tout pour votre routine beauté." },
];

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <a className="logo" href="#">Queen <span>Beauty</span></a>

        <nav>
          <a href="#accueil">Accueil</a>
          <a href="#categories">Nos catégories</a>
          <a href="#apropos">À propos</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-button" href="#contact">Nous contacter ↗</a>
      </header>

      <section className="hero" id="accueil">
        <div className="hero-content">
          <p className="eyebrow">✦ VOTRE BEAUTÉ, NOTRE PASSION ✦</p>
          <h1>Votre beauté mérite <em>ce qu’il y a de mieux.</em></h1>
          <p className="hero-description">
            Découvrez notre univers dédié à la beauté, aux soins et aux accessoires
            qui subliment votre quotidien.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#categories">Découvrir notre univers ↗</a>
            <a className="text-button" href="#apropos">En savoir plus</a>
          </div>

          <div className="hero-note">
            <span className="note-star">✦</span>
            <p>La beauté est dans les détails.<br /><strong>Le détail fait la différence.</strong></p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="decor decor-one">✦</div>
          <div className="beauty-card">
            <div className="card-top">QUEEN BEAUTY <span>✧</span></div>
            <div className="flower">✿</div>
            <p className="card-caption">BEAUTÉ · SOIN · ÉLÉGANCE</p>
          </div>
          <div className="round-label">BE YOUR<br />OWN QUEEN</div>
          <div className="decor decor-two">✧</div>
        </div>
      </section>

      <section className="categories-section" id="categories">
        <div className="section-heading">
          <p className="eyebrow">NOTRE SÉLECTION</p>
          <h2>Un univers pensé <em>pour vous</em></h2>
          <p>Tout ce qu’il faut pour prendre soin de vous, avec style.</p>
        </div>

        <div className="category-grid category-grid-images">
          {categories.map((category, index) => {
            const images = [
              "/makeup.png",
              "/hair-care.png",
              "/hair-removal.png",
            ];

            return (
              <article
                className="category-card image-category-card"
                key={category.number}
              >
                <div className={`category-photo category-photo-${index + 1}`}>
                  <img
                    src={images[index]}
                    alt={category.title}
                  />
                </div>

                <div className="category-info">
                  <span className="category-number">{category.number}</span>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <a href="#contact">En savoir plus ↗</a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="about-section" id="apropos">
        <p className="eyebrow">L’ESPRIT QUEEN BEAUTY</p>
        <h2>La beauté commence quand vous <em>vous sentez bien.</em></h2>
        <p>
          Nous sélectionnons avec soin des produits et accessoires dédiés à votre
          beauté, votre confort et votre confiance en vous.
        </p>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">RESTONS EN CONTACT</p>
        <h2>Un renseignement ? <em>Parlons beauté.</em></h2>
        <p>Contactez-nous pour découvrir nos produits et nos services.</p>
        <a className="primary-button" href="https://wa.me/" target="_blank" rel="noreferrer">
          Nous contacter sur WhatsApp ↗
        </a>
        <small>Le numéro WhatsApp sera ajouté lors de la prochaine étape.</small>
      </section>

      <footer className="footer">
        <a className="logo" href="#accueil">Queen <span>Beauty</span></a>
        <p>La beauté dans chaque détail. ✦</p>
        <span>© {new Date().getFullYear()} Queen Beauty</span>
      </footer>
    </main>
  );
}