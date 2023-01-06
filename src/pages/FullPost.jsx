import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";

import { Post } from "../components";
import { Index } from "../components";
import { CommentsBlock } from "../components";

export const FullPost = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert("Error while getting the post");
      });
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Post isLoading={isLoading} />
      ) : (
        <Post
          id={data._id}
          title={data.title}
          imageUrl={data.imageUrl}
          user={data.user}
          createdAt={data.createdAt}
          viewsCount={data.viewsCount}
          commentsCount={3}
          tags={data.tags}
          isFullPost
        >
          <p>{data.text}</p>
        </Post>
      )}
      <CommentsBlock
        items={[
          {
            user: {
              fullName: "John Doe",
              avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
            },
            text: "test comment",
          },
          {
            user: {
              fullName: "Sophia Smith",
              avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
            },
            text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
          },
        ]}
        isLoading={false}
      >
        <Index />
      </CommentsBlock>
    </>
  );
};
