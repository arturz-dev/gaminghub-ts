import styled, { ThemeProvider } from 'styled-components'
import DateRangeIcon from '@mui/icons-material/DateRange'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
//https://preview.themeforest.net/item/porto-multipurpose-ghost-blog-theme/full_screen_preview/47642992?_ga=2.34035297.1776867092.1704893978-58320384.1700727735

const theme = {
  primaryColor: '#E10689',
  hoverColor: 'rgba(225, 6, 137, 0.30)',
  greyTextColor: '#CDCDCD',
}

const StyledContainer = styled.div`
  background: rgb(6, 5, 24);
  background: linear-gradient(315deg, rgba(6, 5, 24, 1) 87%, rgba(34, 10, 50, 1) 100%);
  height: 100%;
  width: 1000px;
  min-height: 800px;
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Inter', sans-serif;
`

const StyledParagrapch = styled.p`
  display: flex;
  color: red;
  span {
    background: rgb(131, 58, 180);
    background: linear-gradient(0deg, rgba(131, 58, 180, 1) 0%, rgba(253, 45, 73, 1) 100%);
    width: 6px;
    margin-right: 15px;
  }
`

const StyledHeader = styled.div`
  padding: 30px 50px;
  width: 650px;
  a {
    border: 0.1rem solid ${theme.primaryColor};
    background-color: rgba(225, 6, 137, 0.2);
    border-radius: 10px;
    padding: 6px;
    &:hover {
      background-color: ${theme.hoverColor};
      transition: 0.25s;
      cursor: pointer;
    }
  }
  h1 {
    font-size: 3rem;
    margin-bottom: 1px;
  }
  p {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 2rem;
    color: ${theme.greyTextColor};
  }
`
const PostData = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  img {
    height: 40px;
    width: 40px;
    border-radius: 100%;
  }
  h4 {
    font-weight: 700;
    font-size: 1.2rem;
  }
  h5 {
    font-weight: 400;
    font-size: 1.1rem;
    color: ${theme.greyTextColor};
    margin-left: -11px;
    margin-bottom: 25px;
  }
`

const PostArticle = styled.article`
  width: 750px;
  display: flex;
  flex-direction: column;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  h1 {
    text-align: left;
    width: 100%;
    margin-bottom: 0;
    font-size: 2.25rem;
  }
  p {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 2rem;
    margin: 50px 0;
    color: ${theme.greyTextColor};
    margin-top: 25px;
  }
  img {
    border-radius: 15px;
    margin: 50px 0;
    width: 100%;
    height: auto;
    display: block;
  }
`

const StylCompPg = () => {
  return (
    <StyledContainer>
      <ThemeProvider theme={theme}>
        <StyledHeader>
          <a>Default</a>
          <h1>Never let your memories be greater than your dreams</h1>
          <p>
            Before long the searchlight discovered some distance away a schooner with all sails set,
            apparently the same vessel which had been noticed earlier in the evening. The wind had
            by this time backed to the east, and there was a shudder amongst the watchers on.
          </p>
          <PostData>
            <img src='https://porto.gbjsolution.com/content/images/2023/08/Apurba.jpg'></img>
            <h4>Name and Surname</h4>
            <DateRangeIcon
              fontSize='small'
              sx={{ color: theme.greyTextColor, paddingTop: '2px' }}
            />
            <h5>May 2, 2022</h5>
            <AccessTimeIcon
              fontSize='small'
              sx={{ color: theme.greyTextColor, paddingTop: '2px' }}
            />
            <h5>3 min read</h5>
          </PostData>
        </StyledHeader>
        <PostArticle>
          <img src='https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI4fHxmYXNoaW9uJTIwYmVhdXR5fGVufDB8fHx8MTY5MjQ0NTA2MHww&ixlib=rb-4.0.3&q=80&w=2000' />
          <p>
            Before long the searchlight discovered some distance away a schooner with all sails set,
            apparently the same vessel which had been noticed earlier in the evening. The wind had
            by this time backed to the east, and there was a shudder amongst the watchers on.
          </p>
        </PostArticle>
        <PostArticle>
          <h1>Wherever you go, go with all your heart</h1>
          <p>
            It was now nearly the hour of high tide, but the waves were so great that in their
            troughs the shallows of the shore were almost visible, and the schooner, with all sails
            set, was rushing with such speed that, in the words of one old salt, "she must fetch up
            somewhere, if it was only in hell.
          </p>
          <img src='https://images.unsplash.com/photo-1487744137800-5282ebdb0ba3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ' />
          <p>
            Then came another rush of sea-fog, greater than any hitherto--a mass of dank mist, which
            seemed to close on all things like a grey pall, and left available to men only the organ
            of hearing, for the roar of the tempest, and the crash of the thunder, and the booming
            of the mighty billows came through the damp oblivion even louder than before.
          </p>
          <StyledParagrapch>
            <span></span>A mind that is stretched by a new experience can never go back to its old
            dimensions
          </StyledParagrapch>
          <p>
            The rays of the searchlight were kept fixed on the harbour mouth across the East Pier,
            where the shock was expected, and men waited breathless. The wind suddenly shifted to
            the north-east, and the remnant of the sea-fog melted in the blast; and then, mirabile
            dictu, between the piers, leaping from wave to wave as it rushed at headlong speed,
            swept the strange schooner before the blast, with all sail set, and gained the safety of
            the harbour.
          </p>
        </PostArticle>
        <PostArticle>
          <p>
            Making straight for the steep cliff, where the churchyard hangs over the laneway to the
            East Pier so steeply that some of the flat tombstones--"thruff-steans" or
            "through-stones," as they call them in the Whitby vernacular--actually project over
            where the sustaining cliff has fallen away, it disappeared in the darkness, which seemed
            intensified just beyond the focus of the searchlight.
          </p>
          <img src='https://images.unsplash.com/photo-1478562672393-2412e5b9d634?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ' />
          <p>
            Making straight for the steep cliff, where the churchyard hangs over the laneway to the
            East Pier so steeply that some of the flat tombstones--"thruff-steans" or
            "through-stones," as they call them in the Whitby vernacular--actually project over
            where the sustaining cliff has fallen away, it disappeared in the darkness, which seemed
            intensified just beyond the focus of the searchlight.
          </p>
          <StyledParagrapch>
            <span></span>Without new experiences, something inside of us sleeps. The sleeper must
            awaken. – Frank Herbert
          </StyledParagrapch>
          <p>
            It so happened that there was no one at the moment on Tate Hill Pier, as all those whose
            houses are in close proximity were either in bed or were out on the heights above. Thus
            the coastguard on duty on the eastern side of the harbour, who at once ran down to the
            little pier, was the first to climb on board. The men working the searchlight, after
            scouring the entrance of the harbour without seeing anything, then turned the light on
            the derelict and kept it there.
          </p>
        </PostArticle>
      </ThemeProvider>
    </StyledContainer>
  )
}

export default StylCompPg
