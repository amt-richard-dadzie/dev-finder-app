import styles from "styled-components";

export const Header = styles.header`
    display: flex;
    justify-content: space-between;
    max-width:  clamp(21.88rem, 6.39rem + 66.09vw, 45.63rem);
    margin: 0 auto;
    
    .themeSwitch {
        display: flex;
        align-items: center;
        gap: 0 10px;
        cursor: pointer;
    }
`;
