import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//If the user doesn't send authentication then we will consider the default value of authentication is true.
function Protected({children, authentication = true})
{
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status) //Asking user are you logged in or not.
    //useEffect is use to decide we have to login or not
    useEffect(() => {
        if(authentication && authStatus != authentication)
        {
            //It defines you are not authenticated
            navigate('/login')
        }
        else if(!authentication && authStatus !== authentication)
        {
            //It defines you are authenticated
            navigate('/')
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])
    return (
        loader ? <h1>Loading...</h1> : <>{children}</>
    )
}

export default Protected;