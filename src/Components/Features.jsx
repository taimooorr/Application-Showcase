import React from 'react'

import assets from '../assets'
import styles from '../Styles/Global'


const FeatureCard = ({iconText,iconUrl}) => {
  return (
    <div className={styles.featureCard}>
      {iconText}
      <img src={iconUrl} alt={iconText} className={styles.featureImg} />
      <p className={styles.featureText}>{iconText}</p>
    </div>
  )
}

function Features() {
  return (
		<div
			className={`${styles.section} ${styles.bgPrimary} banner03`}
		>
			<div
				className={`${styles.subSection} flex-col text-center`}
			>
				<div>
					<h1
						className={`${styles.h1Text} ${styles.whiteText}`}
					>
						Technologies
					</h1>
					<p
						className={`${styles.pText} ${styles.whiteText}`}
					>
						ProfNef has been Developed using a
						cross-platform technology, React Native.
					</p>
				</div>
				<div className={styles.flexWrap}>
					<FeatureCard
						iconUrl={assets.react}
						iconText={"React"}
					/>
					<FeatureCard
						iconUrl={assets.javascript}
						iconText={"JavaScript"}
					/>
				</div>
			</div>
		</div>
  );
}

export default Features