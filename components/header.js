import Link from "next/link";


const Header = () => {
    return (
        <header className={'padding_top4 z_index'}>
            <div className={"flex_between"}>
                <nav className={"flex_nav"}>
                    <Link href={'#'} className={"p_large"}>Услуги</Link>
                    <Link href={'#'} className={"p_large"}>Новости</Link>
                    <Link href={'/cabinet'} className={"p_large"}>Кабинет жильца</Link>
                </nav>

                <div className={"p_xxlarge left_margin"}>Логотип</div>

                <div className={'p_xlarge'}>
                    Телефон: +7(343)541-81-49
                </div>
            </div>
        </header>
    )
}
export default Header;