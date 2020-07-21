import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import tags from "../../config/tags.json"
const Post = ({ id, title, published_at, tag_list, description }) => (
  <Card>
    <PostHeading>{title}</PostHeading>
    <p>{description}</p>
    <div>
      {tag_list.map(tag => {
        const { bg_color_hex, text_color_hex } =
          tags.filter(_tag => tag === _tag.name)[0] || {}

        return (
          <Tag color={text_color_hex} bg_color={bg_color_hex}>
            {tag}
          </Tag>
        )
      })}
    </div>
    <PostInfo>&#x1F4C6; {new Date(published_at).toDateString()}</PostInfo>
    <ContinueReadingBtn to={`/article/${id}`}>
      Continue Reading{" "}
    </ContinueReadingBtn>
  </Card>
)

export default Post

const Card = styled.div`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 16px 24px;
  margin: 20px 0;
  border-radius: 12px;
  background-color: #f5f8fa;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

const PostHeading = styled.h2`
  color: #0096cc;
`

const PostInfo = styled.p`
  display: block;
  color: grey;
  font-size: 12px;
`

const Tag = styled.span`
  :before {
    content: "#";
  }
  padding: 6px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
  margin-right: 5px;
  background-color: ${props => props.bg_color || "transparent"};
  color: ${props => props.color || "black"};
`

const ContinueReadingBtn = styled(Link)`
  text-decoration: none;
  color: #0096cc;
  font-size: 14px;
`
