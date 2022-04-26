import uniqid from 'uniqid';


function Article(props) {

    return (
        <div key={uniqid()} className="item  item-article">
            <h3><a href="##">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
};

export default Article;