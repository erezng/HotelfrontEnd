import { createContext,useState } from 'react';
import { AuthContextType, ChildProps } from '../@types'

  const initialState:AuthContextType={
    isLoggedIn:false,
    login(username,email,token){},
    logout(){}
  };

  const AuthContext=createContext<AuthContextType>(initialState);

  const AuthContextProvider=({children}:ChildProps)=>{
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState<string|undefined>(undefined);
    const [email, setEmail] = useState<string|undefined>(undefined);
    const [token, setToken] = useState<string|undefined>(undefined);

    const login=(username:string,email:string,token:string)=>{
      setIsLoggedIn(true);
      setUsername(username);
      setEmail(email);
      setToken(token);
    }    
    const logout=()=>{
      setIsLoggedIn(false);
      setUsername(undefined);
      setEmail(undefined);
      setToken(undefined);
    }
    const contextValues={isLoggedIn,username,email,token,login,logout}
  
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
    )
  }
export {AuthContext,AuthContextProvider}
export default AuthContext