import { Component, Injector, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('shell');

  @ViewChild('mfeContainerComponent', { read: ViewContainerRef, static: true })
  mfeContainerComponent!: ViewContainerRef;

  @ViewChild('mfeContainerRemoteEntry', { read: ViewContainerRef, static: true })
  mfeContainerRemoteEntry!: ViewContainerRef;

  @ViewChild('mfeContainer1', { read: ViewContainerRef, static: true })
  mfeContainer1!: ViewContainerRef;

  @ViewChild('mfeContainer', { read: ViewContainerRef, static: true })
  mfeContainer!: ViewContainerRef;

  @ViewChild('mfeReactContainer', { read: ViewContainerRef, static: true })
  mfeReactContainer!: ViewContainerRef;

  constructor(private injector: Injector) { }

  async loadMFEComponent() {
    this.mfeContainerComponent.clear();

    const remoteModule = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4300/remoteEntry.js',
      exposedModule: './Mfe1Component',
    });

    const componentRef = this.mfeContainerComponent.createComponent(
      remoteModule.Mfe1Component,
      { injector: this.injector }
    );
  }

  async loadMFERemoteEntry() {
    this.mfeContainerRemoteEntry.clear();

    const remoteModule = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4300/remoteEntry.js',
      exposedModule: './RemoteEntry',
    });

    const componentRef = this.mfeContainerRemoteEntry.createComponent(
      remoteModule.RemoteEntry,
      { injector: this.injector }
    );
  }

  async loadMFE2() {
    this.mfeContainer.clear();

    const remoteModule = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4400/remoteEntry.js',
      exposedModule: './RemoteEntry',
    });

    const componentRef = this.mfeContainer.createComponent(
      remoteModule.RemoteEntry,
      { injector: this.injector }
    );
  }

  async loadReactMEF() {
    this.mfeReactContainer.clear();

    const remoteModule = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4500/remoteEntry.js',
      exposedModule: './ReactMFEComponent',
    });

    const componentRef = this.mfeReactContainer.createComponent(
      remoteModule.ReactMFEComponent,
      { injector: this.injector }
    );
  }
}
