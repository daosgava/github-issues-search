import React, { ReactElement } from 'react';
import styled from 'styled-components';

const title = 'Issues · facebook/react · GitHub 🤓';

const Header = styled.div`
    align-items: center;
    color: dodgerblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 200px 0 20px 0;
`;

const HeaderComponent = (): ReactElement => (<Header><h1>{title}</h1></Header>);

export default HeaderComponent;
