import styled from 'styled-components'


export const MCForm = styled.form`
    display:flex;
    flex-direction:column;
    justify-content: nowrap;
    align-items:center;

`;
export const MCContainer = styled.div`
    display: block;

`
export const MCLabel = styled.label`
    display: inline-block;
    font-size:12px;s
    margin: 5px;
`;

export const MCInput = styled.input`
    ${'' /* width: 100%; */}
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;

`;
