
import Image from 'next/image';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  // Exemple de liste de projets
  const projects = [
    {
      id: 1,
      title: 'Application de gestion des tâches',
      description: 'Une application web pour gérer vos tâches avec une interface intuitive.',
      imageUrl: '/task-app.jpg',
      link: 'https://github.com/username/task-app'
    },
    {
      id: 2,
      title: 'Site E-commerce',
      description: 'Un site de vente en ligne avec système de panier, paiement sécurisé et gestion de produits.',
      imageUrl: '/ecommerce.jpg',
      link: 'https://github.com/username/ecommerce-site'
    },
    {
      id: 3,
      title: 'Blog personnel',
      description: 'Un blog personnel construit avec Next.js et Markdown pour les articles.',
      imageUrl: '/blog.jpg',
      link: 'https://github.com/username/personal-blog'
    }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mes Projets</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={300}
              height={200}
              className={styles.projectImage}
            />
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectDescription}>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              Voir le projet
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
