import React from 'react';

const footer = () => {
  let footerStyle ={
    position: "fixed",
    
    bottom: "5px",
    width: "100%"
  }
  return ( 
       <footer className="bg-dark text-white py-3" style={footerStyle}>
       <p className="text-center">
       Copyright &copy; MyTodosList.com
       </p>
       </footer>
  );
}

export default footer;

