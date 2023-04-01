import styles from './AddMovieForm.module.css'

function AddMovieForm() {

  return (
    <div className={styles.container}>
      <form className={styles.form__addmovie}>
        <div className={styles.form__left}>
          <img 
          className={styles.form__image} 
          src="https://picsum.photos/467/424" 
          alt=""
          />
        </div>
        <div className={styles.form__right}>
          <div className={styles.form__title}>Add Movie</div>
            <label className={styles.form__label__title} htmlFor="form-title">Title</label>
            <input className={styles.form__input__title} type="text" id="form-title"/>          
          <div className={styles.form__date}>
            <label className={styles.form__label__date} htmlFor="form-date">Year</label>
            <input className={styles.form__input__date} type="text" id="form-date" />
          </div>
          <div className={styles.form__description}>
            <label className={styles.form__label__description} htmlFor="form-description">Description</label>
            <textarea className={styles.form__input__description} id="form-description" rows="3"></textarea>
          </div>
          <button className={styles.form__button}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddMovieForm;
