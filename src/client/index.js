require.config({ paths: { vs: 'node_modules/monaco-editor/dev/vs' } });
			require(['vs/editor/editor.main'], function () {
				var editor = monaco.editor.create(document.getElementById('container'), {
					value: ['print("hello")'].join('\n'),
					language: 'python'
				});
				console.log(editor.getValue())
			});
