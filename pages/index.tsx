import type { NextPage } from "next";
import { useState } from "react";
import PostList from "../components/PostsList/PostList";
import Search from "../components/Search/Search";
import styled from "styled-components";
import getPosts from "./api/getPosts";

export async function getServerSideProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}

const Home: NextPage<any> = ({ posts }) => {
  const [query, setQuery] = useState<string>("");

  const handleSearch = (value: string) => setQuery(value);

  return (
    <Container>
      <Content>
        <Search handleChange={handleSearch} />
        <PostList query={query} posts={posts} />
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #beb5b5;
  @media (max-width: 768px) {
    background-color: transparent;
    padding: 0px;
  }
`;

const Content = styled.div`
  width: 80%;
  height: 90vh;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    border-radius: 0px;
  }
`;
