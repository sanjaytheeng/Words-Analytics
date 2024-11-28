import { useState } from "react";
import Warning from "./Warning";
import WarningAt from "./WarningAt";

export default function TextArea({ text, setText }) {
  // const [text, setText] = useState("");
  const [showScriptWarning, setShowScriptWarning] = useState(false);
  const [showAtWarning, setShowAtWarning] = useState(false);
  

  const handleChange = (event) => {
    let newText = event.target.value;
    if (newText.includes("<script>")) {
      setShowScriptWarning(true);
      newText = newText.replace(/<script>/g, "");
    } else {
      setShowScriptWarning(false);
    }
    
    if (newText.includes("@")) {
      setShowAtWarning(true);
      newText = newText.replace(/@/g, ""); 
    } else {
      setShowAtWarning(false);
    }
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea onChange={handleChange}
      placeholder="Enter your text"
      name="" rows={12} value={text} id=""></textarea>
      <Warning showScriptWarning={showScriptWarning} />
      <WarningAt showAtWarning={showAtWarning} />
    </div>
  )
}
