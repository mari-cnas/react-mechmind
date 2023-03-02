import styled from 'styled-components'

export const AreasContainer = styled.div`
h5{
    color:#252B42;
    font-family: 'Martel', serif;
    font-size: 16px;
    line-height:24px;
    letter-spacing:0.1px;
}
p{
    color:#737373;
    font-family: 'Open Sans', sans-serif;
    font-size:14px;
    line-height:20px;
    letter-spacing:0.2px;
}

`;
export const PaymentContainer = styled.div`
min-width: 300px;
max-width: 500px;
margin: auto;
display:flex;
flex-direction:column;
justify-content:color-interpolation-filters;

a{
   text-decoration: underline; 
}
  p {
  font-size: 1em;
  line-height: 1.75em;
  border-top: 3px solid;
  border-image: linear-gradient(to right, #743ad5 0%, #5CB1F2 100%);
  border-image-slice: 1;
  border-width: 3px;
  margin: 0;
  padding: 40px;
  counter-increment: section;
  position: relative;
  color: white;
  
  //numbers
  &:before {
    //content: counter(section);
    position: absolute;
    border-radius: 50%;
    padding: 10px;
    height: 1.25em;
    width: 1.25em;
    background-color: $black;
    text-align: center;
    line-height: 1.25em;
    color: $white;
    font-size: 1em;
  }
}
//odd number borders
p:nth-child(odd) {
  border-right: 3px solid;
  padding-left: 0;
  
  &:before {
    left: 100%; 
    margin-left: -20px;
  }
}
//even number borders
p:nth-child(even) {
  border-left: 3px solid;
  padding-right: 0;
  
  &:before {
    right: 100%; 
    margin-right: -20px;
  }
}
//handle first and last
p:first-child {
  border-top: 0;
  border-top-right-radius:0;
  border-top-left-radius:0;
}
p:last-child {
  border-bottom-right-radius:0;
  border-bottom-left-radius:0;
}
`;