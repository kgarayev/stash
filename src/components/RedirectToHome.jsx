import React, {useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

// This component will redirect user back to the home page
const RedirectToHome = () => {

    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
      navigate("/");
      setIsLoading(false);
    }, []);
    
    if(isLoading) {
        return <Loading/>
    }
    return null;  // Render nothing
  }

  export default RedirectToHome;