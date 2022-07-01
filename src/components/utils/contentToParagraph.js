import React from "react"
import {contentParagraph} from "../../comp-styles/main-style.module.css"

export default function contentToParagraph(content) {
  return content.map((paragraph, index) => {
    return <p key={index} className={contentParagraph}>{paragraph}</p>;
  });
}