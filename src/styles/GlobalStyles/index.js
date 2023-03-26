import { createGlobalStyle } from "styled-components";  

export default createGlobalStyle`

:root{
        --color-1: #5CB1F2;
        --color-2: #1c75bc ;
        --color-3: #4ACFEF ;
        --color-4: #737373 ;
        --color-5: #D9D9D9 ;
        --color-6: #252B42 ;
        --color-7: #74cae8 ;
        --color-8: #474a51 ;
     }

* {
    margin:0;
    padding:0;
    box-sizing: border-box;
}

html,body,#root{
    min-height: 100vh;
}

body {
    .main-bg {background: var(--color-6);}
    .header-bg { background: var(--color-6);} 
    .footer-bg { background: var(--color-8);} 
    .text-blue { color: var(--color-2);} 
    .title-color {color: var(--color-1);}
    .about-bg {background: white;}
}


h2{
    color:white;
    font-family: 'Martel', serif;
    font-size: 40px;
}

.square-card{
    background: #FFFFFF;
    border-radius: 5px;
    padding:30px ;    
    text-align: center;
    font-family: 'Martel', serif;
}

#footerMenu{
    background: #295C7A;
}

/* unvisited link */
a:link {
  color: white;
  text-decoration: none;
}

/* visited link */
a:visited {
  color: white;
}

/* mouse over link */
a:hover {
  color: var(--color-3);
  text-shadow: 1px 1px 2px black;
}

/* selected link */
a:active {
  color: var(--color-3);

}



@media (max-width:1199px) {
  .container {
    max-width: 932px;
  }
}

@media (max-width:991px) {
  .container {
    max-width: 708px;
  }
}

@media (max-width:767px) {
  .container {
    max-width: 516px;
  }


}

@media (max-width:575px) {
  .container {
    max-width: 100%;
    margin-left:0;
    margin-right: 0%;
  }
  h1{
    font-size:40px;
  }
  iframe{
    width:100%;
    height:auto;
  }
}

#drawer-menu {
    position: fixed;
    top: 0;
    left: -200px;
    bottom: 0;
    width: 200px;
    height: 100%;
    background: rgba(169, 169, 169, 0.767);
    color: rgb(0, 0, 0);
    padding: 30px;
  
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    -ms-transition: all 0.5s ease-out;
    -o-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  
  #menu-toggle:checked ~ #drawer-menu {
    left: 0;
  }
  
  #menu-toggle:checked ~ #drawer-overlay {
    display: block;
  }
  
  #drawer-close {
    position: absolute;
    top: 15px;
    right: 15px;
  }
  
  #drawer-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 200px;
    right: 0;
    bottom: 0;
    z-index: 1;
  }


`;

