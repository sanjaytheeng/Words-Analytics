import { useState } from "react"

export default function WarningAt({ showAtWarning }) {
    if(!showAtWarning) return null;
    return <p className="warning">'No @ is allowed.'</p>  
}
