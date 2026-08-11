function SubjectCard(props){
    return(
        <div>
            {props.name}
           <h5> Tasks: {props.tasks}</h5> 
          <h5>Completed: {props.Completed}</h5>  
        </div>
    )
}
export default SubjectCard;