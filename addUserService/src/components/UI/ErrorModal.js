import styled from 'styled-components';
import Card from './Card';
import Button from './Button';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const Modal = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 0px;
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;

  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;

const Header = styled.header`
  background: #4f005f;
  padding: 1rem;

  h2 {
    margin: 0;
    color: white;
  }
`;

const Content = styled.div`
  padding: 1rem;
`;

const Footer = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const ErrorModal = ({ content, onOkay }) => {
  const onOkayHandle = () => onOkay();

  return (
    <Wrapper>
      <Card>
        <Modal>
          <Header>
            <h2>에러가 발생했습니다!</h2>
          </Header>
          <Content>
            <p>{content}</p>
          </Content>
          <Footer>
            <Button content="Okay" onClick={onOkayHandle} />
          </Footer>
        </Modal>
      </Card>
    </Wrapper>
  );
};

export default ErrorModal;
