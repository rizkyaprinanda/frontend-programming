import Hello from "./Hello";

function Main() {
    // Mengirim props nama ke component Hello
    return(
        <main>
            <Hello name="Rizky" />
            <Hello name="Jonas" />
            <Hello name="Hannah" />
            <Hello name="Mikel" />
            <Hello name="Martha" />
        </main>
    );   
}

export default Main;