import React , { useState} from 'react';
function toggle(){
    const [isToggled, setIsToggled] = useState(true);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <>
            <button onClick={handleToggle}>je suis</button>
           {isToggled && (<p>je m'affiche sale chien</p>)}
        </>
    )
}
export default toggle;