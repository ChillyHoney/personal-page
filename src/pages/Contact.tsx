import { ReactNode, useEffect, useRef, useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import { Rule } from 'antd/es/form';
import styled from 'styled-components';
import { device } from '../misc/styledBreakpoints';
import {
  MailOutlined,
  WhatsAppOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useForm } from '@formspree/react';

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

const SendButton = styled(Button)`
  color: #000;
  margin-top: 24px;

  :disabled {
    background-color: #fff000;
    border-color: #fff000;
    opacity: 80%;
  }
  :focus {
    color: #000;
  }
  :hover {
    color: #111111;
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
  text-decoration: underline;
`;

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
    content: <a href='tel:+48 515 396 987'>+48 515 396 987</a>,
    icon: <PhoneIcon />,
  },
  {
    label: 'Adres e-mail',
    content: <a href='mailto:m.witt@int.pl'>m.witt@int.pl</a>,
    icon: <MailIcon />,
  },
  {
    label: 'Lokalizacja',
    content: (
      <a href='https://www.google.pl/maps/place/Tr%C3%B3jmiasto/@54.4295222,18.3743343,10z/data=!3m1!4b1!4m5!3m4!1s0x46fd0aa24f8d325b:0xf6d7e82b367965ac!8m2!3d54.3919577!4d18.5406663'>
        Trójmiasto
      </a>
    ),
    icon: <GPSIcon />,
  },
];

type FormItemsListType = {
  name: string;
  label: string;
  rules: Rule;
  inputType: ReactNode;
};

const FormItems: FormItemsListType[] = [
  {
    name: 'name',
    label: 'Imię/ firma',
    rules: { required: true },
    inputType: <Input />,
  },
  {
    name: 'email',
    label: 'Email',
    rules: { type: 'email', required: true },
    inputType: <Input type='email' />,
  },
  {
    name: 'subject',
    label: 'Temat',
    rules: { required: true },
    inputType: <Input />,
  },
  {
    name: 'message',
    label: 'Wiadomość',
    rules: { required: true },
    inputType: <Input.TextArea rows={8} />,
  },
];
const Contact = () => {
  const formRef = useRef<any>();
  const captchaRef = useRef<HCaptcha>(null);

  const [token, setToken] = useState<string>('');
  const [state, handleSubmit] = useForm('xwkjewea');

  useEffect(() => {
    if (state.succeeded) {
      message.success('Wiadomość została pomyślnie wysłana');
      formRef.current.resetFields();
    }
  }, [state.succeeded]);

  const onExpire = () => {
    setToken('');
    message.warning('Kod weryfikacyjny wygasł');
  };

  const onError = (err: string) => {
    setToken('');
    message.error(`Błąd weryfikacji antyspamowej: ${err}`);
  };

  return (
    <Wrapper>
      <Title>Skontaktuj się ze mną!</Title>
      <MessageForm
        ref={formRef}
        name='nest-messages'
        onFinish={(e: any) => {
          handleSubmit(e);
        }}
        validateMessages={validateMessages}
        size='large'
        layout='vertical'
      >
        {FormItems.map((item) => (
          <Form.Item
            key={item.name}
            name={['user', item.name]}
            label={item.label}
            rules={[item.rules]}
          >
            {item.inputType}
          </Form.Item>
        ))}

        <Form.Item>
          <HCaptcha
            // sitekey={process.env.REACT_APP_SITE_KEY!}
            sitekey='f3602de7-050d-47c3-9b8d-796b2910fb84'
            onVerify={setToken}
            onError={onError}
            onExpire={onExpire}
            ref={captchaRef}
          />
          <SendButton type='primary' htmlType='submit' disabled={!token}>
            Wyślij wiadomość
          </SendButton>
        </Form.Item>
      </MessageForm>
      <address>
        {Address.map((item) => (
          <AddressItemWrapper key={item.label}>
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
