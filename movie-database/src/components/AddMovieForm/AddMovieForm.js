import { useState } from 'react';
import styles from './AddMovieForm.module.css'
import { nanoid } from 'nanoid';
import Alert from '../Alert/Alert';
import Button from '../ui/Button';

function AddMovieForm(props) {
  // destructing props 
  const { movies, setMovies } = props;  
  
  // Membuat State object
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    poster: "",
    type: "",
  });

  const [error, setError] = useState({
    title: false,
    date: false,
    poster: false,
    type: false,
  });

  const { title, date, poster, type } = formData;

  // membuat fungsi handleChange untuk handle semua input form
  function handleChange(e) {
    const { name, value } = e.target;
    
    setFormData ({
      ...formData,
      [name]: value,
    });
    
}

// membuat fungsi validate untuk handle semua error
  function validate() {
    const fields = Object.keys(formData);
    let isValid = true;

    for (const field of fields) {
      if (formData[field] === "") {
        setError(function (error) {
          return {
            ...error,
            [field]: true,
          };
        });
        isValid = false;
      } else {
        setError(function (error) {
          return {
            ...error,
            [field]: false,
          };
        });
      }
    }

    return isValid;
  }

  function resetForm() {
    const initialFormData = {
      title: "",
      date: "",
      poster: "",
      type: "",
    };

    setFormData(initialFormData);
  }


  function addMovie(){
    const movie = {
        id:nanoid(),
        title: title,
        year: date,
        type: type,
        poster: poster
      }
      setMovies([ ...movies, movie]);
      resetForm();
  }

  // Handle form ketika disubmit
  function handleSubmit(e) {
    // Mencegah perilaku default: refresh
    e.preventDefault();

    validate() && addMovie();

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
                onChange={handleChange}
                id="title" 
                className={styles.form__input} 
                type="text" 
                value={title}    
                name="title"       
              />
              {/*
              Jika error title true: muncul error  
              Jika tidak munculkan string kosong
              */} 
              {error.title && <Alert>Title harus diisi!</Alert>}
                    
            </div>  
            <div className={styles.form__group}>
              <label htmlFor="date" className={styles.form__label}>
                Date
              </label>
              <input 
                onChange={handleChange}
                id="date" 
                className={styles.form__input} 
                type="number" 
                value={date}   
                name="date"            
              />
              {error.date && <Alert>Date harus diisi!</Alert>}              
            </div>
            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="poster">
                Gambar
              </label>
              <input
                onChange={handleChange}
                id="poster" 
                className={styles.form__input} 
                type="text"
                value={poster}    
                name="poster"        
              />
              {error.poster && <Alert>Gambar harus diisi!</Alert>}                            
            </div>
            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="type">
                Kategori
              </label>
              <select 
              onChange={handleChange}
              name="type" id="type" 
              className={styles.form__input} 
              value={type} >
                <option value="">-- Select a type --</option>
                <option value="action">Action</option>
                <option value="horror">Horror</option>
              </select>      
              {error.type && <Alert>Kategori harus dipilih!</Alert>}                     
            </div>
            <div>
              <Button variant="secondary" full>Add Movie</Button>
            </div>        
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
