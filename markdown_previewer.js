class MaximizableBox extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id={this.props.id} className="maximizable-box">
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
			<MaximizableBox id="editor-box" title="Editor" content={<textarea id="editor"/>} />
		);
	}
}

class Previewer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<MaximizableBox id="previewer-box" title="Previewer" content={<div id="previewer">hola</div>} />
		);
	}
}

class MarkdownPreviewer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editorText: ''
		};
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
