import uniqid from 'uniqid';
import Popular from '../../HOC/Popular';
import New from '../../HOC/New';

function Article(props) {

    if (props.views < 100) {

        return <New>
            <div key={uniqid()} className="item  item-article">
                <h3><a href="##">{props.title}</a></h3>
                <p className="views">Прочтений: {props.views}</p>
            </div>
        </New>
    }

    if (props.views > 100) {
        return <Popular>

            <div key={uniqid()} className="item  item-article">
                <h3><a href="##">{props.title}</a></h3>
                <p className="views">Прочтений: {props.views}</p>
            </div>

        </Popular>
    }

};

export default Article;