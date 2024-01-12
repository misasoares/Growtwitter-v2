import { Typography } from "@mui/material";
import { TimelineContainer } from "./TimelineStyled";
import { TweetsDto } from "../../store/modules/tweets/tweetsSlice";
import { useEffect } from "react";

interface TimeLineProps {
  tweets: TweetsDto[];
  users: any[];
}

export default function TimeLine({ tweets, users }: TimeLineProps) {
  return (
    <TimelineContainer>
      <div>
        {tweets.map((tweet) => (
          <div key={tweet.id}>
            <p>{tweet.content}</p>
          </div>
        ))}
      </div>
    </TimelineContainer>
  );
}
