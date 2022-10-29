import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Premium.css'
import premium from '../../assets/premium.svg'

const Premium: React.FC<{}> = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className="premium-container">
      <Slider {...settings}>
        <div>
          <div className="premium-item" id="one">
            <div className="premium-text">
              Premium free for the next 3 Months
            </div>
            <img src={premium} alt="diamond" className="premium-img" />
          </div>
        </div>
        <div>
          <div className="premium-item" id="two">
            <div className="premium-text">
              Premium free for the next 3 Months
            </div>
            <img src={premium} alt="diamond" className="premium-img" />
          </div>
        </div>
        <div>
          <div className="premium-item" id="three">
            <div className="premium-text">
              Premium free for the next 3 Months
            </div>
            <img src={premium} alt="diamond" className="premium-img" />
          </div>
        </div>
        <div>
          <div className="premium-item" id="four">
            <div className="premium-text">
              Premium free for the next 3 Months
            </div>
            <img src={premium} alt="diamond" className="premium-img" />
          </div>
        </div>
      </Slider>
    </div>
    // <Container mt="5" mb="5">
    //   <Slider {...settings}>
    //     <Center
    //       bg="yellow.100"
    //       h="60px"
    //       fontFamily="Average"
    //       fontSize="20px"
    //       fontWeight="400"
    //     >
    //       This is the content
    //     </Center>
    //     <Center
    //       bg="blue.100"
    //       h="60px"
    //       fontFamily="Average"
    //       fontSize="20px"
    //       fontWeight="400"
    //     >
    //       This is the content
    //     </Center>
    //     <Center
    //       bg="green.100"
    //       h="60px"
    //       fontFamily="Average"
    //       fontSize="20px"
    //       fontWeight="400"
    //     >
    //       This is the content
    //     </Center>
    //   </Slider>
    // </Container>
  )
}

export default Premium
