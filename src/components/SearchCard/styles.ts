import styles from "styled-components";

export const SearchArea = styles.section`
    margin: 0 auto;
    max-width:  clamp(21.88rem, 6.39rem + 66.09vw, 45.63rem);

    form {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #FFF;
        padding: 10px 7px;
        border-radius: 10px;
        box-shadow: 0 1rem 1.875rem -0.625rem rgba(70,96,187,.2);


        input {
            width: 100%;
            border: none;
            font-size: 18px;
            padding: 7px;
        }

        input:focus {
            outline: none;
          }
    

        // .input {
        //     display: flex;
        //     align-items: center;
        //     width: 100

        //     input{
        //         background-color: transparent;
        //         border: none;
        //     }
            
        // }

        button {
            padding: 15px 25px;
            border: none;
            border-radius: 10px;
            font-size: 18px;
            font-weight: bold;
            background-color: #07f;
            color: #FFF;
            cursor: pointer;
        }

        button: hover {
            transition: all ease 0.4s;
            opacity: 0.5;
        }
    }

`;
