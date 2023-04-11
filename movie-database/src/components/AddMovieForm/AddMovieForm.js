import { useState } from 'react';
import styles from './AddMovieForm.module.css'
import { nanoid } from 'nanoid';
import Alert from '../Alert/Alert';

function AddMovieForm(props) {
  // destructing props 
  const { movies, setMovies } = props;

  // membuat state title
  const [title, setTitle] = useState("");
  // membuat state date
  const [date, setDate] = useState("");
  // membuat state description
  const [description, setDescription] = useState("");
    
  // membuat state title dan date error/empty
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isDescriptionError, setIsDescriptionError] = useState(false);


  // membuat fungsi handleTitle
  function handleTitle(e) {
    setTitle(e.target.value); 
  }

  function handleDate(e) {
    setDate(e.target.value);
  }
  
  function handleDescription(e) {
    setDescription(e.target.value);
  }

  // Handle form ketika disubmit
  function handleSubmit(e) {
    // Mencegah perilaku default: refresh
    e.preventDefault();

    // Jika title kosong, maka set error title : true
    if(title === "") {
      setIsTitleError(true);
    }
    // Jika date kosong, maka set error date : true
    else if(date === "") {
      setIsTitleError(false);
      setIsDateError(true);
    }
    // Jika date kosong, maka set error date : true
    else if(description === "") {
      setIsTitleError(false);
      setIsDateError(false);
      setIsDescriptionError(true);
    // Jika tidak kosong, tambah data
    } else {
      // Siapkan movie yang ingin diinput
      const movie = {
        id:nanoid(),
        title:title,
        year:date,
        type: "Movie",
        poster: "https://picsum.photos/300/400"
      }

      setMovies([ ...movies, movie]);
      setIsTitleError(false);
      setIsDateError(false);
      setIsDescriptionError(false);
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img 
          className={styles.form__image} 
          src="https://picsum.photos/467/424" 
          alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label htmlFor="title" className={styles.form__label} >
                Title
              </label>
              <input 
                onChange={handleTitle}
                id="title" 
                className={styles.form__input} 
                type="text" 
                value={title}                
              />
              {/*
              Jika error title true: muncul error  
              Jika tidak munculkan string kosong
              */} 
              {isTitleError && <Alert>Title harus diisi!</Alert>}
                    
            </div>  
            <div className={styles.form__group}>
              <label htmlFor="date" className={styles.form__label}>
                Date
              </label>
              <input 
                onChange={handleDate}
                id="date" 
                className={styles.form__input} 
                type="number" 
                value={date}               
              />
              {isDateError && <Alert>Date harus diisi!</Alert>}              
            </div>
            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="description">
                Description
              </label>
              <textarea
                onChange={handleDescription}
                id="description" 
                className={styles.form__input} 
                value={description}            
              />
              {isDescriptionError && <Alert>Description harus diisi!</Alert>}                            
            </div>
            <div>
              <button className={styles.form__button}>Add Movie</button>
            </div>        
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
