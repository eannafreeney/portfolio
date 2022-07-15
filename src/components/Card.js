import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const CardItem = styled.article`
  border: 1px solid #dae2ec;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  &:hover .card-img-container {
    opacity: 0.95;
    cursor: pointer;
  }
  .card-link {
    display: flex;
  }
  .card-img-container {
    flex-grow: 1;
  }
  .card-img {
    border-bottom: 1px solid #dae2ec;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    flex-shrink: 0;
  }
  .card-info {
    padding: 24px;
    flex-grow: 1;
    min-height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card-description {
    margin: 16px 0 0;
  }
  .card-github-link {
    margin: 16px 0;
    color: #969696;
  }
  .card-github-link:hover {
    opacity: 0.85;
  }
  .card-stack {
    display: flex;
    margin-bottom: 8px;
    flex-wrap: wrap;
  }
  .card-stack span {
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 16px 8px 0 0;
    font-size: 16px;
    background-color: #dae2ec;
    padding: 4px 8px;
    border-radius: 4px;
  }
  .card-icon {
    margin-right: 8px;
    font-size: 24px;
  }
`

const Card = ({ title, slug, image, stack, description, github, url }) => {
  return (
    <CardItem>
      <a href={url} className="card-link" target="_blank">
        <GatsbyImage
          image={getImage(image)}
          alt={title}
          className="card-img-container"
          imgClassName="card-img"
        />
      </a>
      <div className="card-info">
        <div className="card-info--top">
          <a href={url} target="_blank">
            <h3>{title}</h3>
          </a>
          <div className="card-description">{description}</div>
        </div>
        <div className="card-info--bottom">
          {github && (
            <a href={github} className="card-github-link" target="_blank">
              Check Github
            </a>
          )}
          <div className="card-stack">
            {stack.map((item, index) => {
              return <span key={index}>{item}</span>
            })}
          </div>
        </div>
      </div>
    </CardItem>
  )
}

export default Card
