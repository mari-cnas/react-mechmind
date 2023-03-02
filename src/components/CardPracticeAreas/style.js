import styled from 'styled-components'

export const AreasCardContainer = styled.div`
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

`

export const CardImg = styled.div`
background-image: url(${(props)=> props.image});
background-repeat: no-repeat;
background-size: contain;
background-position:center;
min-height:150px;
`

