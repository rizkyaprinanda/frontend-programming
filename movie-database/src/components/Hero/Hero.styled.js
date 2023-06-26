import styled from "styled-components";

const StyledHero = styled.div`
    margin: 1rem;
    
    section {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    text-align: center;
}

.left {
    margin-bottom: 1rem;    
}




img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
}

/* Medium Screen */
@media screen and (min-width: 768px) {
    /*
    * Nothing to do here
    */
}

/* Large Screen */
@media screen and (min-width: 992px) {
    
    margin: 3rem 0rem;
    

    section {
        margin: 2rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }

    .left {
        flex-basis: 40%;
        text-align: left;
    }

    

    .right {
        flex-basis: 60%;
        text-align: right;
    }
}
`

export default StyledHero;