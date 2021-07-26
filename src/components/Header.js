const Header = ({ logo }) => {
    return (
			<header className="header">
				<h1 className="header__logo">
					<img src={logo} alt="logo" />
				</h1>
			</header>
		);
};

export default Header;
