import { shallowMount } from "@vue/test-utils";
import Headline from "@/components/Headline.vue";

describe("Headline", () => {
  it("should render heading with first word", () => {
    const wrapper = shallowMount(Headline);
    expect(wrapper.find("h1").text()).toBe("Code for everyone");
  });

  it("should render heading with second word", async () => {
    const wrapper = shallowMount(Headline, {
      data() {
        return {
          activeWord: "design",
        };
      },
    });
    expect(wrapper.find("h1").text()).toBe("Design for everyone");
    await wrapper.setData({ activeWord: "build" });
    // getting error for below example
    // wrapper.update();
    // expect(wrapper.callTimer).toHaveBeenCalled();
  });
});
