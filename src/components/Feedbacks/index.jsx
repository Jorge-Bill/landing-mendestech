import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import { Divider } from 'components'

import config from 'config'

import 'swiper/css'
import 'swiper/css/pagination'

const Feedbacks = () => {
  const { reviews } = config
  const { title, feedbacks } = reviews
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="feedbacks">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <h6 className="text-center text-primary text-4xl font-bold tracking-tight sm:text-5xl mb-2">
          {title}
        </h6>
        <Divider />
        <Swiper
          direction={'vertical'}
          pagination={{
            clickable: true
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => setActiveIndex(e.realIndex)}
          modules={[Pagination]}
          className="md:h-96 h-[40rem] max-w-3xl"
        >
          {feedbacks.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={`
                rounded-xl-t rounded-xl-b-none shadow bg-slate-50 dark:bg-zinc-800
                duration-500 bg-bg_light_primary mx-8 p-6 h-full flex items-center gap-6
                md:flex-row flex-col
                ${activeIndex !== i && 'scale-75 blur-sm dark:bg-zinc-900'}`}
              >
                <div>
                  <p className="sm:text-base text-sm leading-relaxed sm:mb-2 md:mb-4 text-gray-700 dark:text-gray-300">
                    {content.review}
                  </p>
                  <h6 className="text-sm font-medium text-primary mt-1">
                    {String(content.name)}
                  </h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
export default Feedbacks
