import styled, { keyframes } from 'styled-components';

const BackDrop = ({ onClick }) => {
  return <StBackdrop onClick={onClick} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <StModal>
      <div>{children}</div>
    </StModal>
  );
};

const Modal = ({ children, onClick }) => {
  return (
    <>
      <BackDrop onClick={onClick} />
      <ModalOverlay>{children}</ModalOverlay>
    </>
  );
};

export default Modal;

const StBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

const SlideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StModal = styled.div`
  position: fixed;
  top: 20vh;
  left: 5%;
  width: 90%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: ${SlideDown} 300ms ease-out forwards;

  @media (min-width: 768px) {
    width: 40rem;
    left: calc(50% - 20rem);
  }
`;
