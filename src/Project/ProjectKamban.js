import React, {Component} from 'react'

class ProjectKamban extends Component{

    constructor(props){

        super(props);
        this.state = {a: null};
        //console.log(props);
        /*
        setInterval(function(){
            console.log("Mostrando Kanban");
        },3000);
        */

    }
    
    componentDidMount(){

        //document.getElementById("novaIframe").style.position = "absolute";
        //document.getElementById("novaIframe").style.height = "100%";
        //document.getElementById("novaIframe").style.top = 0;
        //document.getElementById("novaIframe").style.left = 0;

        //console.log("Carregou a página");
        //console.log(loadedPages);

    }


    render(){
        return(
            <iframe id={this.props.idProj}
              width="100%" name="Iframe Principal"
              frameBorder="0"
              title="Main Iframe"
              style={{position: 'absolute', height: '100%', top:0, left: 0}}
              src={this.props.kanbanPath} 
              >
            </iframe>            
        )
    }


}

export default ProjectKamban;
