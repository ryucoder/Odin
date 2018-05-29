import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRenameDialogComponent } from './project-rename-dialog.component';

describe('ProjectRenameDialogComponent', () => {
  let component: ProjectRenameDialogComponent;
  let fixture: ComponentFixture<ProjectRenameDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectRenameDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRenameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
