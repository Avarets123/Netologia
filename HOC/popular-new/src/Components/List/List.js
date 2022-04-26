import Video from "../Video";
import Article from "../Article";
import UpgradeWithHoc from "../../HOC/UpgradeWithHoc/UpgradeWithHoc";

const UpgradedVideo = UpgradeWithHoc(Video);
const UpgradedArticle = UpgradeWithHoc(Article);

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