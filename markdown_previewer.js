class Editor extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<textarea id="editor"/>
		);
	}
}

class Previewer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="previewer"/>
		);
	}
}

class MarkdownPreviewer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Editor />
				<Previewer />
				<div>hola</div>
			</div>
		);
	}
}

ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById('root'));
