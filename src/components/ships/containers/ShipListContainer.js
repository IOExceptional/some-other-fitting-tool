import styled from "styled-components";
import theme from "../../style/theme";

const ShipListContainer = styled.div`
    width: 250px;
    display: flex;
    background: #ccc;
    flex-direction: column;
    overflow: scroll;
    
    padding: ${PaddingDefault}
`;

export {
    ShipListContainer
};