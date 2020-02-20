import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import SocialNet from '../../ScocialNet/SocialNet';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const TEXT = `
      Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько
      абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору
      отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали
      небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до
      десяти предложений в абзаце, что позволяет сделать текст более привлекательным
`;
@withTranslation()
class About extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    const { t } = this.props;
    return (
      <Container>
        <h2 className='container-main-h2'>{t('About.Title')}</h2>
        <Row>
          <Col xs={12} md={8} lg={9} className='pb-4'>
            <Card className='p-2 card-about'>
              <Card.Body>
                <Card.Text>
                  {TEXT}
                </Card.Text>
                <Card.Text>
                  {TEXT}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={3} className='pb-4'>
            <Card className='p-2'>
              <Card.Body>
                <Card.Title>{t('About.Contacts')}:</Card.Title>
                <Card.Text>hi.support@gmail.com</Card.Text>
                <Card.Text>
                  <SocialNet />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
