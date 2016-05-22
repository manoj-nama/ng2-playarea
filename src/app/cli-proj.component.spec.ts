import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CliProjAppComponent } from '../app/cli-proj.component';

beforeEachProviders(() => [CliProjAppComponent]);

describe('App: CliProj', () => {
  it('should create the app',
      inject([CliProjAppComponent], (app: CliProjAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'cli-proj works!\'',
      inject([CliProjAppComponent], (app: CliProjAppComponent) => {
    expect(app.title).toEqual('cli-proj works!');
  }));
});
