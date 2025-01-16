import { useEffect } from "react";

const useClickOutSide = (ref,cb) => {
    useEffect(() => {
        function myClickOutFunct(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                cb()
            }
        }

        document.addEventListener('mousedown', myClickOutFunct);

        return () => {
            document.removeEventListener('mousedown', myClickOutFunct);
        }
    },[ref,cb])
    
}
 
export default useClickOutSide;