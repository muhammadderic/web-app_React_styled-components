import { StyledCard } from "../styled/Card.styled"

export default function Card({ item: { id, title, body, image } }) {
  return (
    <StyledCard layout={id % 2 === 0 && "row-reverse"} >
      <div className="content">
        <h2 className="title">
          {title}
        </h2>
        <p className="text">
          {body}
        </p>
      </div>
      <img src={image} alt="content 1" />
    </StyledCard>
  )
}