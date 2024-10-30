import Image from "next/image";
import styles from './styles/home.module.css';
import Link from 'next/link';


function Navbar() {
  return (
    <div className={styles.navbar}>
      <span>
        portfolio.
      </span>
      <nav>
        <Link href="/" className={styles.navlink}>Accueil</Link>
        <Link href="/projects" className={styles.navlink}>Projets</Link>
        <Link href="/contact" className={styles.navlink}>Contact</Link>
     </nav>
    </div>
    
  );
}


export default function Home() {
  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src="https://www.leptidigital.fr/wp-content/uploads/2023/02/actu-photo-profil.jpg"
          alt="Photo de profil"
          width={250}
          height={250}
          className={styles.profileImage}
        />
        <h1 className={styles.title}>Bienvenue sur mon portfolio</h1>
        <p className={styles.subtitle}>Développeur Web Full-Stack</p>
      </header>
      
      <section className={styles.intro}>
        <h2>À propos de moi</h2>
        <p>
          Passionné par le développement web, j'ai acquis de solides compétences en JavaScript, React, et Next.js. J'aime créer des applications performantes et user-friendly.
        </p>
      </section>

      <section className={styles.skills}>
        <h2>Mes Compétences</h2>
        <ul className={styles.skillsList}>
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js / Express</li>
          <li>HTML / CSS</li>
          <li>Base de données SQL et NoSQL</li>
        </ul>
      </section>

      <div className={styles.buttonContainer}>
        <Link href="/projects" className={styles.button}>
          Voir mes projets
        </Link>
        <Link href="/contact" className={styles.button}>
          Contactez-moi
        </Link>
      </div>
    </div>
    </>
  );
}
