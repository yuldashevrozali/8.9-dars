import { useNavigate } from 'react-router-dom';

export default function Play() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/how');
  };

  return (
    <div className="play" onClick={handleClick}>
    </div>
  );
}
