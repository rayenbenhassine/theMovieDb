type Props = {
  imageUrl: string;
};

export default function Poster({ imageUrl }: Props) {
  return <img className="rounded-md object-cover" src={imageUrl} alt="image" />;
}
