/**
 * Membuat component Hello
 */


function Hello(props) {
    console.log(props);
    
    // Melakukan destructing props 
    const {name} = props;
    // di dalam return adalah JSX
    return(
        <div className="hello">
            <h2>Hello React</h2>
            <p>Saya {name} - Frontend Engineer</p>          
        </div>
    );    
}

export default Hello;