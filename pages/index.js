import Head from 'next/head'
import Image from 'next/image'
import { Inter } from "next/font/google"
import { Image as DatoCMSImage } from "react-datocms";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { getAddresses, getPositions, getServices, getArticles } from '@/lib/datocms'

import Link from 'next/link';
import Slide1 from '@/components/slide1';
import Slide2 from '@/components/slide2';
import Slide3 from '@/components/slide3';
import Slide4 from '@/components/slide4';
import Slide5 from '@/components/slide5';
import Invite from '@/components/invite';
import Footer from '@/components/footer';
import Positions from '@/components/positions';
import Services from '@/components/services';
import Script from 'next/script'







const inter = Inter({ subsets: ['latin'] })



export async function getStaticProps() {
  const articles = await getArticles()
  const services = await getServices()
  const addresses = await getAddresses()
  const positions = await getPositions()

  return {
    props: { articles, services, addresses, positions },
  }
}

export default function Home({ articles, services, addresses, positions }) {
  // console.log('articles', articles)
  // console.log('services', services)
  // console.log('addresses', addresses)
  // console.log('positions', positions)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main>
        <Script defer type="text/javascript" src="/yandex-metrica.js" />
        <Script defer type="text/javascript" src="/scroll.js" />
        <Slide1 />
        <Slide2 />
        {/* <Slide3 /> */}
        {/* <Slide4 /> */}
       
        {/*новости*/}
        <section id='news' className="flex_center flex_colom BC pb150">
          <h2 className="text_center margin_top5">
            Новости организации
          </h2>
          <h4 className={"text_center w45"}>
            Мы за постоянное улучшение качества жилищных условий наших объектов, и здесь вы можете посмотреть последние обновления в нашей работе
          </h4>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            
            modules={[Pagination]}
            className={"mySwiper "}
          >
            {articles.map(({ slug, title, short, mainPicture, date }) =>
              <SwiperSlide key={slug} className="BW rel flex_end ">
                <Link key={slug} href={`articles/${slug}`}>
                  <DatoCMSImage data={mainPicture.responsiveImage} />
                  <div className="pl_5 pr_5 min_height flex_colomn_sp_around">
                    <h5 className='title_news'>
                      {title}
                    </h5>
                    <p className="desc_news ">
                      {short}
                    </p>
                    <p className="date_news">
                      {date}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            )}
          </Swiper>

        </section>

        {/*  услуги */}
        <Services services={services} />

        {/* Присоединение дома к УО */}
        <Invite />

        {/* вакансии */}
        <Positions positions={positions} />
        <section className={"go-top"}>▲</section>
        <Footer />
        
      </main>
    </>
  )
}
