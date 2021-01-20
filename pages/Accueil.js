import React from 'react'
import { useLocation, Link as OriginalLink } from 'react-router-dom'
import { Link } from './Lang'
import Emoji from './Emoji'
import { motion } from 'framer-motion'
import TwitterLogo from './images/Twitter_Logo_Blue.png'
import FacebookLogo from './images/FacebookLogo.png'
import LinkedinLogo from './images/LinkedinLogo.png'
import YouTubeLogo from './images/YouTubeLogo.png'
import Logo from './Logo.js'

export default () => {
	return (
		<div>
			<header
				css={`
					> section {
						height: 65vh;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
					}
					h1 {
						font-size: 120%;
					}
				`}
			>
				<section>
					<motion.div
						animate={{ scale: [1.5, 1] }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
					>
						<Logo />
					</motion.div>
					<h1>Révolutionner la mobilité via les communs</h1>
					<p>
						L'association pour construire les nouvelles mobilités en réunissant
						tous les acteurs autour de communs open source.
					</p>
					<br />
				</section>
				<footer
					css={`
						ul {
							padding: 0;
							list-style-type: none;
							display: flex;
							align-items: center;
							justify-content: center;
							li {
								display: inline-block;
								margin: 1rem;
							}
						}
					`}
				>
					<ul>
						<li>
							<a href="https://twitter.com/fab_mob" title="twitter">
								<img css="width: 2.1rem" src={TwitterLogo} alt="twitter" />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/company/fabmob/"
								title="linkedin"
							>
								<img css="width: 1.6rem" src={LinkedinLogo} alt="linkedin" />
							</a>
						</li>
						<li>
							<a
								href="https://www.youtube.com/channel/UC7jt1WuLQbb15ois1PQ-clw"
								title="YoutUbe"
							>
								<img
									css="width: 1.6rem"
									src={YouTubeLogo}
									alt="notre chaîne youtube"
								/>
							</a>
						</li>
						<li>
							<a
								href="contact@fabmob.io"
								title="courriel"
								css="img {font-size: 120%}"
							>
								<Emoji emoji="✉" />
							</a>
						</li>
					</ul>
				</footer>
			</header>
		</div>
	)
}