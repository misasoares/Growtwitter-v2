import { Typography } from "@mui/material";
import { TimelineContainer } from "./TimelineStyled";
import { TweetsDTO } from "../../store/modules/tweets/tweetsSlice";

interface TimeLineProps {
  tweets?: TweetsDTO[];
  users: any[];
}

export default function TimeLine({ tweets, users }: TimeLineProps) {
  return (
    <TimelineContainer>
      {tweets}
      {users}
      <Typography variant="h1">TIMELINE</Typography>
    </TimelineContainer>
  );
}
