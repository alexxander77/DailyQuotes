import styled from 'styled-components'

import '@fontsource/lancelot'

const Quote = (props) => {

    return (
        <div className={props.className}>
            <StyledUpperQuote
                className="upper-quote"
            />
            <StyledContent
                className="quote-content"
                text={props.text}
            />
            <StyledLowerQuote
                className="lower-quote"
            />
            <StyledAuthor
                className="quote-author"
                author={props.author}
            />
        </div>
        // <p className={props.className}>Joe Terry</p>
        // <p className={props.className}>{props.text}</p>
    )
}

const UpperQuote = (props) => {
    return (
        <text className={props.className}>“</text>
    )
}

const LowerQuote = (props) => {
    return (
        <text className={props.className}>,,</text>
    )
}

const Content = (props) => {
    return (
        <text className={props.className}>{props.text}</text>
    )
}

const Author = (props) => {
    return (
        <div className={props.className}>-{props.author}-</div>
    )
}

const StyledAuthor = styled(Author)`
    position: absolute;
    width: 400px;
    height: 60px;
    left: 0px;
    top: 290px;

    font-family: 'Lancelot';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 33px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    color: #000000;

`
const StyledContent = styled(Content)`
    position: absolute;
    width: 300px;
    height: 267px;
    left: 50px;
    top: 39px;

    font-family: 'Lancelot';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 33px;

    color: #000000;
`

const StyledQuote = styled(Quote)`

    position: absolute;
    width: 400px;
    height: 350px;
    left: 200px;
    top: 106px;

    background: #FFFFFF;
    border-radius: 15px;


`

const StyledUpperQuote = styled(UpperQuote)`
    position: absolute;
    width: 48px;
    height: 106px;
    left: 2px;
    top: 0px;

    font-family: 'Lancelot';
    font-style: normal;
    font-weight: 400;
    font-size: 96px;
    line-height: 106px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
`

const StyledLowerQuote = styled(LowerQuote)`
    position: absolute;
    width: 37px;
    height: 106px;
    left: 350px;
    top: 200px;

    font-family: 'Lancelot';
    font-style: normal;
    font-weight: 400;
    font-size: 96px;
    line-height: 106px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
`

export default StyledQuote