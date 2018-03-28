import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { FsService } from 'ngx-fs';
import 'codemirror/mode/javascript/javascript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Melon DevApp';
  codeContent: string;
  projectDirectory;

  codeConfig = {
    lineNumbers: true,
    mode: 'javascript'
  };

  data: any = {
    textContent: '(empty code)'
  };
  template = [
    {
        label: 'Load Project'
    }
  ];

  constructor(private _electronService: ElectronService, private _fsService: FsService) {}

  OnInit() {
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

      this.codeContent = data;
      this.codeContent = data;
    });
  }

}
