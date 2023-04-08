import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const NewsItem = ({newitems}) => {
    const items =newitems;

    return (
        <>
            <div className="row pt-5">
                {items.map((item, i) => (
                    <div key={i} className="col-md-4">
                        <Card style={{ width: '100%', margin: "20px" }}>
                            <Card.Img variant="top" style={{ height: "200px" }} alt='news_image' src={item.urlToImage} />
                            <Card.Body>
                                <Card.Title className='font-weight-light' style={{ fontSize: "15px", fontWeight: "600" }}>{item.title}</Card.Title>
                                <Card.Text className='font-weight-light' style={{ fontSize: "15px", fontWeight: "400", height: "100px" }}>
                                    {item.description}
                                </Card.Text>
                                <Link to={item.url} target='_blank'><Button variant="primary" >Go Read</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>


        </>
    )
}

export default NewsItem