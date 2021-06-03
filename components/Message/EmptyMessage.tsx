import Message from './Message';
// @ts-ignore
import iconSrc from '../../public/info.svg';

const EmptyMessage = () => (
  <Message
    iconSrc={iconSrc}
    text="There is nothing. Please try to use another keyword"
  />
);

export default EmptyMessage;
