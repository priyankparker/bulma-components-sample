import React from "react";
import Link from "../../../components/Link";
import Image from "../../../components/Image";
import Subtitle from "../../../components/Subtitle";
import Byline from "../../../components/Byline";

function StoryOne({ url, multimedia, title, byline, imgStyle = {}, ...props }) {
  return (
    <>
    {multimedia && multimedia[4] && multimedia[4].url && (
      <Link to={url}>
        <Image
          src={multimedia[4].url}
          size="fullwidth"
          className="fitImage"
          imgStyle={{
            objectFit: "cover",
            height: "10rem",
            ...imgStyle
          }}
          alt={title}
        />
      </Link>
      )}
      <Subtitle
        className="is-6"
        style={{
          marginTop: "0.4rem",
          marginBottom: "0.5rem"
        }}
      >
        <Link to={url} className="links">
          {title}
        </Link>
      </Subtitle>
      <Byline newLine={false}>{byline}</Byline>
    </>
  );
}

export default StoryOne;
