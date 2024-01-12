import { TweetsDto } from "../../store/modules/tweets/tweetsSlice";

interface CardProps {
  tweet: TweetsDto;
}

export default function CardTweet({ tweet }: CardProps) {
  return (
    <>
      <div>{tweet.content}</div>
    </>
  );
}
