const appRoot = document.getElementById("app");

class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Visibility: false,
		};
		this.showdetails = this.showdetails.bind(this);
	}

	showdetails() {
		this.setState(prevstate => {
			return {
				Visibility: !prevstate.Visibility,
			};
		});
	}

	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.showdetails}>
					{this.state.Visibility ? "Hide details" : "Show details"}
				</button>
				<p>
					{this.state.Visibility &&
						"Hey These are Some details you can see now !"}
				</p>
			</div>
		);
	}
}

ReactDOM.render(<VisibilityToggle />, appRoot);
