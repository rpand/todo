import { renderComponent, expect } from '../test_helper';
import TaskList from '../../src/components/tast_list';

describe('Task list', =>{
  let component;

  beforeEach(() => {
    const props = {};
    component = renderComponent(TaskList, null, props);
});

  it('it displays task component for each task', =>{
    expect(component.find('Task').length).to.equal(3);
  });
});
