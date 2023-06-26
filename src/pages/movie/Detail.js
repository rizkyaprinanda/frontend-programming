import DetailMovie from "../../components/DetailMovie/DetailMovie";
import Heading from "../../components/ui/Heading";
import RecomendMovie from "../../components/RecomendMovie/RecomendMovie";

function Detail(){ 
   
    return(
        <>
            <Heading as="h2" align="center">Detail Movie</Heading>
            <DetailMovie />
            <RecomendMovie />            
        </>
    );
}

export default Detail;