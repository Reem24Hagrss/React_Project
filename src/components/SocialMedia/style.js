import styled from 'styled-components';

export const SocialMediaSection = styled.div `
    height: auto;
    overflow: hidden
`

export const Social = styled.div `
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background: ${ props => props.color ? props.color : '#fff' };
    @media (max-width:991px) {
        width: 100%;
        float: none;
    }
`

export const SocialIcon = styled.i `
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px;
    margin-top: 25px;
`

export const SocialParag = styled.p `
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
    float:left;
`

export const Span = styled.span `
    display: block;
    margin-bottom: 8px;
    font-weight: ${props => props.info2 ? 'normal' : 'default'};
`

// .social-media .social p span.info2 {
//     font-weight: normal
// }
