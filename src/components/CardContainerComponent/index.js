import React from "react";





function CardContainerComponent(props) {
    return (
        <div>
            <div className="card mb-3 col-md-4" style={{minHeight:"260px", maxWidth: "300px", flex: "1"}}>
                <a href={props.liveApp}>
                    <img src={props.img} className="card-img" style={{paddingTop: "1em"}} alt="..." />
                </a>
                <div className="card-body">
                    <h5 className="card-title" style={{textAlign:"center"}}>{props.title}<a href={props.repo}><i
                        className="fab fa-github p-2 text-success"></i></a></h5>
                </div>
            </div>
        </div>

      
    );
}

export default CardContainerComponent;
