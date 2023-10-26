type Props = {
    rate:number;
}


let nota = 2.5

export const EmojiRating = ({rate}:Props) => {
    
    if(nota > 5) nota = 5;
    if(nota < 0) nota = 0;

    const emojis = ['','😵','😒','😑','😉','😁'];  

    const rateInt = Math.floor(nota);

    const stars = `${emojis[rateInt]}`.repeat(rateInt) + '🫣'.repeat(5-rateInt);

    
    return(
        <div className=" flex items-center text-6xl">
            <div className="bg-gray-700 p-2 rounded">{nota.toFixed(1)}</div>
            <div className="ml-3">{stars}</div>
        </div>
    )
}