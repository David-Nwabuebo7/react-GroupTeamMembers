 export default function Input({updateTeam,selectTeam}) {
    return(
        <nav>
               <select onChange={updateTeam} className="team" value={selectTeam}>
                
                <option value='TeamA'>TeamA</option>
                <option value='TeamB'>TeamB</option>
                <option value='TeamC'>TeamC</option>
                <option value='TeamD'>TeamD</option>
                </select>
        </nav>
    )
 }