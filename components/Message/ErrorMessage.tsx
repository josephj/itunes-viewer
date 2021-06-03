import Message from './Message';

const ErrorMessage = () => (
  <Message
    iconSrc="/unavailable.svg"
    text="Oops! Something goes wrong. Please try again later"
  />
);

export default ErrorMessage;
