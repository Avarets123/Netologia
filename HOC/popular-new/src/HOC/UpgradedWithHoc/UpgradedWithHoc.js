import New from "../../Components/New";
import Popular from "../../Components/Popular";


function UpgradedWithHoc(Component) {

    return function (props) {
        const { views } = props;

        if (views < 100) {
            return <New >
                <Component {...props} />
            </New>
        } else {
            return <Popular>
                <Component {...props} />
            </Popular>
        }
    }
}

export default UpgradedWithHoc;