
import React,{useState} from 'react'
import {makeStyles,Grid} from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles(theme=>({

    hourhand:{
        "--rotation" :0,
        position:"absolute",
        bottom: "50%",
        left :"50%",
        width:"3px",
        height:"30%",
        backgroundColor:"rgba(255,255,255,0.2)",
        borderTopLeftRadius: "35%",
        borderTopRightRadius: "35%",
        border:" 1px solid rgba(255,255,255,0.8)",
        zIndex:10,
        transformOrigin: "bottom",
        transform: "translate(-50%) rotate(calc(var(--rotation)*1deg))",
    },
    
    
    sechand:{
        "--rotation ": 0,
        position:"absolute",
        bottom: "50%",
        left :"50%",
        width:"3px",
        height:"40%",
        backgroundColor:"rgba(104, 185, 252,0.8)",
        borderTopLeftRadius: "35%",
        borderTopRightRadius: "35%",
        border:" 1px solid rgba(255,255,255,0.2)",
        zIndex:"10",
        transformOrigin: "bottom",
        transform: "translate(-50%) rotate(calc(var(--rotation)*1deg))"
    },
    
clock:{
    fontFamily: 'Balsamiq Sans',
    backgroundColor:"rgba(255, 255,255,0)",
    height:"200px",
    width:"200px",
    marginTop:"10px",
    borderRadius:"50%",
    border:"2px solid rgba(255,255,255,.1 )",
    position:"relative",
    '&::after':{
        position: "absolute",
    content:'""',
    width:"15px",
    height:"15px",
    top:"50%",
    left:"50%",
    backgroundColor: "rgba(104, 185, 252,0.8)",
    zIndex: "11",
    transform: "translate(-50%, -50%)",
    borderRadius:"50%"
    },

},
minhand:{
    "--rotation ":0,
    position:"absolute",
    bottom: "50%",
    left :"50%",
    width:"3px",
    height:"40%",
    backgroundColor:"rgba(255,255,255,0.2)",
    borderTopLeftRadius: "35%",
    borderTopRightRadius: "35%",
    border: "1px solid rgba(255,255,255,0.8)",
    zIndex:"10",
    transformOrigin: "bottom",
    transform: "translate(-50%) rotate(calc(var(--rotation)*1deg))"
},
clock_num:{
    '--var':"0",
    position:"absolute",
    width:"100%",
    height:"100%",
    color:"white",
    textAlign:"center",
    transform: "rotate(0deg)",
},
num1:{
    transform: "rotate(30deg)",
},

num2:{
    transform: "rotate(60deg)",
},
num3:{
    transform: "rotate(90deg)",
},
num4:{
    transform: "rotate(120deg)",
},
num5:{
    transform: "rotate(150deg)",
},
num6:{
    transform: "rotate(180deg)",
},
num7:{
    transform: "rotate(210deg)",
},
num8:{
    transform: "rotate(240deg)",
},
num9:{
    transform: "rotate(270deg)",
},
num10:{
    transform: "rotate(300deg)",
},
num11:{
    transform: "rotate(330deg)",
},
}
))


export default function Clock(props) {
    const [hourRef,setHourRef] = useState(null);
    const [minRef,setMinRef] = useState(null);
    const [secRef,setSecRef] = useState(null);

    const setClock = ()=>{
        const currDate= new Date()
        const secondsRatio = currDate.getSeconds()/60
        const minRatio = (secondsRatio+ currDate.getMinutes())/60
        const hoursRatio = (minRatio + currDate.getHours())/12
        setRotation(secRef,secondsRatio)
        setRotation(minRef,minRatio)
        setRotation(hourRef,hoursRatio)

    }    

    const setRotation =(element,rotationRatio)=>{
        element.style.setProperty('--rotation',rotationRatio*360)
    }

    if(hourRef,secRef,minRef !== null){
    setInterval(setClock,1000)
    setClock()}

    const classes  = useStyles()
    return (
        <Grid container item xs={12} justify="center" alignItems="center">
            <div className={clsx(classes.clock,"clock")}>
            <div className={classes.hourhand} ref={hourRef=>setHourRef(hourRef)}></div>
            <div className={classes.minhand} ref={minRef=>setMinRef(minRef)}></div>
            <div className={classes.sechand} ref={secRef=>setSecRef(secRef)}></div>
            {(props.withoutNumber)? <React.Fragment/>:<div>
            <div className={clsx(classes.clock_num, classes.num12)}>12</div>      
            <div className={clsx(classes.clock_num, classes.num1)}>1</div>
            <div className={clsx(classes.clock_num, classes.num2)}>2</div>
            <div className={clsx(classes.clock_num, classes.num3)}>3</div>
            <div className={clsx(classes.clock_num, classes.num4)}>4</div>
            <div className={clsx(classes.clock_num, classes.num5)}>5</div>
            <div className={clsx(classes.clock_num, classes.num6)}>6</div>
            <div className={clsx(classes.clock_num, classes.num7)}>7</div>
            <div className={clsx(classes.clock_num, classes.num8)}>8</div>
            <div className={clsx(classes.clock_num, classes.num9)}>9</div>
            <div className={clsx(classes.clock_num, classes.num10)}>10</div>
            <div className={clsx(classes.clock_num, classes.num11)}>11</div>
            </div>}
            
            </div>
        </Grid>
        
    )
}


