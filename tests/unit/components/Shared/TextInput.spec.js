import { shallowMount } from "@vue/test-utils";
import TextInput from "@/components/Shared/TextInput.vue";

describe("TextInput", () => {
  it("should emit event on text input", () => {
    const wrapper = shallowMount(TextInput);
    const input = wrapper.find("input");
    expect(input.exists()).toBe(true);
    // console.log("emmited", wrapper.emitted());
    input.setValue("A");
    const emittedEvent = wrapper.emitted()["handleInput"];
    expect(emittedEvent).toEqual([["A"]]);
    // console.log("emmited", emittedEvent);
  });
});
