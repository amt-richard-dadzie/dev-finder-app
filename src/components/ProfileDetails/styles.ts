import styled from "styled-components";

export const ProfileDetail = styled.section`
  display: grid;
  grid-template-areas:
    "avatar person person"
    "avatar bio bio"
    ". stat stat"
    ". link link";

  img {
    grid-area: avatar;
    border-radius: 50%;
  }

  .dev-basic-info {
    display: flex;
    justify-content: space-between;
    grid-area: person;
  }
  .bio {
    grid-area: bio;
  }
  .dev-account-info {
    background-color: #f5f7ff;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    grid-area: stat;

    p {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      font-weight: bold;
    }
  }
  .dev-links {
    grid-area: link;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    a {
      display: block;
    }
  }
`;
