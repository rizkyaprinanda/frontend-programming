import { useState } from 'react';
import styles from './AddMovieForm.module.css'
import { nanoid } from 'nanoid';
import Alert from '../Alert/Alert';

function AddMovieForm(props) {
  // destructing props 
  const { movies, setMovies } = props;  

  const [inputs, setInputs] = useState([
    {
      title: "",
      error: false,
    },
    {
      date: "",
      error: false,
    },
    {
      poster:"",
      error:false,
    },
    {
      type:"",
      error:false,
    }    
  ]);


  // membuat fungsi handleTitle
  function handleChange(e) {
    
    const { id, value } = e.target;
    const newInputs = [...inputs];    
    
    if (id === "title") {
      newInputs[0].title = value;      
    } else if (id === "date") {      
      newInputs[1].date = value;
    } else if (id === "poster") {
      newInputs[2].poster = value;
    } else if (id === "type") {
      newInputs[3].type = e.target.value;
    }

    setInputs(newInputs);
  }

  // Handle form ketika disubmit
  function handleSubmit(e) {
    // Mencegah perilaku default: refresh
    e.preventDefault();

    const [{title}, {date}, {poster}, {type}] = inputs;
    
    if (title === "" || date === "" || poster === "" || type === "") {
      setInputs([
        {
          ...inputs[0],
          error: title === "",
        },
        {
          ...inputs[1],
          error: date === "",
        },
        {
          ...inputs[2],
          error: poster === "",
        },
        {
          ...inputs[3],
          error: type === "",
        },
      ]);
    } else {
      // Siapkan movie yang ingin diinput
      const movie = {
        id:nanoid(),
        title:inputs[0].title,
        year:inputs[1].date,
        type: inputs[3].type,
        poster: inputs[2].poster
      }
      setMovies([ ...movies, movie]);
      console.log(movie);
      console.log(inputs[3].type);
      setInputs([
        {
          ...inputs[0],
          error: false,
        },
        {
          ...inputs[1],
          error: false,
        },
        {
          ...inputs[2],
          error: false,
        },
        {
          ...inputs[3],
          error: false,
        },
      ]);
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
                onChange={handleChange}
                id="title" 
                className={styles.form__input} 
                type="text" 
                value={inputs[0].title}                
              />
              {/*
              Jika error title true: muncul error  
              Jika tidak munculkan string kosong
              */} 
              {inputs[0].error && <Alert>Title harus diisi!</Alert>}
                    
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
                value={inputs[1].date}               
              />
              {inputs[1].error && <Alert>Date harus diisi!</Alert>}              
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
                value={inputs[2].poster}            
              />
              {inputs[2].error && <Alert>Gambar harus diisi!</Alert>}                            
            </div>
            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="type">
                Kategori
              </label>
              <select 
              onChange={handleChange}
              name="" id="type" 
              className={styles.form__input} 
              value={inputs[3].type}>
                <option value="">-- Select a type --</option>
                <option value="action">Action</option>
                <option value="horror">Horror</option>
              </select>   
              {inputs[3].error && <Alert>Type is required</Alert>}                        
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
