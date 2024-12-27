export default function Footer(){
    let time = new Date()
    return(
        <footer className="container">
       <div>
        <h5>Team Member Allocation App - {time.getFullYear()}</h5>
       </div>

        </footer>
    )

}