import { useLayoutEffect, useState } from 'react';
import SlickCarousel from 'react-slick';
import useStyles from './style';
import Card from '../card';
import Axios from 'axios';

interface Props {
  querySearch: string;
  type: string;
}

const Carousel = ({ querySearch, type }: Props): JSX.Element => {
  const [movies, setMovies] = useState<Array<object | any>>();
  const [isLoading, setIsLoading] = useState(false)
  const styles = useStyles();

  useLayoutEffect(() => {
    const getMovies = async() => {
      setIsLoading(true)
      const {data} = await Axios.get(`http://www.omdbapi.com/?apikey=b94a337b&type=${type}&s=${querySearch}`);
      setIsLoading(false)
      setMovies(data.Search); 
    }
    getMovies()
},[type, querySearch])

    const settings: any = {
        className: "sliderWidth",
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 4,
        centerPadding: "60px",
        centreMode: true,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
            <>
              <div className={styles.category}>{type !== 'series' ? `${type}s` : type}</div>
              <SlickCarousel {...settings}>
                {isLoading ? <div>Loading...</div> :
                  movies && movies?.length > 0 ?
                    movies?.map((movie, index) => {
                      return (
                        <Card key={index} title={movie.Title} image={movie.Poster}   />
                      )
                    })
                  : 
                  <div>No {type}</div>
                }
              </SlickCarousel>
            </>
          );
};

export default Carousel;
