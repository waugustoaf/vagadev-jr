import { rgba } from "polished";

export const modalStyles = backgroundColor => ({
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
  },
  overlay: {
    backgroundColor: rgba(backgroundColor, 0.4),
  },
});