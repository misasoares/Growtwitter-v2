import { Typography } from "@mui/material";
import { TimelineContainer } from "./TimelineStyled";

interface TimeLineProps {
  tweets: any[];
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
