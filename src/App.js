import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* <img src="./icon_btoshi.png" className="App-logo" alt="logo" />
				<img src="./bt.png" class="letters" alt="bt" id="letters" /> */}
				<div className="test"></div>
				<nav>
					<a href=".tokenomics" className="navItem">
						TOKENOMICS
					</a>

					<a href="https://www.google.com">
						<img src="https://static.wixstatic.com/media/c7623f_25a0b4776d8b41449bb6e43ea9353019~mv2.png/v1/fill/w_29,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c7623f_25a0b4776d8b41449bb6e43ea9353019~mv2.png" />
					</a>
					<a href="https://www.google.com">
						<img src="https://static.wixstatic.com/media/c7623f_bd7dc872e91f428c95522704b0f099e2~mv2.png/v1/fill/w_29,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c7623f_bd7dc872e91f428c95522704b0f099e2~mv2.png" />
					</a>
					<a href="https://www.google.com">
						<img src="https://static.wixstatic.com/media/c7623f_20ddedeab0c941eda43a2582de29c1a4~mv2.png/v1/fill/w_29,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c7623f_20ddedeab0c941eda43a2582de29c1a4~mv2.png" />
					</a>
				</nav>
			</header>
			<div id="home">
				<div className="description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a
					mollis nunc. Quisque magna tellus, aliquet porttitor aliquet et,
					pharetra non nibh. Sed mi ante, hendrerit nec vene
				</div>

				<a href="https://www.google.com" id="buy">
					BUY
				</a>
			</div>

			<div className="tokenomics">
				<h1>TOKENOMICS</h1>
				<div className="boxes">
					<div className="box">
						<h2>Token Supply</h2>
						<div className="number">1,000,000,000</div>
						<p>
							No taxes, ​liquidity locked, contract ownership renounced. It’s
							that simple.
						</p>
					</div>
					<div className="box">
						<h2>Token Address</h2>
						<p>0x9A3b7959e998BF2B50EF1969067D623877050D92</p>
					</div>
				</div>
			</div>
			<footer>
				<div className="footerLogo">
					<img src="./icon_btoshi.png" className="App-logo" alt="logo" />
					<div className="footerLetters"></div>
				</div>

				<div class="social">
					<a href="https://www.google.com">
						<img src="https://static.wixstatic.com/media/c7623f_25a0b4776d8b41449bb6e43ea9353019~mv2.png/v1/fill/w_29,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c7623f_25a0b4776d8b41449bb6e43ea9353019~mv2.png" />
					</a>
					<a href="https://www.google.com">
						<img src="https://static.wixstatic.com/media/c7623f_bd7dc872e91f428c95522704b0f099e2~mv2.png/v1/fill/w_29,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c7623f_bd7dc872e91f428c95522704b0f099e2~mv2.png" />
					</a>
					<a href="https://www.google.com">
						<img src="https://static.wixstatic.com/media/c7623f_20ddedeab0c941eda43a2582de29c1a4~mv2.png/v1/fill/w_29,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c7623f_20ddedeab0c941eda43a2582de29c1a4~mv2.png" />
					</a>
				</div>
				<p>© 2024 Btoshi</p>
			</footer>
		</div>
	);
}

export default App;
