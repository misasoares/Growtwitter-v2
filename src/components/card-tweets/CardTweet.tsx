import { Typography } from "@mui/material";
import { TweetsDto } from "../../store/modules/tweets/tweetsSlice";
import { ContentTweetStyled, IconUser, InfoSection, InfoUser, TweetStyled } from "./CardTweetStyled";

interface CardProps {
  tweet: TweetsDto;
}

export default function CardTweet({ tweet }: CardProps) {
  console.log(tweet.retweets, "CARD TYWEET");
  return (
    <>
      <TweetStyled>
        <InfoSection>
          <IconUser>
            <img src={`https://www.gravatar.com/avatar/${tweet.User.iconePerfil}?d=robohash`} alt="" />
          </IconUser>
          <div>
            <InfoUser>
              <Typography fontWeight="bold">{tweet.User.name}</Typography>
              <Typography marginLeft="10px" fontSize={15} fontWeight="bold" color="#3f3f3f">
                {tweet.User.username}
              </Typography>
            </InfoUser>
            <ContentTweetStyled>
              <Typography>{tweet.content}</Typography>
            </ContentTweetStyled>
            {tweet.retweets.length > 0 && (
              <InfoSection>
                <IconUser>
                  <img src={`https://www.gravatar.com/avatar/${tweet.retweets[0].User.iconePerfil}?d=robohash`} alt="" />
                </IconUser>
              </InfoSection>
            )}
          </div>
        </InfoSection>
      </TweetStyled>
    </>
  );
}
