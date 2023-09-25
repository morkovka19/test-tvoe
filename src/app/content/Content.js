import {lenta} from '../constants';
import Lenta from '../lenta/Lenta';
import Advertising from '../advertising/Advertising';
import './content.css';
import Read from '../read/Read';
import Events from '../events/Events';

export default function Content(){
    return (
        <section className="content">
            <div className='content__block'>
                <Lenta events={lenta}/>
                <Advertising />
            </div>
            <Read />
            <Events />
        </section>
    )
}