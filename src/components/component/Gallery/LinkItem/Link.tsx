import React from "react";
import styles from './Link.module.scss'
import { Link, useNavigate } from "react-router-dom";

type ButtonTypes = {
  children: React.ReactNode;
  id: string
}

const Button: React.FC<ButtonTypes> = ({children, id}) => {
  
  const navigate = useNavigate()
  const handler = () => navigate(`/gallery/${id}`, {replace: false})

    


  return (
    <Link to={`/gallery/${id}`}>
      <button type="button" onClick={handler} className={styles.button} id={id}>
        {children}
      </button>    
    </Link>      
  )
}

export default Button;