import React from "react";

/* Local Imports */
import Button from "../Components/Button";
import styles from "../Styles/Global";
import assets from "../assets";
function SectionWrapper({
	title,
	desc,
	showBtn,
	banner,
	mockupImage,
	reverse,
}) {
	return (
		<div
			className={`min-h-screen ${styles.section} 
      ${reverse ? styles.bgWhite : styles.bgPrimary}
       ${banner}`}
		>
			<div
				className={`flex items-center 
      ${reverse ? styles.boxReverseClass : styles.boxClass}`}
			>
				<div
					className={` ${
						reverse ? "fadeRightMini" : "fadeLeftMini"
					} 
        ${reverse ? styles.textRight : styles.textLeft}
        ${styles.descDiv} `}
				>
					<h1
						className={`${styles.h1Text}
          
          ${reverse ? styles.blackText : styles.whiteText}
          `}
					>
						{title}
					</h1>
					<p
						className={`${styles.descriptionText}
          ${reverse ? styles.blackText : styles.whiteText}`}
					>
						{desc}
					</p>
					{showBtn && (
						<Button
							assetUrl={assets.expo}
							title="View Expo"
							link="Deployed nfd marketplace"
						/>
					)}
				</div>
				<div
					className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}
				>
					<img
						className={`${styles.sectionImg}
            ${reverse ? "fadeLeftMini" : "fadeRightMini"} 
            `}
						src={mockupImage}
						alt="mockup"
					/>
				</div>
			</div>
		</div>
	);
}

export default SectionWrapper;
