import { useState } from "react"





export default function About({employee,selectedTeam,TeamCount}) {
 const[GroupedEmployees,setGroupData]=useState(groupTeamMembers())

function groupTeamMembers() {
    let teams =[]
    
    let teamAMembers = employee.filter((employee)=>{
        return employee.teamName === 'TeamA'
    })
    let teamA ={team:'TeamA',members:teamAMembers , collapsed:selectedTeam ==='TeamA'? false : true}
   
    
   let teamBMembers = employee.filter((employee)=>{
    return employee.teamName === 'TeamB'
})
        let teamB ={team:'TeamB',members:teamBMembers , collapsed:selectedTeam ==='TeamB'? false : true}
       


        let teamCMembers = employee.filter((employee)=>{
            return employee.teamName === 'TeamC'
        })
        let teamC ={team:'TeamC', members:teamCMembers , collapsed:selectedTeam ==='TeamC'? false : true}


        

        
        let teamDMembers = employee.filter((employee)=>{
            return employee.teamName === 'TeamD'
        })
        let teamD ={team:'TeamD', members:teamDMembers , collapsed:selectedTeam ==='TeamD'? false : true}
       
   
 
    teams = [teamA,teamB,teamC,teamD]
    


return teams;



   
}


function handleTeamClick(e) {
     let TransformedGroupData = GroupedEmployees.map((groupedData)=>{
return groupedData.team === e.currentTarget.id  ?{...groupedData, collapsed: !groupedData.collapsed} :groupedData
    })


  setGroupData(TransformedGroupData)
  TeamCount(e.currentTarget.id)

}





 let teamMaped = GroupedEmployees.map((teams,id)=>{
return(
<div key={id} style={{cursor:'pointer'}} className="page2-card">
    <fieldset>
    <h4 id={teams.team} className="card-header" onClick={handleTeamClick}>
            Team Name: {teams.team}
            </h4>
                <div id={'collapse_' + teams.team } className={teams.collapsed === true ?'collapsed' : ''}>
               

                    
                     
{
    teams.members.map((member,id)=>{
 return (
    <div className="insideMap" key={id}>
     <h5 className="card-title">
        <span className="text">
            Full Name: {member.fullName}
        </span>
        <p> Desgination:  {member.designation}</p>
<br/>
     </h5>

    </div>
 )
    })
}
                </div>
    </fieldset>
           
</div>
) 
 })



    return(
      
     <div className="container">
           
             <br/>
            {teamMaped}
        </div>
    )
    
}