import Message from './Message';
// @ts-ignore
import iconSrc from '../../public/unavailable.svg';

const ErrorMessage = () => (
  <Message
    iconSrc={iconSrc}
    text="Oops! Something goes wrong. Please try again later"
  />
);

export default ErrorMessage;
