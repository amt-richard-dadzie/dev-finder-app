import styled from "styled-components";

export const ProfileDetail = styled.section`
  display: grid;
  max-width: clamp(21.88rem, 6.39rem + 66.09vw, 45.63rem);
  margin: 0 auto;
  padding: 3rem 2rem;
  background-color: #fff;
  box-shadow: 0 1rem 1.875rem -0.625rem rgba(70, 96, 187, 0.2);
  border-radius: 10px;
  grid-template-areas:
    "avatar person person"
    "avatar bio bio"
    ". stat stat"
    ". link link";

  grid-row-gap: 15px;

  img {
    grid-area: avatar;
    border-radius: 50%;
  }

  .dev-basic-info {
    display: flex;
    justify-content: space-between;
    grid-area: person;

    div {
      p {
        font-size: 25px;
        font-weight: 900;
      }
      .link {
        color: blue;
        text-decoration: none;
        font-size: 18px;
      }
    }
  }
  .bio {
    grid-area: bio;
  }
  .dev-account-info {
    background-color: #f5f7ff;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 6rem 1rem 2rem;
    grid-area: stat;

    p {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      font-size: 23px;
      font-weight: bold;

      span {
        font-size: 15px;
        font-weight: 100;
      }
    }
  }
  .dev-links {
    grid-area: link;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 7px;

    .opacity-reduced {
      opacity: 0.5;
    }
    div {
      display: flex;
      gap: 0 4px;

      p {
        font-size: 18px;
      }
    }

    a {
      display: block;
      text-decoration: none;
    }
  }
  @media (max-width: 430px) {
    grid-column-gap: 7px;
    grid-template-areas:
      "avatar  person"
      "bio bio"
      "stat stat"
      "link link";

    img {
      width: 4.5rem;
      height: 4.5rem;
    }

    .dev-basic-info {
      justify-content: flex-start;
      flex-direction: column;

      div {
        p {
          font-size: 18px;
        }
      }
    }

    .dev-account-info {
      padding: 1rem;
      text-align: center;

      p {
        font-size: 20px;
      }
    }

    .dev-links {
      grid-template-columns: 1fr;

      div {
        p {
          font-size: 15px;
        }
      }
    }
  }
`;
