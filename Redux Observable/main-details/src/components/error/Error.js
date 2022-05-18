


function refreshPage() {
    window.location.reload();
}

const Error = () => {

    const onClick = () => {
        refreshPage();
    }

    return (
        <h3 className="header-error">Произошла ошибка<span className="again" onClick={() => onClick()}> Повторить запрос</span></h3>
    )
};

export default Error