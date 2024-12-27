export default function Card({image,Fullname,Desgination,children,click,Class,Id}){


    return(
        <div className={Class} onClick={click} id={Id}>
                <div className="card">
                <img src={image} alt='contact' className="card-image"
                />
                <div className="card-body">
                    <h5 className="card-title">
                    <p className="card-title"> Full Name: {Fullname}</p>
                    </h5>
                    
                <p className="card-text"><b>Desgination: </b>{Desgination}</p>
                </div>
                
                </div>
        </div>
    )  
}