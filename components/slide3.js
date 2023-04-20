import Link from "next/link";
const Slide3 = () => {
    return (
        <section id="services" className="flex_center margin_top15 flex_colom ">
            <h2 className="text_center">
                Услуги организации
            </h2>
            <h4>
                Воспользуйтесь любой из них в два клика!
            </h4>

            <div className={"grid grid_service"}>
                <div className="flex_service">
                    <h3>
                        Ремонтные услуги
                    </h3>
                    {/* TODO: Вставить описание */}
                    <p>

                        Все виды ремонтных работ по низкой цене
                    </p>



                    <Link href={`#service`}>
                        <button className="button_service">
                            Арендовать услугу
                        </button>
                    </Link>
                </div>

                <div className={"service1"}></div>

                <div className={"service2"}></div>

                <div className="flex_service">
                    <h3 className="w75">
                        Присоединение вашего жилого объекта к услугам организации
                    </h3>
                    {/* TODO: Вставить описание */}
                    <p>
                        Воплощаем желаемое в действительное
                    </p>
                    <button className="button_service">
                        Оставить заявку
                    </button>
                </div>

                <div className="flex_service">
                    <h3>
                        Предоставление рабочих мест
                    </h3>
                    {/* TODO: Вставить описание */}
                    <p>
                        Заботимся и ценим каждого сотрудника
                    </p>
                    <button className="button_service">
                        Оставить резюме
                    </button>
                </div>

                <div className={"service3"}></div>
            </div>

        </section>
    )
}
export default Slide3;