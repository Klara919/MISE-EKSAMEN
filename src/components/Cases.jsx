​​import './Cases.css'
import React from 'react';
import juhlsspisehus from '../assets/Cases/juhlsspisehus.svg';
import manon from '../assets/Cases/manon.svg';
import osteria from '../assets/Cases/osteria.svg';
import margrethegaarden from '../assets/Cases/margrethegaarden.svg';

function Cases() {


 // CaseCard component
 function CaseCard({ title, image, description }) {
   return (
     <div className="case-card">
       <img src={image} alt={title} />


       <div className="case-overlay">
         <h3>{title}</h3>
         <p>{description}</p>
       </div>
     </div>
   );
 }


 return (
   <section className="cases">
     <div className="cases-container">
       <p>Vores arbejde</p>
       <h2>Tidligere cases</h2>
       <p>
         Gå på opdagelse i vores tidligere cases og få et indblik i, hvad vi kan –
         og hvordan vi arbejder med gennemtænkte og effektive løsninger.
       </p>


       {/* RÆKKE 1 */}
       <div className="cases-row">
         <CaseCard
           title="Margrethegaarden"
           image={margrethegaarden}
           description="Visuel identitet"
         />


         <div className="cases-text">
           <h2>Explore<br/>our creations.</h2>
         </div>
       </div>


       {/* RÆKKE 2 */}
       <div className="cases-row">
         <div className="cases-small">
           <CaseCard
             title="Manon"
             image={manon}
             description="Branding & website"
           />


           <CaseCard
             title="Osteria98"
             image={osteria}
             description="Website & content"
           />
         </div>


         <CaseCard
           title="Juhls Spisehus"
           image={juhlsspisehus}
           description="Visuel identitet & website"
         />
       </div>


     </div>
   </section>
 )
}


export default Cases