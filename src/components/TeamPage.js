import React, {Component} from 'react';
import '../styles/TeamPage.css';
class TeamPage extends Component {
    checkpoints = [false, false, false, false, false, false];
    add = 0;
    rost20;
    rost21;
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    componentDidUpdate() {
        this.checkpoints = [false, false, false, false, false, false];
        this.removeClasses();
    }
    removeClasses = () => {
        document.querySelector('section.third').classList.remove('active');
        document.querySelectorAll('div.player').forEach(div => div.classList.remove('active'));
    }
    handleScroll = () => 
    {
        const divs = document.querySelectorAll('div.player');
        const sectionTwoHeight = document.querySelector('section.second').offsetHeight;
        const sectionTwoTop = document.querySelector('section.second').offsetTop;
        const sectionThreeHeight = document.querySelector('section.third').offsetHeight;
        if(window.scrollY > sectionTwoHeight + sectionTwoTop)
        {
            if(this.checkpoints[0] === false)
            {
                console.log("1");
                document.querySelector('section.third').classList.add('active');
                this.add = sectionTwoHeight + sectionTwoTop;
                console.log(this.add);
                this.checkpoints[0] = true;
            }
            else if(this.checkpoints[1] === false && window.scrollY > this.add + sectionThreeHeight + 200)
            {
                console.log("2");
                document.querySelector('section.fourth div.player:nth-child(1)').classList.add('active');
                this.checkpoints[1] = true;
                this.add += sectionThreeHeight + 300;
                    console.log(this.add);
            }
            else if(window.scrollY > this.add + divs[0].offsetHeight + 200 && this.checkpoints[2] === false && this.checkpoints[1] === true)
            {
                console.log("3");
                document.querySelector('section.fourth div.player:nth-child(2)').classList.add('active');
                this.add +=  + divs[0].offsetHeight + 200;
                console.log(this.add);
                this.checkpoints[2] = true;
            }
            else if(window.scrollY > this.add + divs[1].offsetHeight + 200 && this.checkpoints[3] === false && this.checkpoints[2] === true)
            {
                console.log("4");
                document.querySelector('section.fourth div.player:nth-child(3)').classList.add('active');
                this.add += divs[1].offsetHeight + 200;
                console.log(this.add);
                this.checkpoints[3] = true;
            }
            else if(window.scrollY > this.add + divs[2].offsetHeight + 200 && this.checkpoints[4] === false && this.checkpoints[3] === true)
            {
                console.log("5");
                document.querySelector('section.fourth div.player:nth-child(4)').classList.add('active');
                this.add += divs[2].offsetHeight + 200;
                console.log(this.add);
                this.checkpoints[4] = true;
            }
            else if(window.scrollY > this.add + divs[3].offsetHeight + 200 && this.checkpoints[5] === false && this.checkpoints[4] === true)
            {
                console.log("6");
                document.querySelector('section.fourth div.player:nth-child(5)').classList.add('active');
                this.checkpoints[5] = true;
            }
        }
    }
    render() {
    this.rost20 = [...this.props.info.roster_2020].map((player, index) => 
    <li key={index} style={player === this.props.info.roster_2021[index] ? null : {backgroundColor: 'red'}}><p>{player}</p></li>);
    this.rost21 = [...this.props.info.roster_2021].map((player, index) => 
    <li key={index} style={player === this.props.info.roster_2020[index] ? null : {backgroundColor: 'green'}}><p>{player}</p></li>);
    return ( 
        <>
            <section className="first teampage active">
                <div className="info">
                    <div className="logo"><img src={this.props.src} alt={this.props.alt}/></div>
                        <p>
                            Nazwa drużyny: <span>{this.props.info.name}</span><br/>
                            Data założenia: <span>{this.props.info.date}</span><br/>
                            Region drużyny: <span>{this.props.info.region}</span><br/>
                            Lokalizacja: <span>{this.props.info.location}</span>         
                        </p>
                </div>
            </section>
            <section className="second teampage active">
                <article>
                        <h2>{this.props.info.article}</h2>
                </article>
            </section>
            <section className="third teampage">
                <div className="zero">
                    <h2>2020</h2>
                    <ul>
                       {this.rost20}
                    </ul>
                </div>
                <div className="one">
                    <h2>2021</h2>
                    <ul>
                        {this.rost21}
                    </ul>
                </div>
            </section>
            <section className="fourth teampage">
                <div className="player">
                    <div className="logo"></div>
                    <h1>{this.props.info.players_desc.top.nick}</h1>
                    <p>Imię i nazwisko: <span>{this.props.info.players_desc.top.name}</span></p>
                    <p>Kraj pochodzenia: <span>{this.props.info.players_desc.top.country}</span></p>
                    <p>Poprzednia drużyna: <span>{this.props.info.players_desc.top.prev_team}</span></p>
                    <p>Liga poprzedniej drużyny: <span>{this.props.info.players_desc.top.prev_team_league}</span></p>
                    <p className="desc">{this.props.info.players_desc.top.desc}</p>
                </div>
                <div className="player">
                    <div className="logo"></div>
                    <h1>{this.props.info.players_desc.jungle.nick}</h1>
                    <p>Imię i nazwisko: <span>{this.props.info.players_desc.jungle.name}</span></p>
                    <p>Kraj pochodzenia: <span>{this.props.info.players_desc.jungle.country}</span></p>
                    <p>Poprzednia drużyna: <span>{this.props.info.players_desc.jungle.prev_team}</span></p>
                    <p>Liga poprzedniej drużyny: <span>{this.props.info.players_desc.jungle.prev_team_league}</span></p>
                    <p className="desc">{this.props.info.players_desc.jungle.desc}</p>
                </div>
                <div className="player">
                    <div className="logo"></div>
                    <h1>{this.props.info.players_desc.mid.nick}</h1>
                    <p>Imię i nazwisko: <span>{this.props.info.players_desc.mid.name}</span></p>
                    <p>Kraj pochodzenia: <span>{this.props.info.players_desc.mid.country}</span></p>
                    <p>Poprzednia drużyna: <span>{this.props.info.players_desc.mid.prev_team}</span></p>
                    <p>Liga poprzedniej drużyny: <span>{this.props.info.players_desc.mid.prev_team_league}</span></p>
                    <p className="desc">{this.props.info.players_desc.mid.desc}</p>
                </div>
                <div className="player">
                    <div className="logo"></div>
                    <h1>{this.props.info.players_desc.adc.nick}</h1>
                    <p>Imię i nazwisko: <span>{this.props.info.players_desc.adc.name}</span></p>
                    <p>Kraj pochodzenia: <span>{this.props.info.players_desc.adc.country}</span></p>
                    <p>Poprzednia drużyna: <span>{this.props.info.players_desc.adc.prev_team}</span></p>
                    <p>Liga poprzedniej drużyny: <span>{this.props.info.players_desc.adc.prev_team_league}</span></p>
                    <p className="desc">{this.props.info.players_desc.adc.desc}</p>
                </div>
                <div className="player">
                    <div className="logo"></div>
                    <h1>{this.props.info.players_desc.support.nick}</h1>
                    <p>Imię i nazwisko: <span>{this.props.info.players_desc.support.name}</span></p>
                    <p>Kraj pochodzenia: <span>{this.props.info.players_desc.support.country}</span></p>
                    <p>Poprzednia drużyna: <span>{this.props.info.players_desc.support.prev_team}</span></p>
                    <p>Liga poprzedniej drużyny: <span>{this.props.info.players_desc.support.prev_team_league}</span></p>
                    <p className="desc">{this.props.info.players_desc.support.desc}</p>
                </div>
            </section>
        </>
     );
    }
}
 
export default TeamPage;
