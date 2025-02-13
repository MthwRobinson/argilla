import { mount } from "@vue/test-utils";
import RecordExtraActions from "@/components/commons/results/RecordExtraActions";

function mountRecordExtraActions() {
  return mount(RecordExtraActions, {
    idState() {
      return {
        open: true,
      };
    },
    propsData: {
      record: {
        metadata: {
          Metadata: "metadata example",
        },
        status: "Validated",
      },
      allowChangeStatus: true,
      dataset: {
        name: "Dataset1",
      },
    },
  });
}

describe("RecordExtraActions", () => {
  let spy = jest.spyOn(console, "error");
  afterEach(() => spy.mockReset());

  test("renders properly", () => {
    const wrapper = mountRecordExtraActions();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
