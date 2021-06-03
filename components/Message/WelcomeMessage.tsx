import Message from './Message';
// @ts-ignore
import iconSrc from '../../public/search.svg';

const WelcomeMessage = () => (
  <Message
    iconSrc={iconSrc}
    text="Welcome! Please input some keywords for searching"
  />
);

export default WelcomeMessage;
