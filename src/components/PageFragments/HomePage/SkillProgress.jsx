import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div style={{ marginTop: 26 }}>
    <h2>Mis Habilidades</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={90}
          text="HTML"
        />
        <ProgressBar
          percent={80}
          text="CSS"
        />
        <ProgressBar
          percent={80}
          text="Javascript"
        />
        <ProgressBar
          percent={65}
          text="TypeScript"
        />
        <ProgressBar
          percent={95}
          text="ReactJS"
        />
        <ProgressBar
          percent={95}
          text="Redux"
        />
        <ProgressBar
          percent={85}
          text="React Native"
        />
        <ProgressBar
          percent={85}
          text="Gatsby"
        />
        <ProgressBar
          percent={70}
          text="NextJS"
        />
        <ProgressBar
          percent={90}
          text="NodeJS"
        />
        <ProgressBar
          percent={40}
          text="GoLang"
        />
        <ProgressBar
          percent={50}
          text="Docker"
        />
        <ProgressBar
          percent={50}
          text="Google Cloud Platform"
        />
        <ProgressBar
          percent={40}
          text="Digital Ocean"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={70}
          text="Angular"
        />
        <ProgressBar
          percent={70}
          text="Ionic"
        />
        <ProgressBar
          percent={60}
          text="Firebase"
        />
        <ProgressBar
          percent={50}
          text=".NET CORE - C#"
        />
        <ProgressBar
          percent={75}
          text="Mysql"
        />
        <ProgressBar
          percent={60}
          text="PostgreSQL"
        />
        <ProgressBar
          percent={78}
          text="MongoDB"
        />
        <ProgressBar
          percent={80}
          text="Wordpress"
        />
        <ProgressBar
          percent={90}
          text="Bootstrap"
        />
        <ProgressBar
          percent={75}
          text="Tailwind"
        />
        <ProgressBar
          percent={50}
          text="Kubernetes"
        />
        <ProgressBar
          percent={20}
          text="Python"
        />
        <ProgressBar
          percent={70}
          text="Amazon Web Services"
        />
        <ProgressBar
          percent={90}
          text="Git"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
