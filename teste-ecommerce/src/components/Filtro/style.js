import styled from "styled-components";

export const FiltersContainer = styled.div`
    position: fixed;
    z-index: 0;
    width: 200px;
    height: 50%;
    margin: 7vh 3vh;
    background: #ffc500;
    display: grid;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    top: 0;
    transition: 0.3s ease-in-out ;
    left: ${({ isOpen }) => (isOpen ? '0' : '0')};

        @media screen and (max-width: 400px) {
            width: 100%;
        }
`;

export const ListContainer = styled.div`
   display: flex;
   justify-content: space-around;
   flex-wrap:wrap;
   padding: 2em 10em;
   background-color: #1c1c1c;
   *{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
   }
`