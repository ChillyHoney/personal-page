import React from 'react';
import { Button, Form, FormInstance, Input, message } from 'antd';
import styled from 'styled-components';
import { device } from '../misc/styledBreakpoints';
import {
  MailOutlined,
  WhatsAppOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

const PhoneIcon = styled(WhatsAppOutlined)`
  margin-right: 16px;
  font-size: 42px;
  color: #fff000;
`;
const GPSIcon = styled(EnvironmentOutlined)`
  margin-right: 16px;
  font-size: 42px;
  color: #fff000;
`;
const MailIcon = styled(MailOutlined)`
  margin-right: 16px;
  font-size: 42px;
  color: #fff000;
`;

// const layout = {
//   labelCol: { span: 4 },
//   wrapperCol: { span: 16 },
// };

const validateMessages = {
  required: 'To pole jest wymagane!',
  types: {
    // eslint-disable-next-line no-template-curly-in-string
    email: '${label} jest nieprawidłowy!',
  },
};

const Address = [
  {
    label: 'Numer telefonu',
    content: '+48 515 396 987',
    icon: <PhoneIcon />,
  },
  {
    label: 'Adres e-mail',
    content: 'm.witt@int.pl',
    icon: <MailIcon />,
  },
  {
    label: 'Lokalizacja',
    content: 'Trójmiasto',
    icon: <GPSIcon />,
  },
];

const Contact = () => {
  const formRef = React.createRef<FormInstance>();

  const onFinish = () => {
    message.success('Wiadomość wysłana!');
    formRef.current!.resetFields();
  };

  return (
    <Wrapper>
      <Title>Skontaktuj się ze mną!</Title>
      <MessageForm
        style={{}}
        ref={formRef}
        name='nest-messages'
        onFinish={onFinish}
        validateMessages={validateMessages}
        size='large'
        layout='vertical'
      >
        <Form.Item
          name={['user', 'name']}
          label='Imię/ Firma'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label='Email'
          rules={[{ type: 'email', required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'subject']}
          label='Temat'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'message']}
          label='Wiadomość'
          rules={[{ required: true }]}
        >
          <Input.TextArea rows={8} />
        </Form.Item>
        <Form.Item>
          <Button style={{ color: '#000' }} type='primary' htmlType='submit'>
            Wyślij wiadomość
          </Button>
        </Form.Item>
      </MessageForm>
      <address>
        {Address.map((item) => (
          <AddressItemWrapper>
            <InlineWrapper>
              {item.icon}
              <h2>{item.label}</h2>
            </InlineWrapper>
            <AddressItem>{item.content}</AddressItem>
          </AddressItemWrapper>
        ))}
      </address>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 32px;
  height: 90vh;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  @media ${device.tablet} {
    overflow: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      display: flex;
      width: 4px;
    }
  }
`;

const MessageForm = styled(Form)`
  padding-top: 50;
  padding-bottom: 50;
  margin: auto;
  width: 94%;

  @media ${device.tablet} {
    width: 64%;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  padding-top: 24px;

  ::first-letter {
    color: #fff000;
  }

  @media ${device.tablet} {
    padding-top: 0;
  }
`;

const InlineWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const AddressItemWrapper = styled.div`
  text-align: center;
  padding-top: 16px;
`;
const AddressItem = styled.span`
  font-size: 1.3rem;
`;
