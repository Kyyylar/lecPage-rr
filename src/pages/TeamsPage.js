import React, {Component} from 'react';
import TeamPage from '../components/TeamPage';
import {Link} from 'react-router-dom';
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
import '../styles/TeamsPage.css'
const logoTable = [
    {src: astralis, active: false, alt: 'Astralis'},
    {src: excel, active: false, alt: 'Excel'},
    {src: fnatic, active: false, alt: 'Fnatic'},
    {src: g2, active: false, alt: 'G2 Esports'},
    {src: mad, active: false, alt: 'MAD Lions'},
    {src: misfits, active: false, alt: 'Misfits Gaming'},
    {src: rogue, active: false, alt: 'Rogue'},
    {src: schalke, active: false, alt: 'FC Schalke 04 Esports'},
    {src: sk, active: false, alt: 'SK Gaming'},
    {src: vitality, active: false, alt: 'Team Vitality'},
];

class TeamsPage extends Component {
    state = {
        activeLogo: false,
        teamsInfo: "",
    }
    handleLogoClick = (e) =>
    {
        const index = logoTable.findIndex(logo => {
        return logo.alt === e.target.alt});
        this.changeOrder(index);
        this.setState({
            activeLogo: e.target.alt,
        })
    }
    handleArrowClick = (arrow) =>
    {
        if(arrow === 'right')
        {
            this.changeOrder(5);
            this.setState({
            activeLogo: logoTable[4].alt,
            })
        }
        else if(arrow === 'left')
        {
            this.changeOrder(3);
            this.setState({
            activeLogo: logoTable[4].alt,
            })
        }
    }
    changeOrder = (index) =>
    {
        if(index!==4 && index<4)
        {
            const temp = logoTable[9];
            for(let i=9; i>=0; i--)
            {
                logoTable[i] = logoTable[i-1]; 
            }
            logoTable[0] = temp;
            this.changeOrder(index+1);
        }
        else if(index!==4 && index>4)
        {
            const temp = logoTable[0];
            for(let i=0; i<9; i++)
            {
                logoTable[i] = logoTable[i+1]; 
            }
            logoTable[9] = temp;
            this.changeOrder(index-1);
        }
        else return true;
    }
    updateLogos() {
        const logos = logoTable.map((logo,index) => {
            if(this.state.activeLogo)
            {
                if(index === 4)
                {
                    return <Link className="active" key={logo.alt} to={`/teams/${logo.alt}`}><img src={logo.src} alt={logo.alt} onClick={this.handleLogoClick}></img></Link>
                }
                else if(index === 9)
                {
                    return <Link style={{display: 'none'}} key={logo.alt} to={`/teams/${logo.alt}`}><img key={logo.alt} src={logo.src} alt={logo.alt} onClick={this.handleLogoClick}></img></Link>
                }
            }
            return <Link key={logo.alt} to={`/teams/${logo.alt}`}><img src={logo.src} alt={logo.alt} onClick={this.handleLogoClick}></img></Link>
            });
            return logos;
    }
    getTeam() {
        const teamIndex = [...this.state.teamsInfo].findIndex(team => team.name === this.state.activeLogo)
        return this.state.teamsInfo[teamIndex];
    }
    componentDidMount() {
        fetch('data/teams.json')
        .then(response => response.json())
        .then(data => 
            {
                this.setState({
                    teamsInfo: data.teams,
                })
            })
        if(this.state.activeLogo === false && window.location.pathname !== '/teams')
        {
            window.location.pathname = '/teams';
        }
    }
    render() {
        const logos = this.updateLogos();
        return ( 
            <div className="teams">
                <div className="left arrow" onClick={() => this.handleArrowClick('left')}><i className="fas fa-caret-left"></i></div>
                <nav>
                    {logos}
                </nav>
                <div className="right arrow" onClick={() => this.handleArrowClick('right')}><i className="fas fa-caret-right"></i></div>
                {this.state.activeLogo ? <TeamPage src={logoTable[4].src} alt={this.state.activeLogo} info={this.getTeam()}/> :
                <div className="team">
                    <h1>Poznaj drużyny europejskiej ligi LEC</h1> 
                </div>}
            </div>
         );
    }
}
 
export default TeamsPage;