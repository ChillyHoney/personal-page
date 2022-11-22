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
  margin-right: 8px;
  font-size: 32px;
`;
const GPSIcon = styled(EnvironmentOutlined)`
  margin-right: 8px;
  font-size: 32px;
`;
const MailIcon = styled(MailOutlined)`
  margin-right: 8px;
  font-size: 32px;
`;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};

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

  const onFinish = (values: string[]) => {
    message.success('Wiadomość wysłana!');
    formRef.current!.resetFields();
  };

  return (
    <Wrapper>
      <Form
        style={{ paddingTop: 50, paddingBottom: 50 }}
        ref={formRef}
        {...layout}
        name='nest-messages'
        onFinish={onFinish}
        validateMessages={validateMessages}
        size='large'
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
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 9 }}>
          <Button style={{ color: '#000' }} type='primary' htmlType='submit'>
            Wyślij
          </Button>
        </Form.Item>
      </Form>
      <address>
        {Address.map((item) => (
          <AddressItemWrapper>
            <InlineWrapper>
              {item.icon}
              <Label>{item.label}</Label>
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

const Label = styled.h2``;

const InlineWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const AddressItemWrapper = styled.div`
  text-align: center;
  padding-bottom: 16px;
`;
const AddressItem = styled.span`
  font-size: 1rem;
`;
