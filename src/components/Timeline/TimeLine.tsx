import { TweetsDto } from "../../store/modules/tweets/tweetsSlice";
import CardTweet from "../card-tweets/CardTweet";
import { TimelineContainer } from "./TimelineStyled";

interface TimeLineProps {
  tweets: TweetsDto[];
}

export default function TimeLine({ tweets }: TimeLineProps) {
  return (
    <TimelineContainer>
      <div>
        {tweets.map((tweet) => (
          <div key={tweet.id}>
            <CardTweet tweet={tweet} />
          </div>
        ))}
      </div>
    </TimelineContainer>
  );
}
