import React from "react";

//Every context is a provider so that UserContext is also a provider
const UserContext = React.createContext()

export default UserContext

//Components which are added in provider can access the state of anything through provider