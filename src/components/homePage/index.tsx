import React, {useState} from 'react';
import useGlobalStyle from '../../styles'
import Header from '../header';
import Navbar from '../navbar';
import Input from '../input'
import Slider from '../carousel'

export default function Logout() {
  const globalStyle = useGlobalStyle();
  const [querySearch, setQuerySearch] = useState('inception');
    
    return (
        <main>
          <Navbar />
          <Header /> 
          <section className={`${globalStyle.container} ${globalStyle.mt3rem} ${globalStyle.pb3rem}`}>
            <Input
            placeholder=""
              className={`${globalStyle.fullWidth} ${globalStyle.inputPadding}`}
              onBlur={(e) => setQuerySearch(e.target.value)}
            />
            <Slider querySearch={querySearch} type="movie"  />
            <Slider querySearch={querySearch} type="series"  />
            <Slider querySearch={querySearch} type="episode"  />
          </section>
        </main>
    )
}