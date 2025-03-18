import styles from './carousel.module.css'
import CSKVsRCB from '../../assets/CSKVsRCB.jpg'
import RCBvsPBKs from '../../assets/RCBvsPBKs.jpg'
import Laughterchef from '../../assets/Laughterchef.jpg'

const Carousel = () => {
  return (
    <>
        <section className={styles.carousel}>
          <img className={styles.slide1} src={RCBvsPBKs} alt="RCBvsPBKs" />
          <img className={styles.slide2} src={CSKVsRCB} alt="CSkvsRCB" />
          {/* <img className={styles.slide3} src={Laughterchef} alt="SRHvsRCB" /> */}
        </section>  
    </>
  )
}

export default Carousel