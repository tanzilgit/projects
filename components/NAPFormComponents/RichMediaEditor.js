import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { EditorState } from 'draft-js';
import dynamic from 'next/dynamic';
import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';
// import { Markup } from 'interweave';
const Editor = dynamic(
	() => import('react-draft-wysiwyg').then((mod) => mod.Editor),
	{ ssr: false }
);
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const MainContianer = styled.div`
	width: 100%;
	.wrapper-class {
		width: 100%;
		border: 1px solid rgba(0, 0, 0, 0.23);
		border-radius: 4px;
	}
	.toolbar-class {
		background: #eee;
	}
	.editor-class {
		padding: 15px;
	}
	.rdw-option-wrapper {
		margin: 5px;
		padding: 8px;
		height: 30px;
		background: #eee;
		border: 1px solid #ccc;
	}
	.rdw-option-active {
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.23);
		background: #ccc;
		border: none;
	}
	.preview {
		p {
			margin: 15px 0;
		}
	}
`;

function RichMediaEditor({ state, onChange, ...props }) {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const [editorHtml, setEditorHtml] = useState(null);

	useEffect(() => {
		if (state) {
			setEditorState(EditorState.createWithContent(stateFromHTML(state)));
		}
	}, [state]);
	const onEditorStateChange = (state) => {
		setEditorState(state);
		setEditorHtml(stateToHTML(state.getCurrentContent()));
		onChange(editorHtml);
	};

	return (
		<MainContianer {...props}>
			<Editor
				placeholder="Enter text to start editing"
				editorState={editorState}
				toolbarClassName="toolbar-class"
				wrapperClassName="wrapper-class"
				editorClassName="editor-class"
				onEditorStateChange={onEditorStateChange}
				toolbar={{
					options: [
						'inline',
						'list',
						'textAlign',
						'colorPicker',
						'link',
						'embedded',
						'image',
						'history',
					],
				}}
			/>
		</MainContianer>
	);
}

export default RichMediaEditor;
