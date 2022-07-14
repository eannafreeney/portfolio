import React from "react"
import styled from "styled-components"

// comps
import Card from "./Card"

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(368.6px, 1fr));
  gap: 32px;
  margin: 64px 0;
`

const Cards = ({ cards }) => {
  return (
    <CardsContainer>
      {cards.map(card => {
        const { id, title, slug, image, stack, description, github, url } =
          card.frontmatter
        return (
          <Card
            key={id}
            title={title}
            image={image}
            slug={slug}
            stack={stack}
            description={description}
            github={github}
            url={url}
          />
        )
      })}
    </CardsContainer>
  )
}

export default Cards
