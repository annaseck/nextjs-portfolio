
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contactez-moi</h1>
      <p className={styles.subtitle}>Vous avez une question ou une opportunité ? N'hésitez pas à me contacter !</p>
      
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Nom</label>
          <input type="text" id="name" name="name" className={styles.input} required />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" name="email" className={styles.input} required />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea id="message" name="message" className={styles.textarea} rows="5" required></textarea>
        </div>
        
        <button type="submit" className={styles.button}>Envoyer</button>
      </form>
    </div>
  );
}
