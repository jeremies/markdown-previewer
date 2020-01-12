class MaximizableBox extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="maximizable-box">
				<div className="header">
					<span>
						<i className="fa fa-fw fa-rocket"></i>
						{this.props.title}
					</span>
					<i className="fa fa-fw fa-window-maximize"></i>
				</div>
				<div>{this.props.content}</div>
			</div>
		);
	}
}

class Editor extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<MaximizableBox title="Editor" content={<textarea id="editor"/>} />
		);
	}
}

class Previewer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<MaximizableBox title="Previewer" content={<div id="previewer">hola</div>} />
		);
	}
}

class MarkdownPreviewer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="container">
				<Editor />
				<Previewer />
			</div>
		);
	}
}

ReactDOM.render(
	<MarkdownPreviewer />, 
	document.getElementById('root')
);
