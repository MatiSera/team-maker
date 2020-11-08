import React from "react";
import Logo from "../Logo/Logo";
import { ReactComponent as Write } from "../../assets/form-to-complete.svg";
import { ReactComponent as RandomVector } from "../../assets/random-vector.svg";
import { ReactComponent as Social } from "../../assets/social.svg";
import { ReactComponent as Isotipo } from "../../assets/isotipo.svg";
import './Home.css';
import Button from "../commons/Button/Button";

const Home = () => {
    return (
        <div>
            <Logo />
            <div className="steps">
                <div className='steps__vector'>
                    <Write width={383} height={259} />
                    <p className='vector__text'>Escribe el nombre de las personas que van a participar</p>
                </div>
                <div className='steps__vector'>
                    <RandomVector width={383} height={259} />
                    <p className='vector__text'>Team Maker se encarga de mezclarlos aleatoriamente</p>
                </div>
                <div className='steps__vector'>
                    <Social width={383} height={259} />
                    <p className='vector__text'>Compartí el resultado en donde quieras</p>
                </div>
            </div>
            <div className='footer'>
                <div className="footer__item">
                    <Isotipo width={90} height={70} />
                </div>
                <div className="footer__item">
                    <Button text={'Próximamente'} backgroundColor={'#e89f64'} color='white' disabled/>
                </div>
            </div>
        </div>
    );
};

export default Home;
