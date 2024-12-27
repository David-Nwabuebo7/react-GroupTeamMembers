
 import {useEffect,useState} from "react";
 import "./App.css";
 import Card from "./members";
import FemaleProfile from './images/femaleProfile.jpg'
import Footer from "./footer";
import MaleProfile from './images/maleProfile.jpg'
import Notfound from "./NotFound";
import  Group from './GroupedTeamMembers'
import Nav from "./nav";
import Input from "./input";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function Full() {
  const [selectTeam,SetTeam]= useState( JSON.parse(localStorage.getItem('selectTeam'))||'TeamA'
    )
    const [employees, Setemployees] = useState( JSON.parse(localStorage.getItem('employeeList'))   || [
        {
            id: 1,
            fullName: "Bob Jones",
            designation: "JavaScript Developer",
            gender: "male",
            teamName: "TeamA"
          },
          {
            id: 2,
            fullName: "Jill Bailey",
            designation: "Node Developer",
            gender: "female",
            teamName: "TeamA"
          },
          {
            id: 3,
            fullName: "Gail Shepherd",
            designation: "Java Developer",
            gender: "female",
            teamName: "TeamA"
          },
          {
            id: 4,
            fullName: "Sam Reynolds",
            designation: "React Developer",
            gender: "male",
            teamName: "TeamB"
          },
          {
            id: 5,
            fullName: "David Henry",
            designation: "DotNet Developer",
            gender: "male",
            teamName: "TeamB"
          },
          {
            id: 6,
            fullName: "Sarah Blake",
            designation: "SQL Server DBA",
            gender: "female",
            teamName: "TeamB"
          },
          {
            id: 7,
            fullName: "James Bennet",
            designation: "Angular Developer",
            gender: "male",
            teamName: "TeamC"
          },
          {
            id: 8,
            fullName: "Jessica Faye",
            designation: "API Developer",
            gender: "female",
            teamName: "TeamC"
          },
          {
            id: 9,
            fullName: "Lita Stone",
            designation: "C++ Developer",
            gender: "female",
            teamName: "TeamC"
          },
          {
            id: 10,
            fullName: "Daniel Young",
            designation: "Python Developer",
            gender: "male",
            teamName: "TeamD"
          },
          {
            id: 11,
            fullName: "Adrian Jacobs",
            designation: "Vue Developer",
            gender: "male",
            teamName: "TeamD"
          },
          {
            id: 12,
            fullName: "Devin Monroe",
            designation: "Graphic Designer",
            gender: "male",
            teamName: "TeamD"
          }

    ])
    
   

    function updateTeam(e){
    
    SetTeam(e.target.value)
    
    }
    
    
     













const TeamCount = employees.filter((employee)=> employee.teamName === selectTeam).length






    useEffect(()=>{
  localStorage.setItem('employeeList',JSON.stringify(employees))
    },[employees])

    
useEffect(()=>{
  localStorage.setItem('selectTeam',JSON.stringify(selectTeam))

  
},[selectTeam])



// parseInt cinerts a string to an interger
 console.log(3.0 === parseInt('3'));
 
// i dont underestand this function
   function handleEmployeeCardClick(e) {

    const transformedEmployees= employees.map((info)=>info.id === parseInt( e.currentTarget.id) ? (info.teamName === selectTeam)?{...info,teamName:''}:{...info,teamName:selectTeam}:info);

    return  Setemployees(transformedEmployees)
   }

    const display = employees.map((items,id)=>{
        return(
            <Card 
            Id={items.id}
            Class={items.teamName === selectTeam ? 'standout':''}
            click={handleEmployeeCardClick}
            key={id}
            image={items.gender ==='male'? MaleProfile : FemaleProfile}
            Desgination={items.designation}
            Fullname={items.fullName}
            
            />
        )
    })

const[box, SetBox] = useState(false)

function handleBox(){
   SetBox((prev)=>{
     return !prev
   })
}

return(
  <Router>
    <nav className={box ? 'light':'dark'}> 
            <div className={box ? 'light':'dark'}>
                <div className="link">
                    
                  <Nav/>
                    
                </div>
                <div className="toggle-container">
                  <input
                  type="checkbox"
                  id="switch"
                  value={box}
                  onChange={handleBox}
                  className="box"         
                  />
                  <label htmlFor="switch">Toggle</label>
                  
                </div>
                <div className="Top">
                <h1>Team Member Allocation</h1>
                <h3> {selectTeam} has {TeamCount} { TeamCount > 1 ? 'Members ':'Member'}</h3>
                <Routes>
                <Route path="/" element={ <Input selectTeam={selectTeam} updateTeam={updateTeam}/>}>
                  
                </Route>
                </Routes>
               
               
                </div>
                
                </div>
    
            <hr/>
            <br/>
            <Routes>
              <Route path="/"
              element={
                <div className="row">
                <div  className={box ? 'light':'dark'}  >
                    <div className={box ? 'second':"card-collection"}  >
                      {display}
                    </div>
                    
                </div>
            
            </div>

              }
              >

              </Route>
                <Route path="/GroupedTeamMembers" element={<Group employee={employees} selectedTeam={selectTeam} TeamCount={selectTeam}   />} >
                </Route>  
              <Route path="*"element={<Notfound/>}></Route>
            </Routes>

            <div className='footer' >
                  <Footer/>
            </div>

        </nav>
  </Router>

)
}
export default Full;
