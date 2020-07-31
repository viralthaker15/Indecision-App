//========== import ===========

import React from "react";
import Modal from "react-modal";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

//=========== code ==========

export default class IndecisionApp extends React.Component {
	state = {
		options: [],
		selectedOption: undefined,
	};

	handleDeleteOptions = () => {
		this.setState(() => ({ options: [] }));
	};

	handleDeleteOption = optionToRemove => {
		this.setState(prevState => ({
			options: prevState.options.filter(option => {
				return optionToRemove !== option;
			}),
		}));
	};

	handleClearSelectedOption = () => {
		this.setState(() => ({ selectedOption: undefined }));
	};

	handlePick = () => {
		const option = this.state.options[
			Math.floor(Math.random() * this.state.options.length)
		];
		this.setState(() => ({ selectedOption: option }));
	};

	handleAddOption = option => {
		if (!option) return "Enter valid value to add !";
		else if (this.state.options.indexOf(option) > -1)
			return "This option already exists !";

		this.setState(prevState => ({ options: prevState.options.concat(option) }));
	};

	componentDidMount() {
		try {
			const json = localStorage.getItem("options");
			const options = JSON.parse(json);

			if (options) {
				this.setState(() => ({ options }));
			}

			Modal.setAppElement("body");
		} catch (e) {
			//do Nothing at all
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length != this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem("options", json);
		}
	}

	// componentWillMount() {
	// 	Modal.setAppElement("body");
	// }

	componentWillUnmount() {
		console.log("component will unmount");
	}

	render() {
		const title = "Indecision App";
		const subtitle = "Put your life in the hands of a computer";

		return (
			<div>
				<Header title={title} subtitle={subtitle} />
				<div className='container'>
					<Action
						hasOptions={this.state.options.length > 0}
						handlePick={this.handlePick}
					/>
					<div className='widget'>
						<Options
							options={this.state.options}
							handleDeleteOptions={this.handleDeleteOptions}
							handleDeleteOption={this.handleDeleteOption}
						/>
						<AddOption handleAddOption={this.handleAddOption} />
					</div>
				</div>
				<OptionModal
					selectedOption={this.state.selectedOption}
					handleClearSelectedOption={this.handleClearSelectedOption}
				/>
			</div>
		);
	}
}
