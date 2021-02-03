import React, {Component} from 'react';
import Start from '../components/Start';
import astralis from '../images/logos/Astralis.png';
import excel from '../images/logos/Excel.png';
import fnatic from '../images/logos/Fnatic.png';
import g2 from'../images/logos/G2.png';
import mad from'../images/logos/MAD.png';
import misfits from'../images/logos/Misfits.png';
import rogue from'../images/logos/Rogue.png';
import schalke from '../images/logos/Schalke.png';
import sk from'../images/logos/SK.png';
import vitality from'../images/logos/Vitality.png';
import '../styles/HomePage.css';
class HomePage extends Component {
    state = {
        startingPage: true,
    }
    handleClick = () =>
    {
        setTimeout(() => {
        this.setState({
            startingPage: false,
        })
         document.querySelector('div.home').classList.add('clicked')
     }, 500);
    }
    render()
    {
        return (
            <> 
            <div className="home">
            {this.state.startingPage ? <Start click={this.handleClick} /> :
                <>
                    <article>
                        <p>Jest to strona poświęcona drużynom z europejskiej ligi LEC rywalizującym w grzę League Of Legends. Tutaj masz okazję bliżej poznać każdą z drużyn oraz każdego z zawodników, a także prześledzić dotychczasowe transfery poszczególnych organizacji. Na stronie jest również możliwość prześledzenia aktualnej tabeli LEC.</p>
                    </article>
                    <div className="teamlist">
                        <h2>Lista drużyn</h2>
                        <ul>
                            <li><img src={astralis} alt="astralis"/><h4>Astralis</h4></li>
                            <li><img src={excel} alt="excel"/><h4>EXCEL</h4></li>
                            <li><img src={fnatic} alt="fnatic"/><h4>Fnatic</h4></li>
                            <li><img src={g2} alt="g2"/><h4>G2 Esports</h4></li>
                            <li><img src={mad} alt="mad"/><h4>MAD Lions</h4></li>
                            <li><img src={misfits} alt="misfits"/><h4>Misfits Gaming</h4></li>
                            <li><img src={rogue} alt="rogue"/><h4>Rogue</h4></li>
                            <li><img src={schalke} alt="schalke"/><h4>FC Schalke 04 Esports</h4></li>
                            <li><img src={sk} alt="sk"/><h4>SK Gaming</h4></li>
                            <li><img src={vitality} alt="vitality"/><h4>Team Vitality</h4></li>
                        </ul>
                    </div>
                    </>
                }
                </div>
            </>
        );
    }
    }
 
export default HomePage;