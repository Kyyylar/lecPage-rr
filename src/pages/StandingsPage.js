import React, {Component} from 'react';
import '../styles/StandingsPage.css'
class StandingsPage extends Component {
    state = {
        standings: ""
    }
    componentDidMount() {
        fetch('data/standings.json')
        .then(response => response.json())
        .then(data => 
            {
                this.setState({
                    standings: data.teams
                })
            })
    }
    sortTeams() 
    {
        let teams = this.state.standings;
        let temp;
        let flag = true;
        for(let i=0; i<teams.length-1; i++)
        {
            let j = i;
            flag = true;
            while(flag)
            {   
                if(j >= 0 && teams[j].place > teams[j+1].place)
                {
                    temp = teams[j+1];
                    teams[j+1] = teams[j];
                    teams[j] = temp;
                }
                else flag = false;
                j-=1;
            }
        }
    }
    render() {
        this.sortTeams();
        console.log(this.state.standings);
        const places = [...this.state.standings].map((team, index) => 
        {
            let class_value = "";
            if(team.place === "1")
            {
                class_value = "gold";
            }
            else if(team.place === "2")
            {
                class_value = "silver";
            }
            else if(team.place === "3")
            {
                class_value = "bronze";
            }
            return <div key={team.id} className={class_value}>{ index === 0 ? team.place : this.state.standings[index-1].place === team.place ? "" : team.place}</div>
        });
        const teams = [...this.state.standings].map(team => <div key={team.id}>{team.name}</div>
        )
        const wins = [...this.state.standings].map(team => <div key={team.id}>{team.wins}</div>)
        const losses = [...this.state.standings].map(team => <div key={team.id}>{team.losses}</div>)
        const last_game = [...this.state.standings].map(team => <div style={team.last_result === "Wygrana" ? {backgroundColor: "limegreen"}: {backgroundColor: "red"}}key={team.id}>{`${team.last_result} na ${team.last_opponent}`}</div>)
        const next_game = [...this.state.standings].map(team => <div key={team.id}>{`${team.next_opponent} | ${team.next_match_date} |`}</div>)
        const result = [...this.state.standings].map(team => <div key={team.id}>{parseInt(team.wins) - parseInt(team.losses)}</div>)
    return ( 
        <div className="bg">
            <div className="standings">
                <div className="col place">
                    <div>Miejsce</div>
                    {places}
                </div>
                <div className="col organization">
                    <div>Drużyna</div>
                    {teams}
                </div>
                <div className="col wins">
                    <div>Wygrane</div>
                    {wins}
                </div>
                <div className="col losses">
                    <div>Przegrane</div>
                    {losses}
                </div>
                <div className="col res">
                    <div>Bilans +/-</div>
                    {result}
                </div>
                <div className="col lastgame">
                    <div>Ostatnie spotkanie</div>
                    {last_game}
                </div>
                <div className="col nextgame">
                    <div>Następne spotkanie</div>
                    {next_game}
                </div>
            </div>
        </div>
    );
    }
}
 
export default StandingsPage;