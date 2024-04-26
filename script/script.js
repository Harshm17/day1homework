const Title =() =>{
    return (
        <h1>Topic Covered</h1>
    )
}
const Mypara = () =>{
    return (
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optio nobis consequatur</p>
    )
}
const Apara = () =>{
    return (
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optio nobis consequatur consectetur adipisicing elit. Ad optio nobis consequatur</p>
    )
}


const Main = () =>{
    return (
        <div>
            <Title />
        <Mypara />
        <a href="//">Getting started with web</a>
        <Apara/>
        <a href="//">HTML- Sturcturing the web</a>
        <Apara/>
        <a href="//">CSS- Styling the web</a>
        <Apara/>
        </div>
        


    );
};
ReactDOM.render(<Main/>,document.querySelector("#root"));