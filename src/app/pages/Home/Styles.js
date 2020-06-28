import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:0 45px;
    border-radius: 8px;
    
    h1{
        padding: 0 20px;
    }

    .multi-input{
        display: flex !important;

        div{
            width: 50%;
        }
    }
    
    .label-container{
        display: grid;
    }

    .input-width{
        width: 90% !important;
    }

    button{
        span{
            display: flex;
            align-items: center;
        }
    }

    footer{
      position: fixed;
      bottom: 8%;
      left: 0;
      width: 100%;
    }

`;
