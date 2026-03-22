export default function({images, ...props}) {
    if (!images) return;
    let showing = images[0];
    return (
        <>
            <img src={showing}></img>
        </>
    );
}