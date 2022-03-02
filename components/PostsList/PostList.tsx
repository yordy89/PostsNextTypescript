import { NextComponentType } from "next";
import { useState, useEffect } from "react";
import Post from "../Post/Post";
import styled from 'styled-components'
import getPosts from "../../pages/api/getPosts";

export interface Post {
  author: string;
  story_title: string;
  created_at: string;
  story_url: string;
  comment_text: string;
}

interface PostListProps {
  query: string;
  posts: Post[];
}



const PostList: React.FC<PostListProps> = ({ query, posts }) => {
  const [post, setPost] = useState<Post[]>(posts || []);

  useEffect(() => {
    getPosts(query)
    .then(setPost)
  }, [query]);

  return (
    <Container>
      {post.length !== 0 &&
        post.map((post: Post, index: number) => (
            <Post
              key={`${post.author}-${index}`}
              author={post.author}
              title={post.story_title}
              createdAt={post.created_at}
              url={post.story_url}
              body={post.comment_text}
            />
        ))}
    </Container>
  );
};

export default PostList;


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 10px;
  overflow-x: auto;
`