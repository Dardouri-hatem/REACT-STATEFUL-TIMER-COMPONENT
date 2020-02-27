import React from 'react';



class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        seconds : 0,
        minutes :0,
        hours : 0,
        timeStopped:true,
    }
}
    StartTimer=()=>{
    if(!this.state.timeStopped){
       clearInterval(this.Myinterval)
       this.setState({
           timeStopped:true
       })
    }else
    this.Myinterval= setInterval(() => {
        if (this.state.seconds !== 59){
        this.setState({
            
            seconds : this.state.seconds + 1
        })
    }else{
        this.setState({
            
            seconds : 0,
            minutes : this.state.minutes+1
        }) 
    }

    if (this.state.minutes === 60){
        this.setState({
            
            minutes : 0,
            hours : this.state.hours+1
        }) 
    }

    this.setState({
            
        timeStopped : false
    })

    }, 1000)};
   
    StoptTimer =()=>{
        clearInterval(this.Myinterval)
        this.setState({
            
     seconds : 0,
     hours:0,
     minutes:0,
     timeStopped:true,
})
}

    
     
    render() {
        return(
            <div className="time">
                <h1>{String(this.state.hours).padStart(2,"0")} : {String(this.state.minutes).padStart(2,"0")} : {String(this.state.seconds).padStart(2,"0")}</h1>
                <button onClick={this.StartTimer}> Start </button> <button onClick={this.StoptTimer}> Reset </button>
            </div>
        )
    }
}

export default Time