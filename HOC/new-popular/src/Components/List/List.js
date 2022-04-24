import Video from "../Video";
import Article from "../Article";

function List(props) {


    const { list } = props;

    const renderList = () => {

        return list.map(el => {

            if (el.type === 'video') {
                return <Video {...el} />
            } else {
                return <Article {...el} />
            }
        })
    }





    return (
        renderList()
    );
}

export default List;