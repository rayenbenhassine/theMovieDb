type Props = {
  imageUrl: string;
};

export default function Poster({ imageUrl }: Props) {
    return (
        <div
            className="shadow-lg h-auto transition ease-in-out rounded-md hover:scale-105 hover:cursor-pointer hover:shadow-2xl">
            <img className="rounded-md object-cover" src={imageUrl} alt="image"/>
        </div>
    )

}
