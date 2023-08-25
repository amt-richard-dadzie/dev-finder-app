import styles from "styled-components";

export const Header = styles.header`
*{
    margin: 0;
    padding: 0;
}
    display: flex;
    justify-content: space-between;

    .themeSwitch {
        display: flex;
        align-items: center;
        gap: 0 10px;
        cursor: pointer;
    }
`;
