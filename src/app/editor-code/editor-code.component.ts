import { Component, OnInit } from '@angular/core';

import { CodeMirror } from 'codemirror';
import { CodemirrorComponent } from 'ng2-codemirror';
import { ElectronService } from 'ngx-electron';
import { FsService } from 'ngx-fs';

@Component({
  selector: 'app-editor-code',
  templateUrl: './editor-code.component.html',
  styleUrls: ['./editor-code.component.css']
})
export class EditorCodeComponent implements OnInit {

  codeContent: String = '(empty code)';
  projectDirectory;
  editor: CodeMirror;

  codeConfig = {
    lineNumbers: true,
    autoRefresh: true,
    mode: 'javascript'
  };

  data: any = {
    textContent: '(empty code)'
  };
  template = [
    {
      label: 'New Project'
    }, {
      label: 'Load Project'
    }, {
      label: 'Publish'
    }
  ];

  constructor(private _electronService: ElectronService, private _fsService: FsService) { }

  ngOnInit() {
    console.log('ngOnInit()');

    const Menu = this._electronService.remote.Menu;
    const menu = Menu.buildFromTemplate(this.template);
    Menu.setApplicationMenu(menu);
  }

  openFileDialog() {
    const dialog = this._electronService.remote.dialog.showOpenDialog({properties: ['openFile']});
    console.log(dialog);
    this.openFile(dialog[0]);
  }

  openProjectDialog() {
    const dialog = this._electronService.remote.dialog.showOpenDialog({properties: ['openDirectory']});
    console.log(dialog);
    this.openFile(dialog[0]);
  }

  openProject(dirPath) {
    const fs = this._fsService.fs as any;

    fs.readdir(dirPath, (err, dir) => {
      for (let i = 0, path; path = dir[i]; i++) {
        console.log(path);
      }
    });
  }

  openFile(fileName) {
    const teArea = document.getElementById('codeeditor');
    console.log(teArea);
    console.log(this.codeConfig);

    this.editor = CodeMirror.fromTextArea(teArea, this.codeConfig);
    // this.editor = document.querySelector( '#codeeditor' );
    console.log('codeeditor: ', this.editor);

    console.log('fileNames: ', fileName);
    if (fileName === undefined) {
      console.log('No files were selected');
      return;
    }

    const fs = this._fsService.fs as any;
    fs.readFile(fileName, 'utf-8', (err, data) => {
      if (err) {
        console.log('Cannot read file', err);
        return;
      }
      console.log(this.data.textContent);
      this.data.textContent = data;

      console.log(this.data.textContent);
      this.editor.refresh();

    });
  }

}
