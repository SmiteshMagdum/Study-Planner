function SubjectCard(props){
    return(
        <div>
            {props.name}
           <h4> Tasks: {props.tasks}</h4> 
          <h4>Completed: {props.Completed}</h4>  
          <h4>Progress: {props.progress}%</h4>
        </div>
    )
}
export default SubjectCard;