import React from 'react'
import styled from 'styled-components'
import {
  formatDistanceToNow,
  format,
  differenceInCalendarDays
} from 'date-fns'
import locale from 'date-fns/locale/en-US'

interface PostListProps {
  author: string;
  createdAt: string;
  url: string;
  title: string;
  body: string;
}

const BodyText =
  'I donx27t think the issue is being professional or not If the authorx27s goal is...'

const Post: React.FC<PostListProps> = ({
  author,
  createdAt,
  url,
  title,
  body
}) => {
  const TextRegex = (value: string) => {
    const text = value.replace(
      // eslint-disable-next-line
      /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
      ''
    )
    return text.slice(0, 80)
  }
  const created_At = (date: string) => {
    const dateNow = new Date(date)
    const days = differenceInCalendarDays(new Date(), dateNow)

    const formatDistanceLocale: any = {
      xSeconds: 'hace {{count}} segundo',
      xMinutes: '{{count}} minuto',
      aboutXHours: '{{count}} hora',
      xHours: '{{count}}horas',
      xDays: '{{count}} días'
    }

    function formatDistance (token: any = 'xDays', count: any, options: any) {
      options = options || {}
      const result = formatDistanceLocale[token].replace('{{count}}', count)

      if (options.addSuffix) {
        return 'hace ' + result
      }
      return result
    }

    if (days > 7) {
      return format(dateNow, 'dd/M/yyyy')
    } else {
      return formatDistanceToNow(new Date(date), {
        addSuffix: true,
        locale: {
          ...locale,
          formatDistance
        }
      })
    }
  }

  return (
    <Link href={url || 'https://www.courier.com/'} target="_blank">
      <Container>
        <Title>{title || 'Title'}</Title>
        <Content>
          <Text>{author}</Text>
          <Text>{created_At(createdAt)}</Text>
        </Content>
        <Body>{body ? `${TextRegex(body)}...` : BodyText}</Body>
      </Container>
    </Link>
  )
}

export default Post

const Container = styled.div`
  width: 100%;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  cursor: pointer;
  padding: 5px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    background-color: white;
  }
`

const Title = styled.h3`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Text = styled.h6`
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  margin: 0;
`

const Body = styled.p`
  width: 100%;
  color: rgba(0, 0, 0, 0.8);
  font-size: 14;
  margin-bottom: 0;
`
const Link = styled.a``
