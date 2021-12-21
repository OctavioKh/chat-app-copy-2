import React from 'react';
import bio from './bio.jpg';
import { ig, onlyfans, fb, email } from './socials.js';
import Image from 'react-bootstrap/Image';

const About = () => {
  return (
    <div className='container'>
      <div className="center-image" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center" }}>
        <Image src={bio} className="bio-pic" rounded />
      </div>
      <br />
      <p className="text-justify">Macarena Puelles es una artista visual peruana nacida en 1993.
      <br /><br />
      Cursó humanidades en la PUCP, para luego estudiar fotografía en el Centro de la Imagen.
      Actualmente se dedica a tiempo completo a crear contenido sexual para su plataforma virtual. <br /><br />
      Ella se especializa en el retrato documental, siendo esta rama de la fotografía la que eligió para darle rienda suelta a su inquieta curiosidad por el mundo que la rodea, el comportamiento humano y las emociones.
      <br /><br />
      El trabajo de Macarena suele tener una aproximación muy íntima, apelando a la sensualidad y lo invisibilizado por el discurso normativo de los medios.</p>
      <br></br>
      <div className="text-justify-center">
        <a href={ig} target="_blank" rel="noopener noreferrer"> <i class="fa fa-instagram"></i>&nbsp;Instagram &nbsp;</a>
        <a href={fb} target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook"></i>&nbsp;Facebook &nbsp;</a> <br className="espacio"></br>
        <a href={onlyfans} target="_blank" rel="noopener noreferrer"><i class="fa fa-heart"></i>&nbsp;Only Fans &nbsp;</a>
        <a href={email} target="_blank" rel="noopener noreferrer"><i class="fa fa-envelope"></i>&nbsp;Email &nbsp;</a>
      </div>
      <br /><br />
    </div>
  );
};

export default About;
