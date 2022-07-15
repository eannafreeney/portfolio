import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  padding: 32px 0;
  background: black;
  color: white;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: +1px;
  font-weight: 700;
  gap: 16px;

  .footer-container {
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 900px) {
      flex-direction: row;
      gap: 16px;
    }
  }
`

const Footer = () => (
  <StyledFooter>
    <div className="footer-container">
      <div>
        <span role="img" aria-label="emoji">
          ✉️
        </span>{" "}
        eannafreeney [at] gmail [dot] com
      </div>
      <div>
        <span role="img" aria-label="emoji">
          ☎️
        </span>{" "}
        +49 1764 2014 387
      </div>
      <a
        href="https://github.com/eannafreeney"
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label="External Link"
      >
        <span role="img" aria-label="emoji">
          👏
        </span>{" "}
        Visit on GitHub
      </a>
    </div>
  </StyledFooter>
)

export default Footer
