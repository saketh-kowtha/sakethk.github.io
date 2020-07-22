import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import tags from "../../config/tags.json"
import { up } from "styled-breakpoints"
const Post = ({ id, title, published_at, tagList, description }) => (
  <Card>
    <PostHeading>{title}</PostHeading>
    <p>{description}</p>
    <div>
      {tagList &&
        tagList.map(tag => {
          const { bg_color_hex, text_color_hex } =
            tags.filter(_tag => tag === _tag.name)[0] || {}

          return (
            <Tag color={text_color_hex} bg_color={bg_color_hex}>
              {tag}
            </Tag>
          )
        })}
    </div>
    <PostInfo>
      <span role="img" aria-label="date icon">
        &#x1F4C6;
      </span>{" "}
      {new Date(published_at).toDateString()}
    </PostInfo>
    <ContinueReadingBtn to={`/articles/${id}`}>
      Continue Reading{" "}
    </ContinueReadingBtn>
  </Card>
)

export default Post

const Card = styled.div`
  padding: 16px 8px;
  ${up("md")} {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    padding: 16px 24px;
  }
  background-color: #f5f8fa;
  margin: 0 0 16px 0;
  border-radius: 12px;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

const PostHeading = styled.h2`
  color: #0096cc;
`

const PostInfo = styled.p`
  display: block;
  font-size: 0.8rem;
  color: grey;
`

const Tag = styled.span`
  :before {
    content: "#";
  }
  padding: 6px;
  border-radius: 5px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-right: 5px;
  background-color: ${props => props.bg_color || "transparent"};
  color: ${props => props.color || "black"};
`

const ContinueReadingBtn = styled(Link)`
  text-decoration: none;
  color: #0096cc;
  font-size: 0.875rem;
`
