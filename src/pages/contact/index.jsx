import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import ContactForm from '../../components/PageFragments/ContactForm';
import SEO from '../../components/Seo';

const Contact = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="Contacto"
        description="Hola, gracias por visitar mi sitio personal, no dudes en ponerte en contacto conmigo, siempre estaré abierto para recibir propuestas para nuevos proyectos."
        path="/contact"
        keywords={['Daniel Garces', 'Jose Daniel Garces Ospina', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby', 'Technology']}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Contacto</h1>
        </div>
        <Row gutter={[40, 20]}>
          <Col sm={24} md={24} lg={12}>
            <img
              src="../../contact.png"
              alt="contact"
              className="widthFull contactImgBorder"
            />
          </Col>
          <ContactForm />
        </Row>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Contact;
