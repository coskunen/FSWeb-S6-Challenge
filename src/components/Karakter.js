// Karakter bileşeniniz buraya gelecek

import { useState } from "react";

export default function(char){
    const [expanded , setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) =>{
            setExpanded(isExpanded ? panel : false);
    
    }
    return(
        <div>
            {char.name}
            Name : {char.name}
            Height : {char.height}
        </div>
    );
}