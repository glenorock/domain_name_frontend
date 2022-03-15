const classes = (names) =>{
    let out = names.join(" ")
    return out
}

const space = (h) =>{
    let sty = {height: h + "px"}
    return(
        <div style={sty}>

        </div>
    )
}

const vLine = () =>{
    return(
        <div className="vL">
            
        </div>
    )
}

const hLine = () =>{
    return(
        <div className="hL">

        </div>
    )
}

module.exports ={
    classes,
    space,
    vLine,
    hLine
}