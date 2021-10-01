import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hola y Bienvenido a mi sitio personal, mi nombre es  José Daniel Garcés Ospina, Desarrollador Web FullStack, apasionado por las tecnologías en la nube con mas de 7 años de experiencia en el mundo de Desarrollo de Software, actualmente desarrollo en los stacks MEAN, MERN, LAMP, JAMSTACK, me gusta compartir mi conocimiento,enseñar y dar mentorías a desarrolladores que apenas comienzan en el mundo digital, tomar café por las mañanas y hacer Software.`,
  paraTwo: `Mi principal activo es ser autodidacta a lo largo del tiempo aprendo tecnologías en tiempo record, trabajo principalmente con Javascript como ReactJS y NodeJS, también tengo experiencia en servicios de la nube como Digitalocean, Amazon Web Services, Google Cloud Platform, implementando aplicaciones que usan herramientas para CD / CI como jenkins, docker y kubernetes, para que sean escalables a futuro.`,
};

const AboutMe = () => {
  const description = `${stripTags(pageText.paraOne)} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="Acerca de mi"
          description={description}
          path=""
          keywords={['Daniel Garces', 'Jose Daniel Garces Ospina', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby', 'Technology']}
        />
        <h1 className="titleSeparate">Acerca de mi</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Nacido en"
            textH3="Colombia, Dosquebradas"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Amante de un buen café"
            textH3="Café + Código = Felicidad :)"
          />
        </Col>
        
        
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Programador Autodidacta"
            textH3="Gracias a los recursos web"
            height={60}
            width={60}
          />
        </Col>
        
      </Row>
    </>
  );
};
export default AboutMe;
