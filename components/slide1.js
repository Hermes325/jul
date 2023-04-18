import Header from "./header";
const Slide1 = () => {
    return (
        <div className="margin_bot15">
            <Header></Header>


            <div className="BG"></div>
            <div className="grad"></div>



            <h1 className={" margin_top15 flex_center text_center p_xxxlarge"}>Управляющая организация <br /> ИП Стриганов М.С. </h1>
            <p className={'flex_center p_xxlarge'}>
                Содержание, благоустройство жилых помещений и сервис ремонтных услуг
            </p>
        </div>
    )
}
export default Slide1;