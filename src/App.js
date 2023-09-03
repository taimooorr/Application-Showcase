
/* Local Imports */
import { Download, Features, SectionWrapper } from "./Components";

import assets from "./assets/index";
import styles from "./Styles/Global";
const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs"
        desc="Buy, Store, Collect NFTs, exchange & earn Crypto. Join Millions of People using ProNef Marketplace"
        showBtn
        mockupImage={assets.homeHero}
        banner="banner"
      >
      </SectionWrapper>
      <SectionWrapper
        title="Smart User Interface Marketplace"
        desc="Experience a buttery UI of ProNef NFTs Marketplace. Smooth constant colors of fluent UI design"
        mockupImage={assets.homeCards}
        reverse
      >
      </SectionWrapper>
      <Features />
      <SectionWrapper
        title="Deployment"
        desc="ProNef is built using Expo which runs natively on all user devices. You can easily get your app into people's hands "

        mockupImage={assets.feature}
        reverse
      >
      </SectionWrapper>
      <SectionWrapper
        title="Creative way to earn Crypto"
        desc="This app contains two Screens. The First screen list all NFTs and the second screen is the detail screen of the NFT. "
        mockupImage={assets.mockup}
        banner="banner02"
      >
      </SectionWrapper>
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
          <span className="bold">JavaScript Mastery</span>
        </p>
      </div>
    </>
  );
}

export default App;
