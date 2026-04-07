import "./CTA.css";
import illustration from "../assets/servering.svg";


export default function CTA() {
 return (
   <section className="cta">
     <div className="container cta-container">
       <div className="cta-text">
         <h2>Lad os bygge noget sammen</h2>
         <p>
           Skal vi gøre din hjemmeside klar til servering? <br />
           En god hjemmeside er som en god ret – den skal friste, fungere
           og få gæsterne <br />til at vende tilbage.
         </p>
         <button>Kontakt os</button>
       </div>


       <div className="cta-image">
         <img src={illustration} alt="Servering illustration" />
       </div>
     </div>
   </section>
 );
}
