import { shallowMount } from "@vue/test-utils";
import ActionButton from "@/components/Shared/ActionButton.vue";

describe("ActionButton", () => {
  it("should render button text", () => {
    const wrapper = shallowMount(ActionButton, {
      props: {
        text: "button text",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("button text");
  });

  it("should render class for button", () => {
    const wrapper = shallowMount(ActionButton, {
      props: {
        text: "button text",
        type: "primary",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
