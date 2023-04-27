import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/image/Logo.png";

const Header = () => {
    return (
        <header className={'padding_top4 z_index header_none'}>
            <div className={"flex_between"}>
                <nav>
                    <Link href={'#services'} className={"p_large pr30"}>Услуги</Link>
                    <Link href={'#news'} className={"p_large pr30"}>Новости</Link>
                    <Link href={'/cabinet'} className={"p_large pr30"}>Кабинет жильца</Link>
                </nav>

                <div className={"p_xxlarge Logo"}>
                    <Image
                        src={Logo}
                        alt="logo"
                        className="Logo"
                    />
                </div>

                <div className={'p_xlarge'}>
                    Телефон: +7(343)541-81-49
                </div>
            </div>
            {/* <div className="place">
                <button onClick={toggleClass}>


                </button>
                <div className={"menu hidden"} id='menu'>
                    <ul>
                        <li>Услуги</li>
                    </ul>
                </div>
            </div> */}
        </header>
    )
}
export default Header;