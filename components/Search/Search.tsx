import React from 'react'
import styled from 'styled-components'
import SearchIcon from '../../public/search.svg'

interface SearchProps {
  handleChange: Function;
}

const Search: React.FC<SearchProps> = ({ handleChange}) => {

  const SvgSearch = (props: any) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 224 225"
    >
      <path d="M75 12.4c-29.8 6.7-53.6 29.1-61.5 58.1-4.1 15.1-2.8 36.3 3.2 51.2 18.7 46.6 76.7 64.9 118.6 37.3 6.9-4.5 18-15.2 22.4-21.6 4-5.6 9.2-17 11.5-25 2.9-10.4 3.2-30.4.4-40.4-8.5-31-31.6-53.2-61.9-59.4-8.9-1.9-24.8-1.9-32.7-.2zm32.5 19.8c10.8 3.1 18.2 7.5 26.5 15.8 17.5 17.4 23.1 41.7 15 64.7-6.1 17.4-20.5 31.8-38 38-9.8 3.5-25.4 4.3-35.1 1.9-17.6-4.4-33-16.7-40.8-32.6-6.9-14-8.5-26.2-5.5-40.8 2.4-12.1 7.5-21.3 16.9-30.8 17-17.1 38.3-22.8 61-16.2zM159.5 144.8c-2.8 3.7-8.9 9.8-13.5 13.5-4.7 3.7-8.5 7.2-8.5 7.7 0 1.8 43.1 44.2 47 46.3 5.9 3 12.6 2.7 17.8-1 5.7-4 9.8-10.1 10.4-15.6 1-8.6-.3-10.5-24.5-35-12.4-12.5-22.8-22.7-23.1-22.7-.3 0-2.9 3.1-5.6 6.8z" />
    </svg>
  )
  return (
    <Container>
      <SvgSearch />
      <Input type="search" onChange={(e: any) => handleChange(e.target.value)}/>
    </Container>
  )
}

export default Search

const Container = styled.div`
  background-color: #beb5b5;
  width: 30%;
  height: 30px;
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 5px;
`

const Input = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  height: 100%;
  &:focus {
    outline: none;
  }
`