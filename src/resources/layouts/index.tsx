import 'bootstrap/dist/css/bootstrap.min.css';
import { CardBody } from '../UI/organisms/card';
import img from  '../../assets/img/ejemplo.jpg';
import img2 from  '../../assets/img/panorama.jpg';
import img3 from  '../../assets/img/person.jpg';

export const Index = () => {
  return (
    <div className='row text-white bg-black'>
       <CardBody url={img} />
       <CardBody url={img2} />
       <CardBody url={img3} />
    </div>

  )
}
