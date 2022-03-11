const classes = (names) =>{
    let out = names.join(" ")
    return out
}

const space = (h) =>{
    let sty = {height: h + "px;"}
    return(
        <div style={sty}>

        </div>
    )
}

module.exports ={
    classes,
    space
}