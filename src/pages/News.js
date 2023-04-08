import NewsItem from './NewsItem'
const {useEffect,useState} =require("react")

const News = () => {
    const [items, setItems] = useState([]);

    const fetchData = async () => {
        return await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=6aa6251dd9b04a7195eda09d12322204")
            .then((res) => res.json())
            .then((data) => { setItems(data.articles) })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        let d = fetchData();
        console.log(d);
    }, [])

    return (
        <div style={{ backgroundColor: "#ecf0f1" }}>
            <div className='container'>
                <NewsItem  newitems={items}/>
            </div>
        </div>
    )
}

export default News