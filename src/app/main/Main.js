import './main.css';
import Content from '../content/Content';
import Navbar from '../navbar/Navbar';

export default function Main(){
    return (
        <main className='main'>
            <Navbar />
            <Content />
        </main>
    )
}