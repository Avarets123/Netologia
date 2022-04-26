import Video from "../Video";
import Article from "../Article";
import UpgradedWithHoc from "../../HOC/UpgradedWithHoc/UpgradedWithHoc";

const UpgradedVideo = UpgradedWithHoc(Video);
const UpgradedArticle = UpgradedWithHoc(Article);

function List(props) {


    const { list } = props;

    const renderList = () => {

        return list.map(el => {

            if (el.type === 'video') {
                return <UpgradedVideo {...el} />
            } else {
                return <UpgradedArticle {...el} />
            }
        })
    }





    return (
        renderList()
    );
}

export default List;