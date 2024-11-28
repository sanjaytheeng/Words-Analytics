import { useState } from "react"


export default function Warning({ showScriptWarning }) {
    if(!showScriptWarning) return null;
    return <p className="warning">'No "script" tag is allowed.'</p>  
}
