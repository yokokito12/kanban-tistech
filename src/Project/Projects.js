import React, {Component} from 'react'

class Projects extends Component{


    constructor(props){

        super(props);

        this.state = {
        projects : [],
        projId : [],
        counter : 0
        };


        this.props.children.forEach((proj) => {
              
              
               
            this.state.projects.push(proj.props.kanbanPath);
            this.state.projId.push(proj.props.idProj);

        })

    }

    componentDidMount(){

        let documentLoadedTimer = setInterval(
            function(){
            if(document.readyState === "complete"){
                clearInterval(documentLoadedTimer);
                setInterval(kanbanRotateTimer,60000);
                setInterval(refreshInterval,60000);
            }
        },3000);
        
         let refreshInterval = setInterval(
            function(){
            if(document.readyState === "complete"){
                clearInterval(kanbanRotateTimer);
                setInterval(kanbanRefresh,300000);
            }
        },3000);
            
           
        let kanbanRefresh = () => {   
           window.location.reload();
        }
       
        let kanbanRotateTimer = () => {
            
            this.state.projId.forEach((iframeId) => {

                console.log("lalallalala" + iframeId)
                document.getElementById(iframeId).style.display = 'none';

            });
            
            let myCounterValue = this.state.counter; 

            let curIframeId = this.state.projId[this.state.counter];
            document.getElementById(curIframeId).style.display = '';

            myCounterValue++; 
            if(this.state.projId.length === myCounterValue){
                myCounterValue = 0;
            }
            
            this.setState({counter: myCounterValue});
            
        }

    }


    render(){
        return(<span>
            {this.props.children}
        </span>);
    }

}


export default Projects;