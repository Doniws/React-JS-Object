const RenderList = props => {
    const animals = [
        {
            id: 1, animal: "Dog",
            img: "../../../Social IDN/src/assets/images/profile.webp",
        },
        { id: 2, animal: "Bird" },
        { id: 3, animal: "Cat" },
        { id: 4, animal: "Mouse" },
        { id: 5, animal: "Horse" }
    ];


    return (
        <div>
            <ul>
                {animals.map(animal => (
                    <li key={animal.id}>
                        <a>{animal.animal}</a>
                        <img src={animal.img}></img>
                    </li>
                ))}
            </ul>
        </div>
    );
};



export default RenderList;